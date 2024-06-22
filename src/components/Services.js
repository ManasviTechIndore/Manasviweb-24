// src/components/Services.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (service) => {
    setOpenDropdown(openDropdown === service ? null : service);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="services-container"
    >
      <h2>Our Services</h2>
      <p>We offer a wide range of technology services to meet your needs.</p>
      <ul>
        {['SEO Service', 'SMM Service', 'PPC Google Adwords', 'Digital Marketing', 'Software and Website Development', 'Mobile App Development', 'Graphic Designing', 'PR Service'].map(service => (
          <li key={service} onClick={() => toggleDropdown(service)}>
            {service}
            {openDropdown === service && (
              <ul className="dropdown-menu">
                <li>{service} Details 1</li>
                <li>{service} Details 2</li>
                <li>{service} Details 3</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Services;
