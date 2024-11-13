import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RangersMainComponent from "../../components/MainComponent/RangersMainComponent";
import texts from "../../utils/texts";
import "./rangersGameScreen.css";

function RangersGameScreen() {
  const location = useLocation();
  const [numberOfTimesShotInTheDick, setNumberOfTimesShotInTheDick] = useState(0);
  const { game_id } = location.state || {}
  const [option, setOption] = useState(game_id || texts[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

  useEffect(() => {
    const currentText = texts.find((text) => text.id === option);
    if (currentText && currentText.shotInDickUpdate) {
      setNumberOfTimesShotInTheDick(numberOfTimesShotInTheDick + currentText.shotInDickUpdate);
    }
  }, [option]);

  const shotMessages = {
    2: "Good for you",
    3: "Don't let them kink shame you.",
    5: "If it feels good and you're consenting how can it be wrong?",
    8: "'Does this work on HMRC?'",
    10: "'Yeah come on Craig ruin me like you ruined the football club.'",
    15: "'More I say. More.'",
    20: "'WOOOOOOOOAaaa little to the left'",
    25: "'Presumably if you're still shooting me in the dick you're also into it?'",
    26: "'Yeah you're into it.'",
    30: "'Is this a spell anyone can learn?'",
    34: `'Give me a minute...'
    
          'Okay, go again.'`,
    40: "'Oooh right in the Netherbrox.'",
    50: "'I've reached the melancholy stage where I know my groin will never feel this good again.'",
    60: "'God I hope I never get used to this.'",
    70: "You're fairly sure your perineum could power the national grid.",
    75: "'Do you have a favourite type of pie?'",
    83: "Craig Whyte praises your commitment, but wonders if you want to stop yet?",
    90: "'wrstfglhnnnhgnnn'",
    100: `You have been shot in the dick by Craig Whyte one hundred times. Please download this certificate: 
    
    https://tinyurl.com/kxfyuvcs`,
    105: "Well that's probably it isn't it? Nothing else happens if you keep pressing these.",
    200: "Yeah no, that's it.",
    300: "I hope this was worth it.",
  };
  
  const shotMessage = shotMessages[numberOfTimesShotInTheDick] || "";
  
  const components = texts.map((text) => {
    return (
      <>
        <RangersMainComponent
          key={text.id}
          id={text.id}
          text={shotMessage ? 
              `${text.text}

              ${shotMessage}` : 
              text.text}
          btnLeft={text.options && text.options[0] ? text.options[0].text : " "}
          btnRight={text.options && text.options[1] ? text.options[1].text : " "}
          setOption={setOption}
          idLeft={text.options && text.options[0] ? text.options[0].nextText : null}
          idRight={text.options && text.options[1] ? text.options[1].nextText : null}
          image={text.image}
          additionalImage={text.additionalImage}
          alt={text.alt}
          additionalImageAlt={text.additionalImageAlt}
        /> 
      </>
    );
  });

  return <div className="gers-gameScreen-container">{components[option - 1]}</div>;
}

export default RangersGameScreen;