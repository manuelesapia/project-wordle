import React from 'react';

function PreviousGuesses({ guesses }) {
  return (
  <div className="guess-results">
    {guesses.map((item, index) => (
      <p key={index} className="guess">{item}</p>
    ))} 
  </div>
  )
}

export default PreviousGuesses;
