import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import Portfolio from './Portfolio';

const ManagerCloseOut = () => {
  return (
    <div>
        <div className="hero-section">
            
        <div className="portfolio-hero-image">
             <img src="/close-out/hero.png" alt="Manager Close Out" />
        </div>  
        <p className="overline">Built @ Toast, 2023</p>
        <h1>
                Overhauling the <span className="highlight"> Manager "End of Day".</span>
        </h1>           
        </div>
   
    <div className="portfolio-page">
      
      <div className="portfolio-content">
        <h1>Manager Close Out</h1>
        <h3>Product Design @ Toast</h3>
        <p>
          Completely redesigned the end-of-day experience on Point of Sale devices.
          This project involved deep user research, iterative prototyping, and
          collaboration with cross-functional teams.
        </p>
      </div>
      {/* Include Portfolio component but exclude this project */}
      <Portfolio exclude="/manager-close-out" />
    </div>
    </div>
  );
};

export default ManagerCloseOut;
