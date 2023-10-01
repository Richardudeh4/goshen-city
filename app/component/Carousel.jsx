// "use client";
// import React from 'react'
// import 'swiper/css'; 
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // Import Swiper CSS
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/module';

// SwiperCore.use([Navigation, Pagination, Autoplay])

// const Carousel = ({slider}) => {
//   return (
//     <Swiper
//     navigation
//     pagination={{ clickable: true }}
//     autoplay={{ delay: 3000 }}
//     loop
//     className="relative h-80"
//   >
//     {images.map((image, index) => (
//       <SwiperSlide key={index}>
//         <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
//       </SwiperSlide>
//     ))}

//   </Swiper>
//     )
// }

// export default Carousel


// // // "use client";
// // // import React from 'react';
// // // import {Swiper, SwipperSlide} from 'swiper/react';
// // // import Image from 'next/image';
// // // import 'swiper/css';
// // // const Carousel = ({slider}) => {
// // //     return(
// // // <Swiper 
// // // spaceBetween={50}
// // // slidesPerView={1}
// // // onSlideChange={()=> console.log('slide change')}
// // // onSwiper={(swiper) => console.log(swiper)}
// // // >
// // // { 
// // // slider.map((slide)=> (
// // //         <SwipperSlide key={slide.image}>
// // //         <Image
// // //         src={slide.image}
// // //         alt={slide.heading}
// // //         />
// // //     </SwipperSlide>
// // //     ))
// // // }

// // // </Swiper>
// // // )
// // // }
// // // export default Carousel;