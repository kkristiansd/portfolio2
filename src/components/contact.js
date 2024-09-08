import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./contact.css"; // Assuming you'll add your styles here
import { FaGoogle } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact-sticker">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaGoogle className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
    </div>
  );
};

export default Contact;
