import React from 'react';
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
 
 
const ServiceCard = ({index,title,icon}) => {
  return(
   <Tilt className='xs:w-[280px] w-full sm:w-[230px] max-w-[280px]'
    options={ {
        max: 45,
        scale:1,
        speed:450
      }} >
    <motion.div
    variants={fadeIn("right","spring",0.5*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ' 
    >
      <div 
     
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]  flex justify-evenly items-center flex-col"
      >
<img src={icon} alt={title} className='w-20 h-20 object-contain' />
<h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
      </div>

    </motion.div>

   </Tilt>
  )
}
const About = () => {
  
 
  return (
     <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
     </motion.div>
     <motion.p
     variants={fadeIn("","",0.1,1)}
     className="mt-4 text-secondary  text-[25px] max-w-3xl leading-[30px]  ml-10 "
     >
      I'm a third-year Computer Science student passionate about building things for the web.
    <br />I learn best by doing — building real projects rather than just following tutorials — 
      and I've worked across the full stack, from Flutter and Supabase to React, Three.js,
      and modern frontend tooling. My biggest project so far is RAWASII, a full-stack social
      platform for documenting Algerian architectural heritage. Beyond code, I spend my free 
      time exploring other creative fields, and I'm always looking for the next thing to build 
      and break.
     </motion.p>
     <div className="mt-20 flex flex-wrap gap-25 justify-center"
     >
      {services.map((service,index) => (
        <ServiceCard  key={service.title} index={index} {...service}/>
      ))}

     </div>
     </>
  )
}

export default SectionWrapper(About,"about")