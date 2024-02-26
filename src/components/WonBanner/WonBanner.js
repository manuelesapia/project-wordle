import React from 'react';

import Banner from '../Banner/Banner';


function WonBanner({numOfGuesses, }) {
  return <Banner status='happy'>
    <p>
    <strong>Congratulations</strong> got it in {""}
    <strong>
      {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
    </strong>
    </p>
  </Banner>;
}

export default WonBanner;
