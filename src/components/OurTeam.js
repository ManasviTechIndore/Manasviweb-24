// src/components/OurTeam.js
import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Our Team</h2>
      <p>Meet the dedicated team behind Manasvi Technologies OPC Private Limited.</p>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Michael Johnson - Lead Developer</li>
        <li>Emily Davis - Project Manager</li>
      </ul>
    </motion.div>
  );
};

export default OurTeam;
