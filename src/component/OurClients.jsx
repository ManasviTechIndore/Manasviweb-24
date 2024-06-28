import React from 'react';
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
  return (
    <>
      <Header />
      <section className="our-clients">
        <div className="container">
          <h2 className="section-title">Our Clients</h2>
          <p className="section-description animated-text">We are proud to have worked with a diverse range of clients. And deliver the new cutting-edge technology products.</p>
          <div className="client-cards">
            {clients.map(client => (
              <div className="client-card" key={client.id}>
                <div className="client-info">
                  <img src={client.logo} alt={client.name} className="client-logo" />
                  <h3 className="client-name">{client.name}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < client.rating ? 'star-filled' : 'star'}>&#9733;</span>
                    ))}
                  </div>
                  <p className="testimonial">{client.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurClients;