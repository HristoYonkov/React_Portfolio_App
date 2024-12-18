import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';


const About = () => {
    const [abouts, setAbouts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query)
            .then((data) => {
                let sorted = data.sort((a, b) => a._createdAt.localeCompare(b._createdAt));
                if (load) {
                    setAbouts(sorted);

                } else {
                    setAbouts(sorted.slice(0, 2).sort((a, b) => b._createdAt.localeCompare(a._createdAt)));
                }
            });
    }, [load]);

    const downloadFile = () => {
        const fileName = 'Hristo Yonkov CV.pdf';

        // Change link from sanity file storage to update the resume in the future!
        fetch('https://cdn.sanity.io/files/m29wg2x5/production/0392a3dbdbe00725a2596218f92b761bb3feeaa0.pdf', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));

                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;

                document.body.appendChild(link);

                link.click();

                link.parentNode.removeChild(link);
            });
    };

    return (
        <>
            <h2 className='head-text'>I Know That <span>Perseverance</span><br />means <span>Good Results</span></h2>

            <button type='button' className='p-text' onClick={() => downloadFile()}>Download CV</button>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
            {!load && (
                <a href='#about'>
                    <button type='button' className='p-text' onClick={() => setLoad(true)}>Load More</button>
                </a>
            )}
            {load && (
                <a href='#about'>
                    <button type='button' className='p-text' onClick={() => setLoad(false)}>Show Less</button>
                </a>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);