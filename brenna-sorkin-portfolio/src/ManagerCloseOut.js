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
   
    <div className="case-study-content">
        <p className="overline">Why</p>
        <p>
             Toast decided to overhaul all of the point of sale (POS) experience to a new design system, known as POS 3.0. The end of day experience for managers was particularly clunky and time consuming, resulting in users wasting time on unnecessary tasks and ultimately being confused.
        </p>
        <p className='overline'>Goals</p>
        <div className='card-row'>
            <p className='card'>
            Reduce time on task for managers closing their restaurant at the end of the night.
            </p>
            <p className='card'>
            Increase task completion for individual close out tasks, such as closing open checks and clocking out employees.
            </p>
        </div>
    </div>
     {/* Include Portfolio component but exclude this project */}
     <Portfolio exclude="/manager-close-out" />
    </div>
  );
};

export default ManagerCloseOut;
