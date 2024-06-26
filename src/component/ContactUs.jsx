import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import toast, { Toaster } from 'react-hot-toast';

import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { Box, Button, Grid, TextField } from '@mui/material';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
     
      setAnimate(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const [animate, setAnimate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Data:', formData);

    emailjs.send('service_ywjerxn', 'template_vl3r46h', formData, 'B5N5g0XkBqbt3d5Iq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email has been sent successfully');
        setSubmitted(true);
      })
      .catch((err) => {
        toast.error('Something went wrong');
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
        <Grid lg={12} style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <Toaster />
          <Box style={{ display: 'grid', justifyContent: 'center', border:'2px solid grey',borderRadius:'5px',margin:'30px',padding:'30px'}}>
            <h2 >Contact Us</h2>
            {submitted ? (
              <div>
                <p className="text-green-700">Thank you for contacting us! We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <Box >
                    <label htmlFor="name" >Name</label>
                    <TextField
                      fullWidth placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required

                    />
                  </Box>
                  <Box >
                    <label htmlFor="email" >Email</label>
                    <TextField
                      fullWidth placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required

                    />
                  </Box>
                  <Box >
                    <label htmlFor="message" >Message</label>
                    <TextField
                      fullWidth placeholder="Message"
                      multiline
                      rows={4}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange} 
                      required

                    />
                  </Box>
                </Box>
                <Button
                  type="submit"
                  style={{
                    textTransform: 'capitalize', fontSize: '15px', color: 'white',
                    backgroundImage: "linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))",
                    color: 'white', marginBottom: '20px',
                    marginTop: '30px'
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default ContactUs;