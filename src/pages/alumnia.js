import React from 'react';

import banner from '../assets/images/alumina/01.png';
import alumnia from '../assets/images/alumina/00.png';
import '../css/alumnia.css';

function Alumnia() {
  return (
    <div className='alumnia-container'>
      <div style={{'backgroundImage': `url(${banner})`}} className='alumnia-banner'>
        <img src={alumnia} className='a-banner' />
      </div>
      <div className='alumnia-about'>
        <h1 className='alum-about-title'>ABOUT US</h1>
        <p className='alum-about-text'>
          The University has an old schools association called the Alumina. The Department
          of Home Economics has also made a decision that any member who graduated under this Department
          is expected to pay dues as an alumina. This platform will ensure easy payment
          of the Dues of any payment of dues and donations to the Department.
        </p>
      </div>
      <h1 className='payment-title'>
        PAYMENT FORM FOR DUES
      </h1>
    </div> 
  )
}

export default Alumnia;