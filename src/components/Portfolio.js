// src/components/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Our Portfolio</h2>
      <p>Take a look at some of the projects we have completed.</p>
      <ul>
        <li>Project A - Description</li>
        <li>Project B - Description</li>
        <li>Project C - Description</li>
        <li>Project D - Description</li>
      </ul>
    </motion.div>
  );
};

export default Portfolio;
