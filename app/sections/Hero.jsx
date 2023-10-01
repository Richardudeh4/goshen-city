import React from 'react';
import {purpose,slider} from '../constants';
import Carousel from '../component/Carousel';
import Gridcard from '../component/Gridcard';
const Hero = () => {
  return (
    <section id="home"
    className='w-full flex xl:flex-row flex-wrap sm:flex-col justify-center min-h-screen gap-10 max-container'
    >
    <div className="text-center mt-72 px-16"> 
      <h1 className="font-bold  text-2xl sm:text-4xl font-croissant">GOSHEN CITY SCHOOLS,ENUGU </h1>
      <p className="text-sm sm:text-xl font-normal font-croissant text-center pt-12">“Recovery, Resilience and Rigour”</p>
    </div>
      <div className="container flex justify-center items-center mx-24 mt-36 sm:mx-32 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        {purpose.map((purpose,index) =>(
          <Gridcard key={index} {...purpose}/>
          ))
        }
</div>
</div>
<div className=" bg-pencil bg-no-repeat bg-cover bg-center">

</div>
    </section>
  )
}

export default Hero
{/* <div className="flex sm:space-x-4 max-xl:flex-col sm:gap-10 sm:max-w-[400px] sm:max-h-[350px] min-w-[295px]  px-10 py-48 min-h-[210px] justify-center"> */}
