import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="content-section">
      
      {/* Contact Section */}
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-card">
          <p className="contact-text">
            I am currently open to full-time opportunities. Whether you have a question or would like to connect, I would be glad to hear from you.
          </p>
          {/* mailto: link automatically opens the user's default email app */}
          <a href="mailto:lallkrish992@gmail.com" className="say-hello-btn">
            <FaEnvelope /> Say Hello
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Designed & Built by <strong>Krish Lall</strong></p>
        <p>&copy; 2026</p>
      </footer>

    </div>
  );
};

export default Contact;