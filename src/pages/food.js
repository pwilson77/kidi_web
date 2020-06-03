import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/food.css';
import banner from '../assets/images/food2/01.png';

const gallery = [
  require('../assets/images/food2/02.png'),
  require('../assets/images/food2/03.png'),
  require('../assets/images/food2/04.png')
]

function Food() {
  return (
    <div className='f-container'>
      <div style={{'backgroundImage': `url(${banner})`}} className='f-banner'>
        <h1 className='f-banner-title'>
          FOOD
        </h1>
        <p className='f-banner-text'>
          PRODUCTION UNIT
        </p>
        <Link to='/restaurant'>
          <div className='f-banner-link'>
            <p className='f-link'>VISIT RESTAURANT</p>
          </div>
        </Link>        
      </div>
      <div className='f-about'>
        <h1 className='f-about-title'>ABOUT US</h1>
        <p className='f-about-text'>
          The Food Production Unit provides catering services to the University community
          and its environs while the Clothing Production Unit is into income generation by undertaking
          contract sewing of clothing items for the university.
          Each unit has a head who oversees the management of the activities of the unit.
        </p>
        <p className='f-about-text'>
          The Food Production Unit(FPU) of the Home Economics Department of the University
          of Education, Winneba(UEW) has started operating a new restaurant at the North
          Campus, Winneba. The opening of the restaurant is in fulfillment of the promist
          made by the Vice-Chancellor, Rev. Fr. Prof. Anthony Afful-Broni to revamp the FPU during
          the first Convocation meeting for the 2018/19 academic year on Wednesday, 26th September, 2018
          and is also to provide a facelift for the University.
        </p>
        <p className='f-about-text'>
          The restaurant has seating capacity of 150, well-furnished and with a relaxing atmosphere
          unlike the old place which seated only 40 people at a time. They serve a variety of local
          and continental dishes like pizzas, sea foods, salads, beef foods, sandwiches, potato
          chips, pastries and drinks. Apart from the regular meals sold at the restaurant, 
          there are special dishes served each day in a congenial atmosphere to whet the appetite
          of customers
        </p>
        <p className='f-about-text'>
          Among the special meals served include Ebunuebunu and Waakye on Mondays, Asanka Delight,
          and Omutuo on Tuesdays, Waakye and Garri Foto on Wednesdays, Garden eggs, Abom and Konkonte
          on Thursdays and Omutuo on Fridays.
        </p>
      </div>
      <div className='f-gallery'>
        {gallery.map(item => (
          <img src={item} className='f-image' />
        ))}
      </div>
    </div>
  )
}

export default Food;