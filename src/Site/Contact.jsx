import React from 'react';
import './contact.css';

const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:baysalomerfaruk54@gmail.com';
  };

  return (
    <section
      id="contact"
      className="contact-section d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'white',minHeight: '60vh', padding: '50px 0' }}
    >
      <div
        className="contact-card d-flex flex-column justify-content-center align-items-center p-4 shadow-lg"
        style={{
          width: '80%',
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div style={{ textAlign: 'center', flex: 1 }}>
          <p style={{ fontWeight: 'bold', fontSize: '24px', color: '#2c3e50' }}>Contact</p>
          <h3 style={{ fontSize: '18px', color: '#2c3e50', lineHeight: '1.5' }}>
            If you are interested in my portfolio or if you would like to get in touch about anything, you can You can click on the button and communicate directly.
          </h3>
          <br />
          <button className="contact-button bg-dark" onClick={handleContactClick}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
