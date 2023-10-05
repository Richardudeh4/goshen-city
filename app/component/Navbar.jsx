"use client";
import React from 'react';
import {useState} from 'react';
import Image from 'next/image'
import {navLinks} from '../constants/index'
import {hamburger} from '../assets/icons'
import Link from 'next/link';
import {motion} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Navbar =()=>{
  const [open ,setOpen] = useState(false);
  const ToggleMenu = ()=>{
    setOpen((prevOpen) => !prevOpen);
  }
  const menuVars = {
    initial: {
      scaleY : 0,
    },
    animate: {
      scaleY : 1,
      transition:{
        duration:0.5,
        ease: [0.12,0,0.39,0],
      },
    },
    exit:{
      scaleY: 0,
      transition:{
        duration:0.5,
        delay:0.5,
        ease: [0.12,0,0.39,1],
      },
    }
  };
  const containerVars = {
    initial:{
      transition:{
        staggerChildren:0.09,
        staggerDirection: -1,
      },
    },
    open:{
      transition:{
        delayChildren:0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  };
return(
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <div className="relative">
        <Link href='/'>
          <Image
            src="https://goshencityschools.com/wp-content/uploads/2021/09/School-Logo-with-name.jpg"
            alt='logo'
            width={129}
            height={49}
            className='m-0'
          />
        </Link>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal px-12 py-2 border border-slate-100 rounded-2xl bg-slate-500 font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link href='/login'> Login</Link>
        </div>
        <div className='hidden max-lg:block cursor-pointer' onClick={ToggleMenu}>
          <Image src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
      <AnimatePresence>
      {
        open && (
<motion.div 
variants={menuVars}
initial="initial"
animate="animate"
exit="exit"
className="fixed left-0 top-0 w-full h-screen bg-black origin-top text-white p-10">
<div className="flex h-full flex-col">
  <div className="flex justify-between">
  <a href='/'>
          <Image
            src="https://goshencityschools.com/wp-content/uploads/2021/09/School-Logo-with-name.jpg"
            alt='logo'
            width={129}
            height={29}
            className='m-0'
          />
        </a>
    <p className="cursor-pointer text-md text-white" onClick={ToggleMenu}>
      close
    </p>
  </div>
  <motion.div 
  variants={containerVars}
  initial ="initial"
  exit="initial"
  animate="open"
  className="flex flex-col h-full justify-center font-sans items-center gap-4">
    {
      navLinks.map((link, index) => {

        return(
          <div className="overflow-hidden">
         <MobileNavLink key={index} title={link.label} href={link.href}/>
         </div>
         )
      })
    }
  </motion.div>
</div>
</motion.div>
    )}
  </AnimatePresence>
    </header>
)
}
export default Navbar;



const mobileLinkVars = {
  initial:{
    y: "30vh",
    transition:{
      duration:0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open:{
    y:0,
    transition:{
      duration:0.7,
      ease: [0, 0.55,0.45, 1]
    },
  },
};

const MobileNavLink = ({title, href}) => {
  const [open ,setOpen] = useState(false);
  const ToggleMenu = ()=>{
    setOpen((prevOpen) => !prevOpen);
  }
  return(
    
    <motion.div 
    variants={mobileLinkVars}
     className='text-5xl uppercase text-white'>
      <Link href={href}
      onClick={ToggleMenu}
      >{title}</Link>
    </motion.div>
  )
}