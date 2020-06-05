import React from 'react';

import '../css/cloth.css';
import banner from '../assets/images/c-prod/00.png';
import cloth from '../assets/images/c-prod/01.png';
import bg from '../assets/images/c-prod/13.png';

const row1 = [
  require('../assets/images/c-prod/03.png'),
  require('../assets/images/c-prod/04.png'),
  require('../assets/images/c-prod/05.png'),
]

const row2 = [
  {id: 1, image: require('../assets/images/c-prod/06.png')},
  {id: 2, image: require('../assets/images/c-prod/07.png')},
]

const row3 = [
  require('../assets/images/c-prod/08.png'),
  require('../assets/images/c-prod/09.png'),
  require('../assets/images/c-prod/10.png'),
]

const row4 = [
  {id: 1, image: require('../assets/images/c-prod/11.png')},
  {id: 2, image: require('../assets/images/c-prod/12.png')},
]


function Cloth() {
  return (
    <div className='cloth-container' style={{'backgroundImage': `url(${bg})`}}>
      <div className='cloth-banner' style={{'backgroundImage': `url(${banner})`}}>
        <img src={cloth} className='cloth' />
        <h1 className='banner-title'>PRODUCTION</h1>
      </div>
      <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <div className='c-about-section'>
          <div className='c-about-one'>
            <div className='c-about-desc'>
              <h1 className='c-about-title'>
                About Us
              </h1>
              <p className='c-about-text'>
                The Clothing Production Unit will offer sewing and
                embroidery services for the production of items such as
                academic gowns, choir robes, corporate uniforms, classic shirts,
                African wear, among others.
              </p>
            </div>
            <img src={require('../assets/images/c-prod/A0.png')} className='about-image-1' />
          </div>
          <div className='c-about-two'>
            <img src={require('../assets/images/c-prod/A00.png')} className='about-image-2' />
            <div className='c-about-desc'>
              <p className='c-about-text-1'>
                The unit consists of two offices for the Coordinator and Administrator, common room
                for workers, fitting and store rooms, sewing, cutting, ironing/pressing and 
                embroidery sections.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='c-gallery'>
        <h1 className='c-title'>Gallery</h1>
        <div className='gallery-row'>
          {row1.map(item => (
            <img src={item} className='gallery-image' />
          ))}
        </div>
        <div className='gallery-row'>
          {row2.map(item => (
            <img 
              src={item.image} 
              className={item.id === 1 ? 'gallery-image2' : 'gallery-image'} 
            />
          ))}
        </div>
        <div className='gallery-row'>
          {row3.map(item => (
            <img src={item} className='gallery-image' />
          ))}
        </div>
        <div className='gallery-row'>
          {row4.map(item => (
            <img 
              src={item.image} 
              className={item.id === 1 ? 'gallery-image' : 'gallery-image2'} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cloth;