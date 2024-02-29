import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInputForm from '../GameInputForm';
import PreviousGuesses from '../PreviousGuesses';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {

  const [gameStatus , setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState( [] );

  function handleSubmitGuesses(tentativeGuess){
    const nextGuess = ([...guesses,tentativeGuess]) 
    setGuesses(nextGuess)
    if(tentativeGuess.toUpperCase() === answer){
      setGameStatus("won")
    }else if (nextGuess.length >=  NUM_OF_GUESSES_ALLOWED){
      setGameStatus("lost")
    }
  }


  return(
  <>
    {gameStatus}
      <PreviousGuesses guesses={guesses} answer={answer}/>
      <GameInputForm gameStatus={gameStatus} handleSubmitGuesses={handleSubmitGuesses}/>
    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guesses.length} />
    )}
    {gameStatus === 'lost' && (
      <LostBanner answer={answer} />
    )}

    <GameOverBanner/>
  
  </>
  )
}

export default Game;
