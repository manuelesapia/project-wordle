import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInputForm from '../GameInputForm';
import PreviousGuesses from '../PreviousGuesses';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  // running | won | lost
  const [gameStatus , setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState( [] );
  const [answer, setAnswer] = React.useState(() => sample(WORDS))

  function handleSubmitGuesses(tentativeGuess){
    const nextGuess = ([...guesses,tentativeGuess]) 
    setGuesses(nextGuess)
    if(tentativeGuess.toUpperCase() === answer){
      setGameStatus("won")
    }else if (nextGuess.length >=  NUM_OF_GUESSES_ALLOWED){
      setGameStatus("lost")
    }
  }
  

  function handleRestart(){
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("Running");
    console.info({ newAnswer });

  }

  return(
  <>
    {gameStatus}
      <PreviousGuesses guesses={guesses} answer={answer}/>
      <GameInputForm gameStatus={gameStatus} handleSubmitGuesses={handleSubmitGuesses}/>
    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart}/>
    )}
    {gameStatus === 'lost' && (
      <LostBanner answer={answer} handleRestart={handleRestart} />
    )}
  
  </>
  )
}

export default Game;
