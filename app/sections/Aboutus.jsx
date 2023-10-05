"use client";
import React from 'react'
import {About} from  '../constants';

import {FadeInOnScroll} from '../component';
// import {useInView} from 'react-intersection-observer';
// import {useEffect} from 'react';
// import {useAnimation} from 'framer-motion';
const Aboutus = () => {
  return (
   <FadeInOnScroll>
    <section
    id="about-us">
      <div  className="flex flex-col mt-10 mx-4 justify-center sm:flex sm:flex-col gap-16 ">
    {
About.map((item) => (
<div 
key={item.title}
>
      <h1 className="text-center text-black text-4xl font-montserrat font-bold">{item.title}</h1>
      <p className=" text-2xl  font-sans  font-normal mt-10 "> {item.text}</p>
    </div>))
}
    </div>
    </section>
    </FadeInOnScroll>
   )
}

export default Aboutus
