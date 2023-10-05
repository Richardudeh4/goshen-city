"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from './Button';
import Image from 'next/image';

const AutoPlayCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay interval (in milliseconds)
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setCurrentSlide(currentSlide);
    },
  };

  const carouselData = [
    {
    heading: 'Conducive Environment',
    text: 'At Goshen City Schools, we provide our children with adequate learning materials in spacious classrooms and the engagement of well…', 
    imgSrc: 'https://goshencityschools.com/wp-content/uploads/2020/05/Building.jpg',
    buttonText: 'Read More'},
   
    {
    heading: 'Blended curriculum',
    text: 'At Goshen city schools, our Curriculum is a blend of the Nigeria National Basic Education Curriculum and that of the schools',
    imgSrc: 'https://goshencityschools.com/wp-content/uploads/2020/05/computer-room.jpg',
    buttonText: 'Read More' },
    {
    heading:'Standard Facilities',
    text: 'It is important to understand that science and technology cannot be over emphasized, Hence We have made sure that out science ', 
    imgSrc : 'https://goshencityschools.com/wp-content/uploads/2020/05/Lab1.jpg',
    buttonText: 'Read More'}
    // Add more slides with text and image sources
  ];

  return (
    <div>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <Image src={item.imgSrc} alt={`Image ${index + 1}`} width={100} height={100} object-contain="fill" className="w-full"/>
            <h1 className=" font-bold text-4xl z-10 pl-24 -mt-96 text-white font-sans">{item.heading}</h1>
            <p className="text-center -mt-88  pl-24 text-sm font-medium font-palanquin text-white ">{item.text}</p>
            <Button label={item.buttonText}/>
          </div>
        ))}
      </Slider>
   
    </div>
  );
};

export default AutoPlayCarousel;
