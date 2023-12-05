import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleWebsiteClick = () => {
    window.location.href = 'https://sage-ruddy.vercel.app/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Silas1008/sageEmail';
  };

  const handleSageClick = () => {
    window.location.href = 'https://sage-email.vercel.app/';
  };

  return (
    <div className='navbar'>
      <div onClick={handleWebsiteClick} style={{ cursor: 'pointer' }}>
        <h2>Website</h2>
      </div>
      <div onClick={handleSageClick} style={{ cursor: 'pointer' }}>
        <h1>Sage</h1>
      </div>
      <div onClick={handleGithubClick} style={{ cursor: 'pointer' }}>
        <h2>Github</h2>
      </div>
    </div>
  );
};

export default Navbar;
