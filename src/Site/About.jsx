import React from "react";
import './photo.css'
import './about.css'

const About = () => {
  return (
    <section id="about" className="about-section d-flex justify-content-center align-items-center" 
      style={{ backgroundColor: "white", minHeight: "100vh", padding: "50px 0" }}>
      
      <div className="about-card d-flex justify-content-between align-items-center p-4 shadow-lg" 
        style={{
          width: "80%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div style={{ textAlign: "left", flex: 1 }}>
          <p style={{ fontWeight: "bold", fontSize: "24px", color: "#2c3e50" }}>About me..</p>
          <h3 style={{ fontSize: "18px", color: "#2c3e50", lineHeight: "1.5" }}>
            I am a 3rd year student of Computer Engineering at Pamukkale University.
             I have been interested in technology and computers since my childhood and I chose this duo as my profession. 
             I am currently working on web and game development. Also also publish my games on{" "}
            <a href="https://baysalgames.itch.io" target="_blank" rel="noopener noreferrer">
              itch.io
            </a>{" "}
          </h3>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <img
            className="profile-img"
            src="/me.jpg"
            alt="Ömer Faruk Baysal"
            style={{
              maxWidth: "75%",
              height: "auto",
              borderRadius: "15px",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
