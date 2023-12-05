import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Header.css';

const Header = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </Helmet>

      <section className="header-container" data-scroll-section>
        <ul className="header-menu">
          {/* Use the Link component from react-scroll */}
          <li className='link'><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li className='link'><Link to="color" smooth={true} duration={500}>Color Palette</Link></li>
          <li className='link'><Link to="fonts" smooth={true} duration={500}>Font & logo</Link></li>
          <li className='link'><Link to="mockup" smooth={true} duration={500}>Mock Up</Link></li>
          <li className='link'><Link to="results" smooth={true} duration={500}>Results</Link></li>
        </ul>
        <h1 id="header-text">Olive Beauty</h1>
      </section>
    </>
  );
}

export default Header;