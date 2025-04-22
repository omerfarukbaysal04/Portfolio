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
            I'm a 3rd-year Computer Engineering student at Pamukkale University and a graduate of the 3rd term of the Google Game and App Academy. <br></br>
            <br />
            I develop games with Unity as a hobby. So far, I’ve created four personal games, and one of them is published on the Google Play Store. I’ve also built two personal websites.Also publish my games on{" "}
            <a href="https://baysalgames.itch.io" target="_blank" rel="noopener noreferrer">
              itch.io
            </a>{" "}
            <br />
            <br />
            My career goal is to specialize in cybersecurity. I’m actively learning and improving myself in this field through various courses. I enjoy both learning and creating, driven by my passion for technology.
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
