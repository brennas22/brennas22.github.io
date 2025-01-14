import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import ManagerCloseOut from './ManagerCloseOut'; // Import individual project pages
import GiftingProgram from './GiftingProgram'; // Import individual project pages
import AdminTool from './AdminTool'; // Import individual project pages
import AboutMe from './AboutMe'; // Import individual project pages
import HomePage from './HomePage'; // Import individual project pages
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}> {/* Add the Layout route */}
          <Route index element={<HomePage />} /> 
          <Route path="/manager-close-out" element={<ManagerCloseOut />} />
          <Route path="/gifting-program" element={<GiftingProgram />} />
          <Route path="/admin-tool" element={<AdminTool />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


