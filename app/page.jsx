// import Link from "next/link"
import Navbar from './component/Navbar';
import React from "react";
import News from './sections/News';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Aboutus from './sections/Aboutus';
// import Elearning from './sections/Elearning';
import Newsletter from './sections/Newsletter';
import Testimonial from './sections/Testimonial'

export default function Home() {
return (
  <main className="relative">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b bg-pale-blue">
    <Hero/>
    </section>
    <section className="padding bg-pale-blue">
    <Aboutus/>
    </section>
    <section className="padding ">
      <News/>
    </section>
<section className="padding bg-pale-blue">
<Testimonial/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full ">
<Newsletter/>
    </section>
    <section className="padding-x bg-black padding-t pb-8">
<Footer/>
    </section>
  </main>
   
)
}
// YSplaJK9KJcUQ32Z
