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
      <h1 className='blog-title'>LATEST NEWS</h1>
      <div className='story'>
        <h1 className='story-title'>
          2018/19 executives of the Association of Economics Students (AES) made donated to Department
        </h1>
        <p className='story-desc'>
        The 2018/19 executives of the Association of Economics Students (AES) have donated items 
        worth GH₵ 7,000.00 to the Department of Economics Education. 
        The items include three public address systems, two table top fridges, 
        a podium, a set of jerseys, a football, five office chairs, and backdrop 
        for the association, six microphones and six pairs of microphone batteries. 
        This took place on Wednesday at the Faculty of Social Sciences Education (FSSE) 
        Block, North Campus, and Winneba.The Ag. Head, Department of Economics Education, 
        Dr. Ishmael Y. Dadson encouraged the incoming executives to emulate the warm-hearted 
        act of their predecessors and acknowledged the importance of associations in every community. 
        He urged patrons as well as lecturers to take keen interest in the activities of
         the Association and use funds generated judiciously.The substantive patron and 
         lecturer, Mr. Nicholas K. Essah commended the outgoing executives for the good 
         work done. He, however, advised the incoming executives and all student leaders to
          follow such good example and organise projects that would go a long way to 
          promote the larger interest of the general student body. The President, AES,
           Mr. Daniel Oppong, revealed that the project was funded with the association’s
            dues paid by the students. He encouraged other students to pay their dues 
            regularly and on time for the benefit of the association in which they find themselves in.  
            The other executives are the Vice-President, Helena Siripi; General Secretary, Gladys Egyir; 
            Deputy Secretary, Simon Atule; Organising Secretary, Joshua Tete Asare; Financial Secretary, 
            Emmanuella Ocran; Treasurer, Daniel Obah; Public Relations Officer (PRO), Okrah Domfe; 
            and Welfare, Shadrack Kontoh.Also present were lecturers, Department of Economics 
            Education, Dr. Theophilus Richardson; and Dr. Anselm Komla Abotsi; and Senior 
            Departmental Assistant, Madam Elizabeth
        </p>
        <div className='story-images'>
          <img className='blog-wide' src={require('../assets/images/blog/02.png')} />
          <img className='blog-norm' src={require('../assets/images/blog/03.png')} />
        </div>
      </div>
      <div className='story'>
        <h1 className='story-title'>
          Department of Home Economics Holds Annual Exhibition Show
        </h1>
        <p className='story-desc'>
        As part of its end of second semester activities, the Department of 
        Home Economics Education organised its annual exhibition and fashion show.
         The exhibition and fashion show took place on 16th May, 2018 at the Forecourt 
         of the Department of Home Economics. The show which is done every academic year 
         involved level 400 and 300 students of the Department. It is to showcase the 
         knowledge and skills the students have acquired from the training they were 
         exposed to.On display were decorated cakes and other sugar crafts, clothing 
         items, floral designs of all kinds, fascinators, purses, among others. It was 
         also a commemoration for the level 400 students as the exhibition show was their 
         last practical activity on campus.   According to the Head of Department, Ms. Theresa 
         Amu, the exhibition and fashion show indicates how prepared the final year students of 
         the Home Economics Education department are for the world of work. Per their 
         training/education, they are professional teachers and can also use the skills 
         they have acquired to establish small scale businesses in the clothing and hospitality 
         industries in addition to the teaching profession.
        </p>
        <div className='story-images'>
          <img className='blog-slim' src={require('../assets/images/blog/06.png')} />
          <img className='blog-wide' src={require('../assets/images/blog/05.png')} />
          <img className='blog-norm' src={require('../assets/images/blog/04.png')} />
        </div>
      </div>
    </div>
  )
}

export default Blog;