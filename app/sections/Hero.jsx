"use client";
import React from 'react';
import {purpose} from '../constants';
import {principal} from '../constants';
import {AutoPlayCarousel, Button} from '../component';
import Gridcard from '../component/Gridcard';

const Hero = () => {
  return (
    <section id="home"
    className='w-full flex xl:flex-row flex-wrap sm:flex-col justify-center min-h-screen gap-10 max-container'
    >
    {/* <div className="mt-24">
       <AutoPlayCarousel/>
    </div>
  */}
    <div className="text-center mt-72 px-16"> 
      <h1 className="font-bold  text-2xl sm:text-4xl font-croissant">GOSHEN CITY SCHOOLS,ENUGU </h1>
      <p className="text-sm sm:text-xl font-normal font-croissant text-center pt-12">“Recovery, Resilience and Rigour”</p>
    </div>
      <div className="container flex justify-center items-center mx-4 mt-36 sm:mx-32 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 ">
        {purpose.map((purpose,index) =>(
          <Gridcard key={index} {...purpose}/>
          ))
        }
</div>
</div>
{
  principal.map((item,index)=> (
  <div  key={index} className="flex flex-col sm:flex-row space-x-8 sm:gap-48 justify-center mt-10 sm:mx-6 mx-4">
<img src={item.img} alt="principal" object-contain="fill" className="rounded-xl"/>
<div className="mx-4 sm:mx-20 text-gray-400">
  <h1 className='text-2xl font-croissant pt-8 font-bold'>{item.title}</h1>
  <p className="text-sm font-martian font-normal pt-12">{item.message}</p>
  <Button label="Read More" className="rounded-xl absolute top-12"/>

</div>
</div>
  ))

}
 </section>
  )
}

export default Hero
{/* <div className="flex sm:space-x-4 max-xl:flex-col sm:gap-10 sm:max-w-[400px] sm:max-h-[350px] min-w-[295px]  px-10 py-48 min-h-[210px] justify-center"> */}
