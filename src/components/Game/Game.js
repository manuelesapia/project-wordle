import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInputForm from '../GameInputForm';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return(
    <GameInputForm/>
  )
  
}

export default Game;
