// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import ScheduleMeeting from './components/ScheduleMeeting';
import OurTeam from './components/OurTeam';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import OurClients from './components/OurClient';
import ContactUs from './components/ContactUs';
import './Styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
