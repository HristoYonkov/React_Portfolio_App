import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFacebook } from 'react-icons/fa';
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://github.com/HristoYonkov"><FaGithubSquare /></a>

            </div>
            <div>
                <a href="https://www.linkedin.com/in/hristo-yonkov-444156260/"><FaLinkedin /></a>
            </div>
            {/* <div>
                <a href="https://www.facebook.com/hristopturs"><FaFacebook /></a>
            </div> */}
        </div>
    )
}

export default SocialMedia;