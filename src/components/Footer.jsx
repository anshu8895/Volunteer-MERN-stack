import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareFacebook, FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer>
      <div><img src="/logo.png" alt="" /></div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>New York, USA</li>
          <li>crypto@gmail.com</li>
          <li>+91 123456789</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>HOME</Link></li>
          <li><Link to={"/donate"}>DONATE US</Link></li>
          <li><Link to={"/about"}>ABOUT</Link></li>
          <li><Link to={"/contact"}>CONTACT</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li><Link to={"/"}><span><FaSquareFacebook/></span> Facebook</Link></li>
          <li><Link to={"/"}><span><FaSquareXTwitter/></span> Twitter</Link></li>
          <li><Link to={"/"}><span><FaSquareInstagram/></span>Instagram</Link></li>
          <li><Link to={"/"}><span><FaLinkedin/></span>LinkedIn</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;