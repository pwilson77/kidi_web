import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  const [location, setLocation] = useState('/');
  const [color, setColor] = useState('#1e1623');
  const [fontColor, setFontColor] = useState('#fff');
  let locationPath = useLocation();

  useEffect(() => {
    setLocation(locationPath.pathname);
    changeColor();
  }, [locationPath])
  
  const changeColor = () => {
    console.log('Location', locationPath.pathname);
    switch (locationPath.pathname) {
      case '/alumnia':
        setColor('#fff');
        setFontColor('#000');
        break;
      case '/gallery':
        setColor('#d23360');
        setFontColor('#fff');
        break;
      case '/contact':
        setColor('#fff');
        setFontColor('#000');
        break;
      case '/restaurant':
        setColor('#8d0505');
        setFontColor('#fff');
        break;
      case '/food':
        setColor('#1e1623');
        setFontColor('#fff');
        break;
      case '/cloth':
        setColor('#0c5548');
        setFontColor('#fff');
        break; 
      case '/':
        setColor('#1e1623');
        setFontColor('#fff');
        break;
      case '/blog':
        setColor('#1e1623');
        setFontColor('#fff');
        break;
      default:
        break;
    }
  }

  return (
    <div className='footer-container' style={{'background': color}}>
      <div className='footer-item'>
        <h1 className='footer-about-title' style={{'color': fontColor}}>About the University</h1>
        <p className='footer-text' style={{'color': fontColor}}>
          The A.G Head, Department of Economics Education, Dr. Ishmael
          Y. Dadson encouraged the incoming executives to emulate the 
          warm-hearted act of their predecessors and acknowledged the importance
          of associations in every community. He urged patrons as well as
          lecturers to take keen interest in the activities of the Association
          and use funds generated judiciously.
        </p>
        <a target='_blank' href="https://www.uew.edu.gh">
          <p className='footer-about-link' style={{'color': fontColor}}>
            https://www.uew.edu.gh
          </p>
        </a>
      </div>
      <div className='footer-item'>
        <h1 className='footer-about-title' style={{'color': fontColor}}>Info</h1>
        <ul>
          <li>
            <Link to='/blog'>
              <p className='footer-list' style={{'color': fontColor}}>Blog</p>
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              <p className='footer-list' style={{'color': fontColor}}>News of the University</p>
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              <p className='footer-list' style={{'color': fontColor}}>News of the Department</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h1 className='footer-about-title' style={{'color': fontColor}}>Courses</h1>
        <ul>
          <li>
            <Link to='/food'>
              <p className='footer-list' style={{'color': fontColor}}>Food production</p>
            </Link>
          </li>
          <li>
            <Link to='/cloth'>
              <p className='footer-list' style={{'color': fontColor}}>Cloth production</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h1 className='footer-about-title' style={{'color': fontColor}}>Get in touch</h1>
        <ul>
          <li>
            <Link to='/contact'>
              <p className='footer-list' style={{'color': fontColor}}>Contact support</p>
            </Link>
          </li>
          <li>
            <Link className='/contact'>
              <p className='footer-list' style={{'color': fontColor}}>Contact help</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;