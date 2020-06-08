import React, { useState, useEffect } from 'react';
import {
  useLocation,
  Link
} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Divider } from 'semantic-ui-react';

import '../css/header.css';

function Header({windowWidth}) {
  return (
    windowWidth < 768 ? (
      <MobileHeader />
    ) : (
      <DesktopHeader />
    )
  )
}

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  var toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='mobile-container'>
      <div className={showMenu ? 'slide-in' : 'slide-out'} style={menuStyle}>
        <ul>
          <li>
            <Link to='/'>
              <button onClick={toggleMenu} className='menu-btn'>
                ABOUT US
              </button>
            </Link>
          </li>
          <li>
            <Link to='/gallery'>
              <button onClick={toggleMenu} className='menu-btn'>
                GALLERY
              </button>
            </Link>
          </li>
          <li>
            <Link to='/alumnia'>
              <button onClick={toggleMenu} className='menu-btn'>
                ALUMNA
              </button>
            </Link>
          </li>
          <li>
            <div className='divider'></div>
          </li>
          <li>
            <Link to='/projects'>
              <button onClick={toggleMenu} className='menu-btn'>
                PROJECTS
              </button>
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              <button onClick={toggleMenu} className='menu-btn'>
                BLOG
              </button>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <button onClick={toggleMenu} className='menu-btn'>
                CONTACT
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <button type='button' onClick={toggleMenu} className='menu-button'>
        {showMenu ? <AiOutlineClose size={35} color='#000' /> : <AiOutlineMenu size={35} color='#000' />}
      </button>
    </div>
  )
}

function DesktopHeader() {
  return (
    <div className='desktop-container'>
      <div className='logo-and-nav-container'>
        <ul className='desktop-nav-list'>
          <li>
            <Link to='/'>
              <p className='desktop-nav-item'>ABOUT US</p>
            </Link>
          </li>
          <li>
            <Link to='/gallery'>
              <p className='desktop-nav-item'>GALLERY</p>
            </Link>
          </li>
          <li>
            <Link to='/alumnia'>
              <p className='desktop-nav-item'>ALUMNA</p>
            </Link>
          </li>
        </ul>
        <ul className='desktop-nav-list'>
          <li>
            <p className='desktop-nav-item'>PROJECTS</p>
          </li>
          <li>
            <Link to='/blog'>
              <p className='desktop-nav-item'>BLOG</p>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <p className='desktop-nav-item'>CONTACT</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

var menuStyle = {
  width: '50%',
  height: '50vh',
  top: 0,
  left: 0,
  position: 'absolute',
  'z-index': 1,
  transform: 'translateX(-100%)',
  '-webkit-transform': 'translateX(-100%)',
  padding: '20px',
}

export default Header;