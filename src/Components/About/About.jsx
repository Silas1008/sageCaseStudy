// About.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </Helmet>

      <div className='about' id="about"> {/* Add id="about" here */}
        <div className='header-about'>
          <h1>About the company</h1>
          
          <div className='about-issues'>
            <h4>The olive oil market can be highly competitive, with many players offering a variety of products. Traditional businesses struggle to stand out in a crowded market.</h4>
            <h5>Creating a website to showcase products, tell the story of the business, and facilitate online sales. Social media platforms to engage with consumers, share the company's story, and promote products.</h5>
          </div>
        </div>
        
        <div className='about-tag'>
          "Timeless Elegance: The Allure of Nature's Beauty Rooted in Two Centuries of Hand-Harvested Pure Olive Oil"
        </div>

        <div className='about-para'>
          <p>Rooted in the ancient land of Lebanon, adds an extra
          layer of cultural richness to its narrative. By sourcing pure olive oil from this historical region, 
          the venture not only embraces a legacy of two centuries but also taps into the authentic 
          essence of Lebanese craftsmanship and tradition. Lebanon, known for its centuries-old olive 
          groves and expertise in olive oil production, provides a unique geographical and cultural 
          backdrop that further enhances the brand's story. The hand-harvested olives, nurtured by the 
          Lebanese landscape, carry a distinct quality that resonates with consumers seeking genuine 
          and culturally significant beauty products. This geographical association not only adds to the 
          brand's authenticity but also contributes to the global appreciation of Lebanon's rich heritage 
          in skincare and beauty rituals. Overall, incorporating the heritage of Lebanon into the brand 
          narrative strengthens the connection between the product and its origins, fostering a deeper 
          sense of cultural appreciation among consumers</p>
        </div>
        
      </div>
    </>
  )
}

export default About;
