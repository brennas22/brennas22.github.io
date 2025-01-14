import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file
import Portfolio from './Portfolio';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
              <div className="container">
                <header className="hero">
                  <div className="profile-pic">
                    <img src="/me.png" alt="Profile" />
                  </div>
                  <div className="intro">
                    <p className="overline">If you only read this...</p>
                    <h1>
                      I'm a <span className="highlight">product designer</span> passionate about hospitality and the human experience. Currently designing{' '}
                      <span className="highlight">AI-powered tools specifically for restaurant operators.</span>
                    </h1>
                    <div className="icons">
                      <a href="mailto:brenna.sorkin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                      <a href="https://www.linkedin.com/in/brennasorkin" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a href="tel:6175430996">
                        <FontAwesomeIcon icon={faPhone} />
                      </a>
                      <a href="https://www.instagram.com/short_cake_bakes/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </header>
              </div>
              <section className="about">
                <p className="overline">Get to know me</p>
                <p>
                  I believe that designers are primarily problem solvers & storytellers. It's my job to show people things they can't unsee and to fight for the user at every turn. I'm
                  particulary interested in hospitality-based projects.
                </p>
                <p>
                  <strong>
                    Currently designing @ <a href="https://toast.com" target="_blank" rel="noopener noreferrer">Toast</a>
                  </strong>
                  , as a principal product designer leading design on AI (all things assistant, platform, and more).
                </p>
              </section>
              <Portfolio />
            </div>
  );
}

export default App;