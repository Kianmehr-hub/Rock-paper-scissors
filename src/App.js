import './App.css'
import { useState } from 'react';

const App = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [AIChoice, setAIChoice] = useState("");
    const [playerChoiceIsDisplayed, setPlayerChoiceIsDisplayed] = useState(false);
    const [AIChoiceIsDiplayed, setAIChoiceIsDiplayed] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        if (isFinished===false) {
            setPlayerChoice(parseInt(e.target.alt))
            setPlayerChoiceIsDisplayed(true)
            setAIChoiceIsDiplayed(true)            
            // AI selection
            let random = Math.ceil((Math.random() * 3));
            setAIChoice(random);
            // Result
            if (AIChoice === 1) {
              if (playerChoice === 1) {
                setResult("It's a tie! Try again.")
                setIsFinished(false)
              }
              if (playerChoice === 2) {
                setResult("You lose!!!")
                setIsFinished(true)
              }
              if (playerChoice === 3) {
                setResult("You win!!!")
                setIsFinished(true)
              }
              
            }
            if (AIChoice === 2) {
                if (playerChoice === 1) {
                    setResult("You win!!!")
                    setIsFinished(true)
                }
                if (playerChoice === 2) {
                    setResult("It's a tie! Try again.")
                    setIsFinished(false)
                }
                if (playerChoice === 3) {
                    setResult("You lose!!!")
                    setIsFinished(true)
                }
            }
            if (AIChoice === 3) {
                if (playerChoice === 1) {
                    setResult("You lose!!!")
                    setIsFinished(true)
                }
                if (playerChoice === 2) {
                    setResult("You win!!!")
                    setIsFinished(true)
                }
                if (playerChoice === 3) {
                    setResult("It's a tie! Try again.")
                    setIsFinished(false)
                }
            }
            
        }
        else{
            return;
        }
    }

    const refresh = () => {
        setPlayerChoice("")
        setAIChoice(null)
        setPlayerChoiceIsDisplayed(false)
        setAIChoiceIsDiplayed(false)
        setIsFinished(false)
    }

    return ( 
       <div className='body'>
           <div className="AI's-choice">
               {AIChoiceIsDiplayed && <img src={`img/${AIChoice}.png`} alt="AI's choice"/>}
           </div>
           <div>
               {playerChoiceIsDisplayed && <img src={`img/${playerChoice}.png`} alt="Player's choice"/>}
           </div>
           <div className="result">
            {playerChoice && <p>{result}</p>}
           </div>
           <div className="button-container">
               <img src="img/2.png" onClick={(event) => handleClick(event)} alt="2"/>
               <img src="img/1.png" onClick={(event) => handleClick(event)} alt="1"/>
               <img src="img/3.png" onClick={(event) => handleClick(event)} alt="3"/>
           </div>
           <button onClick={refresh}>Refresh</button>
       </div>
    );
}
 
export default App;