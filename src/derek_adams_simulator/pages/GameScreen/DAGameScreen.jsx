import { useState, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import "./gameScreen.css";
import static_gif from '../../images/static.gif';
import static_wav from "../../audio/static.wav";
import flicker_gif from "../../images/flicker.gif";
import ambient_wav from '../../audio/ambient_wav.wav';

function DAGameScreen() {
  const [option, setOption] = useState(texts[0].id);
  const [numberOfTimesInTheJob, setNumberOfTimesInTheJob] = useState(3);
  const [showGif, setShowGif] = useState(false);
  const [loopCount, setLoopCount] = useState(0)
  const [showFlicker, setShowFlicker] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

  const playSoundEffect = () => {
   
    const audio = new Audio(static_wav);
    audio.play();
    setShowGif(true);

    setTimeout(() => {
      setShowGif(false);
    }, 5000);
  };

  useEffect(() => {
    const audio = new Audio(ambient_wav);
    if (playMusic) {
      audio.loop = true;
      audio.play(); 
    } else {
      audio.pause();
      audio.currentTime = 0; 
    }

    return () => {
      
      audio.pause();
      audio.currentTime = 0;
    };
  }, [playMusic]); 


  const toggleGif = () => {
    setShowFlicker(!showFlicker);
  };

  const toggleMusic = () => {
    setPlayMusic(!playMusic); 
  };

  const components = texts.map((text) => {
  
    return (
      <content className="gameScreen"> 
      <div className="togglesBox">
          <div className="flickering-toggle">
          <label className="toggle">
            <input type="checkbox" checked={showFlicker} onChange={toggleGif}  />
            <span class="slider round"></span>
          </label>
          {showFlicker ? 'Stop Flicker' : 'Add Flicker'}
          {showFlicker && (
          <img
            className="flickering-screen"
            src={flicker_gif}
            alt="Flickering"
          />
          )}
          </div>
          <div className="audio-toggle">
              <label className="toggle">
                <input type="checkbox" checked={playMusic} onChange={toggleMusic}  />
                <span class="slider round"></span>
              </label>
            {playMusic ? 'Stop Music' : 'Play Music'}
          </div>
        </div>

       
        <MainComponent
          key={text.id}
          date={text.date}
          text={text.text}
          btnLeft={text.options[0].text}
          btnRight={text.options[1].text}
          setOption={setOption}
          idLeft={text.options[0].nextText}
          idRight={text.options[1].nextText}
          image={text.image}
          alt={text.alt}
        />
       
      </content>
    );
  });

  useEffect(() => {
    const currentText = texts.find((text) => text.id === option);
    if (currentText && currentText.loopCountUpdate) {
      setLoopCount(currentText.loopCountUpdate);
    }

    if (option === 1 && loopCount > 0) {
      setNumberOfTimesInTheJob(prev => prev + 1);
      playSoundEffect();
    }
  }, [option]);



  texts[0].text = `You awake to find yourself manager of Ross County F.C.

 This comes after Malky Mackay was sacked last week for being bad at his job.

Chairman Roy MacGregor said he had "known for a number of years that Derek wanted to come".
"We had 70 applications to go through, but the name Derek Adams kept coming back," he said.
"For us, it was that knowledge, determination and passion for Ross County that was the deciding factors.
"When we decided that was the route we wanted to go, we got on to it fairly quickly over the weekend and, with Morecambe's agreement, we managed to attract Derek back to the club."

You have now been Ross County manager ${numberOfTimesInTheJob} times.`;

  return (
    <div className={showFlicker ? "gameScreen-container flicker-active" : "gameScreen-container"}>
    <div className="staticScreen">{showGif && <img src={static_gif} alt="static" />}</div>
    {components[option - 1]}
    </div>
  );
}

export default DAGameScreen;