// Color.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './Color.css';
import color from '../../Assets/images/colors.png';

const Color = () => {
  return (
    <>
      <Helmet>
        {/* Add the link for Montserrat font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </Helmet>

      <div className='color' id="color"> {/* Add id="color" here */}
        <div className='text'>
          <h1>The colors used for the brand</h1>
          <p>In crafting the visual identity of the brand, we draw inspiration from a sophisticated palette that reflects the essence of pure olive oil. Deep navy blue evokes a sense of timeless elegance, symbolizing the brand's commitment to enduring beauty. A subtle shade of plum introduces a touch of regality and richness, embodying the luxurious and nourishing qualities inherent in our products. Burnt sienna adds warmth and depth, mirroring the sun-kissed Mediterranean landscapes where our hand-harvested olives thrive. Black, as a grounding element, represents the brand's commitment to purity and simplicity. Goldenrod, with its radiant hue, captures the golden glow of olive oil and signifies the precious nature of our ingredients. Finally, forest green pays homage to the lush olive groves, symbolizing the brand's connection to nature and sustainability. This harmonious blend of colors encapsulates the holistic beauty and heritage at the heart of our premium olive oil-based beauty brand.</p>
        </div>
        <img src={color} alt='' />
      </div>
    </>
  );
};

export default Color;
