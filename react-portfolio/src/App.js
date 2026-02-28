import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import ManagerCloseOut from './ManagerCloseOut';
import GiftingProgram from './GiftingProgram';
import AdminTool from './AdminTool';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import Search from './Search';
import ToastIQ from './ToastIQ';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path="/manager-close-out" element={<ManagerCloseOut />} />
          <Route path="/gifting-program" element={<GiftingProgram />} />
          <Route path="/admin-tool" element={<AdminTool />} />
          <Route path="/search" element={<Search />} />
          <Route path="/toast-iq" element={<ToastIQ />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
