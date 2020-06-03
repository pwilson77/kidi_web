import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';

import banner from '../assets/images/contact/05.png';
import '../css/contact.css';

function Contact() {
  const [fieldOne, setFieldOne] = useState('');
  const [fieldTwo, setFieldTwo] = useState('');
  const [fieldThree, setFieldThree] = useState('');
  const [fieldFour, setFieldFour] = useState('');

  const changeHandler = (field, e) => {
    switch (field) {
      case 1:
        setFieldOne(e.target.value)
        break;
      case 2: 
        setFieldTwo(e.target.value)
        break;
      case 3:
        setFieldThree(e.target.value)
        break;
      case 4:
        setFieldFour(e.target.value)
        break;
      default:
        break;
    }
  }
  return (
    <div className='contact-container' style={{'backgroundImage': `url(${banner})`}}>
      <h1 className='contact-title'>
        CONTACT US
      </h1>
      <div className='form-item'>
        <p className='form-title'>Name:</p>
        <TextField id="standard-basic" color={'secondary'} className="textfield" value={fieldOne} onChange={(val) => changeHandler(1, val)} />
      </div>
      <div className='form-item'>
        <p className='form-title'>Email:</p>
        <TextField id="standard-basic" className="textfield" value={fieldTwo} onChange={(val) => changeHandler(2, val)} />
      </div>
      <div className='form-item'>
        <p className='form-title'>Phone:</p>
        <TextField id="standard-basic" className="textfield" value={fieldThree} onChange={(val) => changeHandler(3, val)} />
      </div>
      <div className='form-item'>
        <p className='form-title'>Message:</p>
        <TextField id="standard-basic" size={'medium'} rows={4}  className="textfield" value={fieldFour} onChange={(val) => changeHandler(4, val)} multiline={true}/>
      </div>
      <button className='submit-btn'>
        Submit
      </button>
    </div>
  )
}

export default Contact;