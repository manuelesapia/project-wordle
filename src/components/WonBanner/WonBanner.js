import React from 'react';

import Banner from '../Banner/Banner';


function WonBanner({numOfGuesses, handleRestart }) {
  return (
      <Banner status='happy' action={handleRestart} actionText="Restart Game">
      <p>
      <strong>Congratulations</strong> got it in {""}
      <strong>
        {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
      </strong>
      </p>
    </Banner>
  );

}

export default WonBanner;
