import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmited, setIsFormSubmited] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        setLoading(true);
        if (Object.values(formData).some((x) => x === '')) {
            alert('Fill All Fields');
            setLoading(false);
            return;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
            alert('Invalid Email!');
            setLoading(false);
            return;
        }

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmited(true);
            })
    }

    return (
        <>
            <h2 className='head-text'>Take a break & chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt="email" />
                    <a href="mailto:hristopturs@gmail.com" className='p-text'>hristopturs@gmail.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +359 (899) 567-539" className='p-text'>+359 (899) 567-539</a>
                </div>
            </div>

            {!isFormSubmited ?
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input className='p-text' type="text"
                            placeholder='Your Name'
                            name='name'
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className='app__flex'>
                        <input className='p-text' type="email"
                            placeholder='Your Email'
                            name='email'
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type='button' className='p-text' onClick={handleSubmit}>
                        {loading ? 'Sending..' : 'Send Message'}
                    </button>
                </div>
                :
                <div>
                    <h3 className='head-text'>Thnank you for getting in touch!</h3>
                </div>

            }

        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);