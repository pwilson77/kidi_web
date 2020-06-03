import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { FaGooglePlus } from 'react-icons/fa'
import '../css/footer.css';

function Footer() {
  const [location, setLocation] = useState('/');
  let locationPath = useLocation();

  useEffect(() => {
    setLocation(locationPath.pathname);
  }, [locationPath])
  
  return (
    <div className='footer-container'>
      <div className='footer-item'>
        <h1 className='footer-about-title'>About the University</h1>
        <p className='footer-text'>
          The A.G Head, Department of Economics Education, Dr. Ishmael
          Y. Dadson encouraged the incoming executives to emulate the 
          warm-hearted act of their predecessors and acknowledged the importance
          of associations in every community. He urged patrons as well as
          lecturers to take keen interest in the activities of the Association
          and use funds generated judiciously.
        </p>
        <a target='_blank' href="https://www.uew.edu.gh">
          <p className='footer-about-link'>
            https://www.uew.edu.gh
          </p>
        </a>
      </div>
      <div className='footer-item'>
        <h1 className='footer-about-title'>Info</h1>
        <ul>
          <li>
            <p className='footer-list'>Blog</p>
          </li>
          <li>
            <p className='footer-list'>News of the University</p>
          </li>
          <li>
            <p className='footer-list'>News of the Department</p>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h1 className='footer-about-title'>Courses</h1>
        <ul>
          <li>
            <p className='footer-list'>Food production</p>
          </li>
          <li>
            <p className='footer-list'>Cloth production</p>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h1 className='footer-about-title'>Get in touch</h1>
        <ul>
          <li>
            <p className='footer-list'>Contact support</p>
          </li>
          <li>
            <p className='footer-list'>Contact help</p>
          </li>
        </ul>
        <div className='footer-icons'>
          <a>
            <FaGooglePlus size={40} className='footer-icon' />
          </a>
          <a>
            <AiFillTwitterCircle size={40} className='footer-icon' />
          </a>
          <a>
            <AiFillInstagram size={40} className='footer-icon' />
          </a>
          <a>
            <AiFillFacebook size={40} className='footer-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;