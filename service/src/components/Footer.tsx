import React from 'react';
import '../scss/components/_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>MedCare</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>123 Main Street, Anytown, USA</p>
            <p>info@medcare.com</p>
            <p>+1 234 567 890</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MedCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;