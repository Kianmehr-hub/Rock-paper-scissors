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
            // console.log(e);
            
            // AI selection
            let random = Math.ceil((Math.random() * 3));
            setAIChoice(random);
            if (AIChoice === 1) {
              if (playerChoice === 1) {
                console.log("both are one")
              }
              if (playerChoice === 2) {
                console.log("both are two")
              }
              if (playerChoice === 3) {
                console.log("both are three")
              }
              
            }
            
        }
        else{
            return;
        }
    }

    // const handleResult = () => {
    //   console.log("click")
    //   console.log(AIChoice,playerChoice);
    //   // if (AIChoice === 1 && playerChoice === 1) {
    //   //   setResult("It's a tie.TRY AGAIN!!!")
    //   //   setIsFinished(false)
    //   // }

    //   switch (AIChoice) {
    //     //paper
    //     case (AIChoice === 1) : 
    //     switch (playerChoice) {
    //         case (playerChoice === 1) :
    //           setResult("1")
    //           setIsFinished(false)
    //         break;
    //         case (playerChoice === 2) :
    //           setResult("2")
    //           setIsFinished(false)
    //         break;
    //         case (playerChoice === 3) :
    //         setResult("3")
    //         setIsFinished(false)
    //       break;  
    //     }

    //       // break;
    //     // case (AIChoice === 1 && playerChoice === 2) :
    //     //      setResult("You lose!!!")
    //     //      setIsFinished(true)
    //     //   break;
    //     // case (AIChoice === 1 && playerChoice === 3) :
    //     //      setResult("You win!!!")
    //     //      setIsFinished(true)
    //     //   break;
    //     // //rock  
    //     // case (AIChoice === 2 && playerChoice === 1) :
    //     //      setResult("You win!!!")
    //     //      setIsFinished(true)
    //     //   break;
    //     // case (AIChoice === 2 && playerChoice === 2) :
    //     //     setResult("It's a tie.TRY AGAIN!!!")
    //     //     setIsFinished(false)
    //     //   break;
    //     // case (AIChoice === 2 && playerChoice === 3) :
    //     //     setResult("You lose!!!")
    //     //     setIsFinished(true)
    //     //   break;
    //     // //scissors
    //     // case (AIChoice === 3 && playerChoice === 1) :
    //     //     setResult("You lose!!!")
    //     //     setIsFinished(true)
    //     //   break;
    //     // case (AIChoice === 3 && playerChoice === 2) :
    //     //     setResult("You win!!!")
    //     //     setIsFinished(true)
    //     //   break;
    //     // case (AIChoice === 3 && playerChoice === 3) :
    //     //     setResult("It's a tie.TRY AGAIN!!!")
    //     //     setIsFinished(false)         
    //     //   break;           
    //      default:
   
    //    }
    // }

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
               {playerChoiceIsDisplayed && <img src={`img/${playerChoice}.png`}/>}
           </div>
           <div className="result">
            <p>{result}</p>
           </div>
           <div className="button-container">
               <img src="img/2.png" onClick={(event) => handleClick(event)} alt="2"/>
               <img src="img/1.png" onClick={(event) => handleClick(event)} alt="1"/>
               <img src="img/3.png" onClick={(event) => handleClick(event)} alt="3"/>
           </div>
           <button onClick={refresh}>Refresh</button>
           {/* <button onClick={handleResult}>See the results</button> */}
       </div>
    );
}
 
export default App;