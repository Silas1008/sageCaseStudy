import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Color from '../Color/Color';
import Fonts from '../Fonts/Fonts';
import MoodBoard from '../MoodBoard/MoodBoard';
import Mockup from '../Mockup/Mockup';
import MobileApp from '../MobileApp/MobileApp';
import './Home.css';
import BackToTopButton from '../BackToTop/BackToTopButton';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      {/* Use ids for each section */}
      <About id="about"/>
      <Color id="color"/>
      <Fonts id="fonts"/>
      <MoodBoard id="moodboard"/>
      <Mockup id="mockup"/>
      <MobileApp id="mobileapp"/>
     <BackToTopButton/>
    </div>
  );
}

export default Home;