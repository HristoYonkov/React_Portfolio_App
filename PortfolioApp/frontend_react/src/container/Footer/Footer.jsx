import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:hristopturs@gmail.com" className='p-text'>hristopturs@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.email} alt="mobile" />
          <a href="tel: +359 (899) 567-539" className='p-text'>+359 (899) 567-539</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);