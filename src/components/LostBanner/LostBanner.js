import React from 'react';

import Banner from '../Banner/Banner';


function WonBanner({answer}) {
  return <Banner status='sad'>
    <p>
      sorry, the correct answer is <strong>{answer}</strong> 
    </p>
  </Banner>;
}

export default WonBanner;
