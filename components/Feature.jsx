import React from 'react'
import Title from './Title'
import Container from './Container';
import DesktopView, { MobileView } from './DesktopView';

const Feature = () => {
  return (
    <section
    id="features"
    aria-label = "Features for Investing all your money"
    className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div>
            <Title
            title="Every feature you need to win. Try it for yourself"
            className="text-white text-2xl"
            />
  <p className="mt-2 text-lg text-gray-400">
    Trusted Future was built for investors like you who play by their own rules 
    and are not going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, Investa has 
    it.

  </p>
        </div>
      </Container>
      {/* desktop view  */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
      <DesktopView/>
      </div>
      {/* mobile view  */}
      <div className="mt-16 md:hidden">
    <MobileView/>
      </div>
    </section>
   
  )
}

export default Feature
