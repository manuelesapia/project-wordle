import React from 'react';

function Guess({guesses}) {

  let guessWord = [];
  for (let i = 0; i < guesses; i++){
    guessWord.push();
  }

  return(
    <div className="guess-results">
      {guesses.map(guessItem => (
          <p className="guess">
          {guessItem}
          {range(guessWord).map(item => (
              <span className="cell">{item}</span>
          ))}
        </p>
      ))}
  
    </div>
  ) 
}


const range = (start, end, step = 1) => {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};


export default Guess;
