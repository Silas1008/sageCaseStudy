
import React from 'react';
import './Fonts.css';
import name from '../../Assets/images/name.png';
import fonts from '../../Assets/images/fonts.png';

const Fonts = () => {
  return (
    <div className='fonts' id="fonts"> 
      <div>
        <h1>About the Logo</h1>
        <p>The sage-infused formulations celebrate ageless beauty, offering a holistic approach to skincare. Complemented by our emblematic olive logo, symbolizing vitality and nourishment, "Sage & Olive" invites you to elevate your skincare ritual to an unparalleled realm of sophistication and radiance.</p>
      </div>

      <div className='fonts-image'>
        <img src={name} alt=''/>
      </div>

      <div>
        <h1>About the Fonts</h1>
        <p>Choosing Montserrat font epitomizes our commitment to sleek sophistication. Its clean lines and modern elegance seamlessly align with our brand's aesthetic, adding a touch of contemporary refinement to our visual identity. Montserrat's versatility ensures clarity and visual appeal, enhancing the overall luxury experience for our audience.</p>
      </div>

      <div className='fonts-image'>
        <img src={fonts} alt=''/>
      </div>
    </div>
  );
}

export default Fonts;
