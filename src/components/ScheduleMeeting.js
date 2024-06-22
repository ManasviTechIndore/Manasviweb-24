// src/components/ScheduleMeeting.js
import React from 'react';
import { motion } from 'framer-motion';
import './ScheduleMeeting.css';

const ScheduleMeeting = () => {
  return (
    <motion.div
      className="schedule-meeting-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Schedule a Meeting</h2>
      <p>Use the form below to schedule a meeting with us.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <button type="submit">Schedule</button>
      </form>
    </motion.div>
  );
};

export default ScheduleMeeting;
