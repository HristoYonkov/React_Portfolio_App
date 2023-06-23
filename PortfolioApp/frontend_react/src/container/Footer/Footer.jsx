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

            <div className='app__footer-form app__flex'>
                <div className='app__flex'>
                    <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
                </div>
                <div className='app__flex'>
                    <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                        className='p-text'
                        placeholder='Your Message'
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                        id=""
                        cols="30"
                        rows="10"
                    />
                </div>
                <button type='button' className='p-text' onClick={handleSubmit}>Send Message</button>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);