// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-us"
    >
      <h2>Our Company</h2>
      <p>Welcome to Doaguru IT Solutions, your reliable partner in the realms of digital marketing, web design, and IT solutions. We comprise a team of seasoned professionals committed to enhancing the digital footprint of your business. With over a decade of industry experience, we have collaboratively worked with numerous clients worldwide, consistently delivering exceptional results in IT and marketing endeavours.</p>

      <h3>Vision, Mission and Value</h3>

      <h4>Our Vision</h4>
      <p>As a Best IT Company, Our aspiration is to establish ourselves as the Best digital Marketing Agency and Web Design Agency. Our ethos revolves around the delivery of exceptional services and the cultivation of enduring client relationships.</p>

      <h4>Our Mission</h4>
      <p>Our mission is to empower businesses to thrive in the digital realm by furnishing them with tailor-made solutions that cater to their unique needs. We recognize that each business possesses its distinctive traits.</p>

      <h4>Our Core Value</h4>
      <p>At the heart of our operations is a commitment to prioritising the requirements of our customers and building robust connections grounded in mutual satisfaction and trust. Our dedication to social responsibility underscores our values.</p>

      <h3>Why Choose Us</h3>

      <h4>Timely Delivery</h4>
      <p>We take immense pride in our unwavering dedication to ensuring the timely completion of all our website projects. In the fast-paced world of IT, punctuality is paramount, and we fully comprehend its significance.</p>

      <h4>Competitive Pricing</h4>
      <p>We derive satisfaction from being your preferred source for premium IT solutions, all at the most economical rates. Our commitment to affordability never compromises the quality of our services.</p>

      <h4>Uncompromising Quality</h4>
      <p>Our IT solutions are founded on a bedrock of quality, not merely meeting industry standards but surpassing them. Employing the latest industry best practices and cutting-edge technologies, we ardently pursue excellence across all facets of our services.</p>

      <h4>Long-Term Support</h4>
      <p>In our pursuit of ensuring the resilience and growth of your IT infrastructure in tandem with your business, we function as an extension of your company, always available to assist. Our dedication to nurturing enduring client relationships entails ongoing support and assistance.</p>
    </motion.div>
  );
};

export default AboutUs;
