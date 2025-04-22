import React from 'react';
import './signup-footer.styles.css';
import instagram from '../../assets/icon/Instagram.png';
import facebook from '../../assets/icon/facebook.jpg';
import tttt from '../../assets/icon/ttt.jpg';

const SignupFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo-section">
        <div className="footer-logo">Perfume Paradise</div>
      </div>

      <div className="footer-info-section">
        <h4>Help & Information</h4>
        <ul>
          <a href='/shop'>
          <li>About Us</li>
          </a>
          <a href='/contact'>
          <li>Help & Contact</li> 
          </a>
          <a href='/brand'>
          <li>Brand</li>
          </a>
          <a href='new-arrivals'>
          <li>New-Arrivals</li>
          </a>
        </ul>
      </div>

      <div className="footer-subscribe-section">
        <h4>Sign Up To Receive Offers & News</h4>
        <input type="email" placeholder="Enter your email address" />
        <button>SUBSCRIBE</button>
      </div>

      <div className="footer-social-section">
        <p>Follow and Connect Us</p>
        <div className="social-icons">
  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    <img src={instagram} alt="Instagram" className="social-icon-img" />
  </a>
  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
    <img src={facebook} alt="Facebook" className="social-icon-img" />
  </a>
  <a href="https://www.twitter.com">
    <img src={tttt} alt="Email" className="social-icon-img" />
  </a>
</div>
        </div>
    </footer>
  );
};


export default SignupFooter;
