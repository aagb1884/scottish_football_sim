import { useEffect, useState } from 'react';
import SFWordle from './components/SFWordle';
import solutions from './data/solutions';
import AppFooter from '../components/AppFooter'
import './index.css'

function Stramash() {
  const [solution, setSolution] = useState(null);
  const [clue, setClue] = useState(null);
  const [split, setSplit] = useState(null);
  const [category, setCategory] = useState(null);


  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
  
    setSolution(randomSolution.word);
    setCategory(randomSolution.category);
    setClue(randomSolution.clue);
    setSplit(JSON.parse(randomSolution.split));
  }, [setCategory, setSolution, setClue, setSplit]);


  return (
    <div className="stramash">
      <div className='stram-image-div'>
      <div className='stram-transparent-div'> 
      <div className='stram-title'>
      <h1 className='stram-title-header'>STRAMASH!</h1>
      <p className='stram-subheader'>It's not not Scottish Football Wordle</p>
      </div>

      {solution && split && <SFWordle 
      solution={solution} 
      clue={clue} 
      split={split}
      category={category} />}
       
        <AppFooter />
      </div>
      </div> 
    </div>
  )
}

export default Stramash;