<<<<<<< HEAD
import React, { useState } from 'react';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
//import toast, { Toaster } from 'react-hot-toast';
=======
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
>>>>>>> 3a56ffabf23b7612bef0716c9f6dbe0494217558

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
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-5">
          <Toaster />
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Schedule a Meeting</h2>
            {submitted ? (
              <div className="p-4 bg-green-100 border border-green-300 rounded-md">
                <p className="text-green-700">Your meeting has been scheduled successfully! We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="meetingTitle" className="block text-sm font-medium text-gray-700">Meeting Title</label>
                  <input
                    type="text"
                    id="meetingTitle"
                    name="meetingTitle"
                    value={formData.meetingTitle}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="meetingDate" className="block text-sm font-medium text-gray-700">Meeting Date</label>
                  <DatePicker
                    selected={formData.meetingDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="meetingDescription" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="meetingDescription"
                    name="meetingDescription"
                    value={formData.meetingDescription}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full bg-blue-500 text-white p-3 rounded-md font-medium hover:bg-blue-600 focus:outline-none ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
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

export default ScheduleMeeting;
