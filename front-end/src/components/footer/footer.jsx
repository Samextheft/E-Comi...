import React from 'react'
import './footer.css'
import cuteyo from '../assets/cuteyo.jpg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="d-flex flex-row justify-content-center align-items-center  footer-logo">
        <img src={cuteyo} alt="" />
        <h2>E Comi..</h2>
      </div>
      <div className="footer-details">
        <div className="footer-d1">
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-d2">
          <div className="footer-icon">
            <FaFacebook size={22} />
            <FaTwitter size={22} />
            <FaInstagram size={22} />
          </div>
        </div>
      </div>
      <hr/>
      <div className="footer-copyright">
        <p>&copy; 2026 E Comi.. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
