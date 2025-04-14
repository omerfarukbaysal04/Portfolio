import React, { useState, useEffect } from "react";
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import "./footer.css";

const Footer = () => {  
  return (
    <footer className="footer-bottom   text-center">
      <br />
      <br />
      <div className="social-icons">
        <a href="https://github.com/omerfarukbaysal04" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.youtube.com/@baysalgames" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
        <a href="https://www.instagram.com/omerfarukkbaysal/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://x.com/baysalgames" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/baysal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://baysalgames.itch.io" target="_blank" rel="noopener noreferrer">
          <SiItchdotio className="icon" />
        </a>
      </div>
      <br />
      <p>&copy; 2025 Ömer Faruk Baysal.All rights reserved.</p>
    </footer>
  );
};

export default Footer;
