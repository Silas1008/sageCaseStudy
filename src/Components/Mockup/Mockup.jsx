// Mockup.js
import React from 'react';
import './Mockup.css';
import productone from '../../Assets/images/productmockup.png';
import producttwo from '../../Assets/images/productmockup2.png';

const Mockup = () => {
  return (
    <div className='title' id="mockup"> 
      <h1>The Finished Products</h1>
      <div className='mockup'>
        <div>
          <img src={productone} alt=''/>
        </div>

        <div className='product-two'>
          <img src={producttwo} alt=''/>
        </div>
      </div>
    </div>
  );
}

export default Mockup;
