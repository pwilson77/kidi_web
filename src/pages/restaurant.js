import React, { useEffect, useState } from 'react';

import banner from '../assets/images/food/01.png';
import bg from '../assets/images/food/03.png';
import order from '../assets/images/food/11.png';
import '../css/restaurant.css';
import Iframe from 'react-iframe';

const gallery1 = [
  require('../assets/images/food/14.png'),
  require('../assets/images/food/15.png'),
  require('../assets/images/food/16.png'),
  require('../assets/images/food/17.png'),
]

const gallery2 = [
  require('../assets/images/food/18.png'),
  require('../assets/images/food/19.png'),
  require('../assets/images/food/20.png'),
  require('../assets/images/food/21.png')
]

function Restaurant() {
  return (
    <div className='food-container' style={{'backgroundImage': `url(${bg})`}}>
      <div style={{'backgroundImage': `url(${banner})`}} className='food-banner'>
        <img className='food-title' src={require('../assets/images/food/22.png')} />
        <p className='food-banner-text'>
          The restaurant has seating capacity of 150, well-furnished and with a relaxing atmosphere
          unlike the old place which seated only 40 people at a time.
        </p>
      </div>
      <div className='food-about'>
        <div className='food-about-desc'>
          <h1 className='food-about-title'>ABOUT US</h1>
          <p className='food-about-text'>
            They serve a variety of local and continental dishes, like pizza, 
            sea food, salads, beef meals, sandwiches, potato chips, pastries and
            drinks. Apart from the regular meals sold at the restaurant, there
            are special dishes served each day in a congenial atmosphere to whet
            the appetite of customers.
          </p>
          <p className='food-about-text'>
            Among the special meals served include Ebunuebunu and Waakye on Mondays,
            Asanka Delight and Omutuo on Tuesdays, Waakye and Gari Foto on Wednesdays, 
            Garden Eggs, Abom and Konkonte on Thursdays and Omutuo on Fridays.
          </p>
        </div>
        <img src={require('../assets/images/food/02.png')} className='food-about-image' />
      </div>
      <div className='food-menu'>
        <h1 className='food-menu-title'>MENU</h1>
        <div className='food-menu-1'>
          <div className='menu-item'>
            <img src={require('../assets/images/food/07.png')} className='menu-image'/>
            <div className='price-tag1'>
              <p className='price-name'>Banku and Tilapia</p>
              <h1 className='price'>25Ghc</h1>
            </div>
          </div>
          <div className='menu-item'>
            <img src={require('../assets/images/food/05.png')} className='menu-image'/>
            <div className='price-tag2'>
              <p className='price-name'>Fufu</p>
              <h1 className='price'>30Ghc</h1>
            </div>
          </div>
          <div className='menu-item'>
            <img src={require('../assets/images/food/06.png')} className='menu-image'/>
            <div className='price-tag1'>
              <p className='price-name'>Jollof Rice and Chicken</p>
              <h1 className='price'>35Ghc</h1>
            </div>
          </div>
        </div>
        <div className='food-menu-1'>
          <div className='menu-item'>
            <img src={require('../assets/images/food/09.png')} className='menu-image'/>
            <div className='price-tag1'>
              <p className='price-name'>Sauce sage</p>
              <h1 className='price'>25Ghc</h1>
            </div>
          </div>
          <div className='menu-item'>
            <img src={require('../assets/images/food/10.png')} className='menu-image'/>
            <div className='price-tag2'>
              <p className='price-name'>Orange drink</p>
              <h1 className='price'>30Ghc</h1>
            </div>
          </div>
          <div className='menu-item'>
            <img src={require('../assets/images/food/08.png')} className='menu-image'/>
            <div className='price-tag1'>
              <p className='price-name'>Salad and chicken</p>
              <h1 className='price'>35Ghc</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='order-section' style={{'backgroundImage': `url(${order})`}}>
      </div>
      <div style={{'display': 'flex', 'justifyContent': 'center', 'marginTop': '150px'}}>
        <h1 className='food-menu-title'>
          GALLERY
        </h1>
      </div>
      <div className='food-gallery-section'>
        {gallery1.map(item => (
          <img src={item} className='food-gallery' />
        ))}
      </div>
      <div className='food-gallery-section'>
        {gallery2.map(item => (
          <img src={item} className='food-gallery' />
        ))}
      </div>
      <Iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.358593951858!2d-0.6360922845236637!3d5.362141737058303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfde3505856a26eb%3A0x2b40be9cb1e1a679!2sUniversity%20of%20Education%2C%20Winneba%20(North%20Campus)!5e0!3m2!1sen!2sgh!4v1591143779889!5m2!1sen!2sgh" 
        width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
    </div>
  )
}

export default Restaurant;