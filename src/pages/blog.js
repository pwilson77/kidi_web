import React from 'react';

import '../css/blog.css';
import banner from '../assets/images/blog/00.png'
import news from '../assets/images/blog/01.png';

function Blog() {
  return (
    <div className='blog-container'>
      <div className='b-banner' style={{'backgroundImage': `url(${banner})`}}>
        <img src={news} className='news' />
        <p className='b-banner-title'>Related news about the Department of Home Economics</p>
      </div>
    </div>
  )
}

export default Blog;