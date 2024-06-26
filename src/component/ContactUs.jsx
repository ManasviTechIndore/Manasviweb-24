import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
// <<<<<<< HEAD
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
// =======
//import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
// >>>>>>> 3a56ffabf23b7612bef0716c9f6dbe0494217558

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
      // Animate in the content after 500ms
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
        <div className="sticky top-0 z-50">
        <Header />
      </div>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-5">
          <Toaster />
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            {submitted ? (
              <div className="p-4 bg-green-100 border border-green-300 rounded-md">
                <p className="text-green-700">Thank you for contacting us! We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default ContactUs;
