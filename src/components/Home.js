// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Welcome to Manasvi Technologies OPC Private Limited</h1>
      <p>Your partner in technological innovation.</p>
    </motion.div>
  );
};

export default Home;
