import React from 'react';

import banner from '../assets/images/01.png';
import zip from '../assets/images/08.png';
import '../css/home.css';

function Home() {
  return (
    <div className='home-container'>
      <div style={{'backgroundImage': `url(${banner})`}} className='banner-view'>
        <img src={require('../assets/images/0.png')} className='welcome'/>
        <p className='banner-title'>THE DEPARTMENT OF HOME ECONOMICS</p>
      </div>
      <div className='three-peat'>
        <div className='three-peat-item'>
          <img src={require('../assets/images/05.png')} className='three-image' />
          <p className='three-text'>CLOTHING</p>
        </div>
        <div className='three-peat-item'>
          <img src={require('../assets/images/06.png')} className='three-image' />
          <p className='three-text'>FOOD PRODUCTION</p>
        </div>
        <div className='three-peat-item'>
          <img src={require('../assets/images/07.png')} className='three-image' />
          <p className='three-text'>DECORATION</p>
        </div>
      </div>
      <div className='about-section'>
        <h1 className='about-title'>ABOUT US</h1>
        <p className='about-text'>
          The department of Home Economics Education was part of the Specialist Training College, Winneba.
          It was integrated into the University College of Education, Winneba in 1992.
        </p>
        <h3 className='about-title-2'>
          Structure and Organization of Department
        </h3>
        <p className='about-text'>
          The Department runs a 4-year B.Sc degree, M.Ed. Sandwich and M.Phi; Programmes in Home Economics.
          The Units under the Department are as follows: Clothing and Textiles, Food & Nutrition, and Management in Living Units.
          In addition to the academic programmes, the Department has a Food Production and Clothing Production Units.
        </p>
        <p className='about-text'>
          The Food Production Unit provides catering services to the University community and its environs while the Clothing Production
          Unit is into income generation by undertaking contract sewing of clothing items for the universtity.
          Each unit has a head who oversees the management of the activities of the unit.
        </p>
      </div>
      <div className='goals-section' style={{'backgroundImage':`url(${zip})`}}>
        <h1 className='goals-title'>GOALS</h1>
        <p className='goals-text'>
          The goal of the Department is to train a high caliber of Home Economics teachers to provide quality
          Home Economics Education in Ghanaian pre-tertiary institutions. The programme is designed to equip students
          with knowledge and skills that would enable them effectively handle Home Economics subjects - Catering, Sewing, Basic Design and Technology, Food and Nutrition, Clothins and Textiles, Management in Living
          and Population and Family Life Education at the Junior and Senior High Schools and in Technical Institutions(Colleges of Education and Polytechnics). 
          The programme also provides students with deeper understanding of concepts and principles of Home Economics
          and equips them with analytical and practical skills, which enable them to improve the quality of
          life of their families, students and community members.
        </p>
      </div>
      <div className='obj-section'>
        <img src={require('../assets/images/09.png')} className='obj-image' />
        <div className='obj'>
          <h1 className='obj-title'>OBJECTIVES</h1>
          <ul>
            <li>
              <p className='obj-text'>
                Produce an all round graduate who is capable of teaching in the Junior
                and Senior Secondary Schools, Diploma Awarding, Vocational/Technical
                and Polytechnic Institution in the country.
              </p>
            </li>
            <li>
              <p className='obj-text'>
                Produce graduates who will be able to cope with the challenges of life
                and operate effectively in any society in which they find themselves.
              </p>
            </li>
            <li>
              <p className='obj-text'>
                Provide opportunities for students to undertake purposeful outreach programmes
                to help improve living conditions in Ghanaian communities.
              </p>
            </li>
            <li>
              <p className='obj-text'>
                Develop students' competencies by promoting adequate understanding of the concepts
                of Home Economics and Vocational Skills to enable them teach effectively.
              </p>
            </li>
            <li>
              <p className='obj-text'>
                Provide students with skills for conducting research and using their
                findings to solve problems of the individual, family and the society.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Home