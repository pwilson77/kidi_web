import React from 'react';

import '../css/cloth.css';
import banner from '../assets/images/c-prod/00.png';
import cloth from '../assets/images/c-prod/01.png';

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
    <div className='cloth-container'>
      <div className='cloth-banner' style={{'backgroundImage': `url(${banner})`}}>
        <img src={cloth} className='cloth' />
        <h1 className='banner-title'>PRODUCTION</h1>
      </div>
      {/* <div className='about-section'>
        <div className='about-one'>
          <div className='about-desc'>
            <h1 className='about-title'>
              About Us
            </h1>
            <p className='about-text'>
              The Clothing Production Unit will offer sewing and
              embroidery services for the production of items such as
              academic gowns, choir robes, corporate uniforms, classic shirts,
              African wear, among others.
            </p>
          </div>
          <img src={require('../assets/images/')}/>
        </div>
      </div> */}
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