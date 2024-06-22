// src/components/OurClients.js
import React from 'react';
import { motion } from 'framer-motion';

const OurClients = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Our Clients</h2>
      <p>We are proud to have worked with a diverse range of clients.</p>
      <ul>
        <li>Client A</li>
        <li>Client B</li>
        <li>Client C</li>
        <li>Client D</li>
      </ul>
    </motion.div>
  );
};

export default OurClients;
