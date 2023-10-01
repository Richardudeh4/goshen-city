import React from 'react'
import {ReviewCard} from "../component";
import FadeInOnScroll from '../component/FadeInOnScroll'
import { reviews } from "../constants";
const Testimonial = () => {
  return (
    <FadeInOnScroll>
    <section 
    id="testimonial"
    className='max-container'>
    <h3 className='font-palanquin text-center text-4xl font-bold'>
      What Our
      <span className='text-coral-red'> Students </span>
      Say?
    </h3>
    <p className='m-auto mt-4 max-w-lg  text-center info-text'>
      Hear genuine stories from our satisfied parents about their
      exceptional experiences with us.
    </p>

    <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
    </div>
  </section>
  </FadeInOnScroll>
  )
}

export default Testimonial



