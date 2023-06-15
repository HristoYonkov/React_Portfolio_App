import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [setFilterWork, setSetFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type = "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);

      })
  }, []);
  
  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span> section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}

        <motion.div
          animate={animateCard}
          transition={{duration: 0.5, delayChildren: 0.5}}
          className='app__work-portfolio'

        >
        
        </motion.div>
      </div>
    </>
  )
}

export default Work;