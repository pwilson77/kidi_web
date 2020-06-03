import React from 'react';

import banner from '../assets/images/gallery/01.png'
import '../css/gallery.css';

function Gallery() {
  return (
    <div className='gallery-container'>
      <div style={{'backgroundImage': `url(${banner})`}} className='gallery-banner' >
        <img src={require('../assets/images/gallery/00.png')} className='gallery' />
      </div>
      <div className='gallery-section'>
        <h1 className='gallery-title'>DEPARTMENT</h1>
        <div className='g-group'>
          <img className='gallery-item' src={require('../assets/images/gallery/02.png')} />
          <img className='gallery-item' src={require('../assets/images/gallery/03.png')} />
          <img className='gallery-item' src={require('../assets/images/gallery/04.png')} />
        </div>
      </div>
      <div className='gallery-section'>
        <h1 className='gallery-title'>CLOTHING</h1>
        <div className='g-group'>
          <img className='gallery-item' src={require('../assets/images/gallery/08.png')} />
          <img className='gallery-item' src={require('../assets/images/gallery/09.png')} />
          <img className='gallery-item' src={require('../assets/images/gallery/10.png')} />
        </div>
      </div>
      <div className='gallery-section'>
        <h1 className='gallery-title'>FOOD PRODUCTION</h1>
        <div className='g-group'>
          <img className='gallery-item' src={require('../assets/images/gallery/11.png')} />
          <img className='gallery-item' src={require('../assets/images/gallery/12.png')} />
          <img className='gallery-item' src={require('../assets/images/gallery/13.png')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;