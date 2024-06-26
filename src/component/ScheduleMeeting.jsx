//  <<<<<<< HEAD
//import React, { useState } from 'react';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
//import toast, { Toaster } from 'react-hot-toast';
// =======
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { Box, Grid, TextField } from '@material-ui/core';
import { Button } from '@mui/material';
// >>>>>>> 3a56ffabf23b7612bef0716c9f6dbe0494217558

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    meetingTitle: '',
    meetingDate: new Date(),
    startTime: '',
    endTime: '',
    meetingDescription: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Animate in the content after 500ms
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      meetingDate: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      meeting_title: formData.meetingTitle,
      meeting_date: formData.meetingDate.toLocaleDateString(),
      start_time: formData.startTime,
      end_time: formData.endTime,
      meeting_description: formData.meetingDescription
    };

    emailjs.send('service_ywjerxn', 'template_vl3r46h', templateParams, 'B5N5g0XkBqbt3d5Iq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Meeting scheduled successfully!');
        setSubmitted(true);
      })
      .catch((err) => {
        toast.error('Something went wrong. Please try again.');
        console.error('FAILED...', err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Grid container >
          <Grid lg={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Toaster />
            <Box style={{ display: 'grid', justifyContent: 'center', border: '2px solid grey', borderRadius: '5px', margin: '30px', padding: '30px' }} >
              <h2 >Schedule a Meeting</h2>
              {submitted ? (
                <div>
                  <p className="text-green-700">Your meeting has been scheduled successfully! We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div >
                    <label htmlFor="meetingTitle" >Meeting Title</label>
                    <TextField
                      fullWidth
                      type="text"
                      id="meetingTitle"
                      name="meetingTitle"
                      value={formData.meetingTitle}
                      onChange={handleChange}
                      required

                    />
                  </div>
                  <div >
                    <label htmlFor="meetingDate" >Meeting Date</label><br />
                    <DatePicker
                      fullWidth
                      selected={formData.meetingDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}

                    />
                  </div>
                  <div >
                    <label htmlFor="startTime" >Start Time</label>
                    <TextField
                      fullWidth
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      required

                    />
                  </div>
                  <div >
                    <label htmlFor="endTime" >End Time</label>
                    <TextField
                      fullWidth
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      required

                    />
                  </div>
                  <Box >
                    <label htmlFor="meetingDescription" >Description</label>
                    <TextField
                      fullWidth placeholder="Description"
                      multiline
                      id="meetingDescription"
                      name="meetingDescription"
                      value={formData.meetingDescription}
                      onChange={handleChange}

                    />
                  </Box>
                  <Button
                    type="submit"
                    style={{
                      textTransform: 'capitalize', fontSize: '15px', color: 'white',
                      backgroundImage: `linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))`,
                      color: 'white', marginBottom: '20px',
                      marginTop: '30px'
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
                  </Button>
                </form>
              )}
            </Box>
          </Grid>
          <Footer />
        </Grid>
      </motion.div>
    </>
  );
};

export default ScheduleMeeting;
