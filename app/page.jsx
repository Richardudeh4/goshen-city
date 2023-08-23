"use client";
import MainLoader from '../components/MainLoader';
import {useState,useEffect} from 'react'
import Hero from '@/components/Hero';
import Feature from '@/components/Feature'
import Account from '@/components/Account'
import Review from '@/components/Review'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Header from '@/components/Header';
export default function Home() {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  
  if(loading){
    return <MainLoader/>
  }

return (
  <main>
      <Header/>
  <Hero/>
  <Feature/>
  < Account/>
  <CallToAction/>
  <Review/>
  <Footer/>
  </main>
   
)
}
// YSplaJK9KJcUQ32Z
