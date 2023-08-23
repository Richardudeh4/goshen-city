"use client";
 import React,{useEffect, useState} from 'react'
import Container from './Container';
import NavLinks from './NavLinks';
import Button from './Button'
import Logo from './Logo';
import { Popover} from '@headlessui/react';
import { TbMenu2} from "react-icons/tb";
import { IoIosArrowUp} from "react-icons/io";
import { AnimatePresence,motion } from 'framer-motion';
import { navData } from '@/constants';
import Link from 'next/link';

const MobileNavLinks = ({children, ...props})=> {
  return (
    <Popover.Button as={Link} className="block text-base leading-7 tracking-tight text-gray-700" {...props}>
       {children}
    </Popover.Button>
  )
}
 
 const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const handleScroll =()=>{
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50)
  }
  useEffect(()=> {
    if(typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return ()=> window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
     <header className={`w-full sticky z-50 top-0 bg-white ${
      isScrolled && "shadow-xl shadow-blue-200"
     }`}>
       <nav>
        <Container className="relative z-50 flex justify-between py-8">
        {/* logo */}
        <div className="relative z-10">
          <Logo/>
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex lg:gap-10 items-center">
          <NavLinks/>
        </div>
        {/*   Buttons */}
        <div className="flex items-center gap-6">
          <Button href="#" variant="outline" className="hidden lg:block">
            Get Advice
          </Button>
          <Button href="#" className="hidden lg:block">
            Hire Me
        </Button>
        {/* mobile Navlinks */}
        <Popover className="lg:hidden">
  {({open})=> (
    <>
    <Popover.Button className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50
    hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus-outline-none outline-none"
    aria-label = "Toggle site navigation">
      {({open})=> open?(<IoIosArrowUp  className="text-2xl"/>) : (<TbMenu2 className="text-2xl"/>)}
    </Popover.Button>
    <AnimatePresence initial={false}>
      {
        open && (
          <>
          <Popover.Overlay static as={motion.div}
          initial={{opacity : 0}}
          animate={{opacity : 1}}
          exit = {{opacity : 0}}
          className="fixed inset-0 z-0 bg-gray-300/60 backdrop::blur"
          />
          <Popover.Panel static as={motion.div}
           initial={{opacity:0, y: -32}}
           animate={{opacity: 1, y: 0}}
           exit= {{
            opacity:0,
            y:-32,
            transition: {duration: 0.2},
           }}
           className="absolute inset-x-0 top-0 z-0 origin-top 
           rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
          >
            <div className="space-y-4">
              {navData.map(({id, title,href}) => (
                <MobileNavLinks href={href} key={id}>
                  {title}
                </MobileNavLinks>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4">
          <Button href="#" variant="outline" >
            Get Advice
          </Button>
          <Button href="#">
            Hire Me
          </Button>
            </div>
          </Popover.Panel>
          </>
        )
      }
    </AnimatePresence>
    </>
  )
  }
        </Popover>
        </div>
        </Container>
       </nav>
     </header>
   );
 }
 
 export default Header
 