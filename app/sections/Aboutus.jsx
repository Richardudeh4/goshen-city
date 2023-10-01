"use client";
import React from 'react'
import {About} from  '../constants';
import {motion} from 'framer-motion';
const Aboutus = () => {
  return (
    <motion.section 
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{type:'spring', delay:0.5 ,stiffness:100}}
    id="about-us">
      
    <div className="flex flex-col mt-10 mx-16 justify-center sm:flex sm:flex-col gap-16 ">
    {
About.map((item) => (
    <div 
  
    key={item.title}>
      <h1 className="text-center text-black text-4xl font-montserrat font-bold">{item.title}</h1>
      <p className=" text-2xl  font-sans  font-normal mt-10 "> {item.text}</p>
    </div>
)
)
    }
    </div>

    </motion.section>
      )
}

export default Aboutus
