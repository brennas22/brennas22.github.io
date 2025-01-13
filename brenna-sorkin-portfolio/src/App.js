import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import ManagerCloseOut from './ManagerCloseOut'; // Import individual project pages
import GiftingProgram from './GiftingProgram'; // Import individual project pages
import AdminTool from './AdminTool'; // Import individual project pages
import AboutMe from './AboutMe'; // Import individual project pages


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/manager-close-out" element={<ManagerCloseOut />} />
        <Route path="/gifting-program" element={<GiftingProgram />} />
        <Route path="/admin-tool" element={<AdminTool />} />
        <Route path="/about-me" element={<AboutMe />} />

      </Routes>
    </Router>
  );
};

export default App;
