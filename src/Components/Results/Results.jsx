// Results.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './Results.css';

const Results = () => {
  return (
    <div className='main-div' id="results"> {/* Add id="results" here */}

      <div className='result-text'>
        <h1>The Current results</h1>
      </div>
      
      <div className='results'>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
        </Helmet>

        <div>
          <h2>Sales Increase: 22%</h2>
          <p>Our traditional olive oil business has experienced a remarkable 22% surge in sales, a direct result of our strategic shift towards online platforms and effective marketing strategies. The increased sales highlight the growing demand for our authentic, handcrafted products, resonating with a diverse and global audience.</p>

          <h2>Community Impact: Job Creation</h2>
          <p>Embracing modern technologies not only boosted our sales but also led to job creation within our community. At least 8% of our newly generated jobs come from the local community, contributing to regional economic development and fostering a sense of local pride and involvement.</p>

          <h2>Customer Satisfaction: +12%</h2>
          <p>Our customer-centric approach, combining quality assurance measures, robust education initiatives, and enhanced digital engagement, has resulted in a significant 12% increase in customer satisfaction. Customers appreciate the transparency in our traditional production methods and the superior quality of our olive oil products.</p>
        </div>
      </div>

    </div>
  );
}

export default Results;
