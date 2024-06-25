import React, { useState, useEffect } from 'react';
import './OurClient.css'; // Import the CSS file for styling
import { Header } from './Header';
import { Footer } from './Footer';

const clients = [
  {
    id: 1,
    name: 'Manvika Pharma',
    logo: 'https://www.manasviportfolio.online/static/media/manvika%20Pharma.5d10789d3f3f60eb7faa.png',
    rating: 4.5,
    testimonial: 'Great company to work with. Highly recommended!'
  },
  {
    id: 2,
    name: 'MCS',
    logo: 'https://www.manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png',
    rating: 5,
    testimonial: 'Excellent service and support. Very satisfied!'
  },
  {
    id: 3,
    name: 'Another Client',
    logo: 'https://www.manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png',
    rating: 3.5,
    testimonial: 'Good experience overall. Would consider working again.'
  },
  {
    id: 4,
    name: 'Fourth Client',
    logo: 'https://www.manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png',
    rating: 4,
    testimonial: 'Another satisfied client with great service.'
  },
  {
    id: 5,
    name: 'Fifth Client',
    logo: 'https://www.manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png',
    rating: 4.7,
    testimonial: 'Continued excellence in service and support.'
  },
  {
    id: 6,
    name: 'Sixth Client',
    logo: 'https://www.manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png',
    rating: 4.2,
    testimonial: 'Consistent quality and reliability.'
  },
];

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentClient = clients[currentIndex];

  return (
   <>
      <Header />
      <section className="our-clients">
        <div className="container">
          <h2 className="section-title">Our Clients</h2>
          <p className="section-description animated-text">We are proud to have worked with a diverse range of clients.</p>
          <div className="client-slider-container">
            <div className="client-card">
              <div className="client-info">
                <img src={currentClient.logo} alt={currentClient.name} className="client-logo" />
                <h3 className="client-name">{currentClient.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < currentClient.rating ? 'star-filled' : 'star'}>&#9733;</span>
                  ))}
                </div>
                <p className="testimonial">{currentClient.testimonial}</p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  );
};

export default OurClients;
