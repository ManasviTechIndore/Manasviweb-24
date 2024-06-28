import React, { useState, useEffect } from 'react';
import './contactus.css';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelopeOpen, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../assets/contact-png.png';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Animate in the content after 500ms
      setAnimate(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    <Header/>
    <section className="contact-section">
      <Toaster />
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">
        Our support team will get back to you in 24-h during standard business hours. We will catch you as early as we receive the message.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div>
            <span><FontAwesomeIcon icon={faMobileAlt} /></span>
            <span>Phone No.</span>
            <span className="text">(+91) 9302447001</span>
          </div>
          <div>
            <span><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
            <span>E-mail</span>
            <span className="text">manasvitech01@gmail.com</span>
          </div>
          <div>
            <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
            <span>Address</span>
            <span className="text">Corporate office:- 111-B old Ashoka garden, 80 Feet road in front of hotel manpreet Bhopal</span>
          </div>
          <div>
            <span><FontAwesomeIcon icon={faClock} /></span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (10:00 AM to 7:00 PM)</span>
          </div>
        </div>

        <div className="contact-form">
          {submitted ? (
            <div className="p-4 bg-green-100 border border-green-300 rounded-md">
              <p className="text-green-700">Thank you for contacting us! We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="submit"
                className={`send-btn ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                value={isSubmitting ? 'Sending...' : 'Send Message'}
                disabled={isSubmitting}
              />
            </form>
          )}

          <div>
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
      </div>

      <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3928.621389532207!2d77.42798891911579!3d23.260055673632873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sManasvi%20Technologies%20(OPC)%20Private%20Limited%20-%20Mobile%20Application%20%7C%20Website%20%2F%20Software%20Development%20Company%20in%20Bhopal%2C%20111B%2C%2080%20Feet%20Rd%2C%20above%20Bhagwan%20Ustad%20gulab%20jamu%20wala%2C%20Old%20Ashoka%20Garden%2C%20Ashoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!5e0!3m2!1sen!2sin!4v1719544620015!5m2!1sen!2sin"
    width="100%"
    height="470"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>


      
    </section>
    <Footer/>
    </motion.div>
    </>
  );
};

export default ContactUs;
