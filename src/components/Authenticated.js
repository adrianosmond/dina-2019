import React from 'react';

import instructions from '../assets/varjordag.pdf';

const Authenticated = () => {
  return (
    <>
      <p>
        Thank you for your purchase, your custom is much appreciated. We here at Dinikea
        really hope that you're satisfied with your product, and with the service that you've
        received. If you need more assistance please feel free to get in touch with one of our 
        customer service operatives.
      </p>
      <h2>Your order history</h2>
      <h3>10 April 2019</h3>
      <p>
        1 x Värjørdåg - <strong>€279.99</strong><br/>
        <a target="_blank" rel="noopener noreferrer" href={instructions}>View assembly instructions</a>
      </p>
    </>
  );
}

export default Authenticated;