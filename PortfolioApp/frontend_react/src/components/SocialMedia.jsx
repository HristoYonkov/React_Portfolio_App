import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFacebook } from 'react-icons/fa';
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <FaGithubSquare />
            </div>
            <div>
                <FaLinkedin />
            </div>
            {/* <div>
                <FaFacebook />
            </div> */}
        </div>
    )
}

export default SocialMedia