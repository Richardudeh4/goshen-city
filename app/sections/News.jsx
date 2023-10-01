// "use client";
import React from 'react';
import { news } from '../constants';
// import { motion, useScroll, useTransform} from 'framer-motion';


// const ref = useRef(null);
// const {scrollYprogress} = useScroll({
//   target:ref,
//   offset : ["0 1", "1.33 1"],
// });
// const scaleprogress = useTransform(scrollYprogress,[0,1], [0.5,1]);

const News = () => {
  return (
 <section
//  ref={ref}
//  style={{
//   scale: scaleprogress,
//   opacity: scrollYprogress
//  }}
 id="news"
 className='w-full flex xl:flex-row flex-wrap sm:flex-col justify-center min-h-screen gap-10 max-container'
 >
  
  <h1 className="font-croissant text-center font-bold text-4xl">Lastest Updates</h1>
<div className="container flex justify-center items-center mx-16 mt-4 py-8 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10  ">
  {
  news.map((item)=>(
    <div key={item.title} 
    className="shadow-md px-4 min-w-[250px] items-center">
<p>{item.date}</p>
<h1 className='text-2xl font-palanquin font-normal pt-8 px-2 text-center'>{item.title}</h1>
<p className="text-slate-600 text-center pb-6 pt-8">{item.text}</p>
    </div>
  ))
}

  </div>
</div>

 </section>
  )
}

export default News
