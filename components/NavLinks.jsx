import {AnimatePresence,motion} from 'framer-motion'
import React, { useState } from 'react';
import {navData} from '@/constants';
import Link from 'next/link';

const NavLinks = () => {
    const [hoverIndex, sethoverIndex] = useState(null);
  return (
    <>
    {
        navData.map(({id, title,href})=> (
            <Link key={id} href={href} className="relative -mx-3 -my-2 px-4
            rounded-lg py-2 text-base
         text-gray-700 transition-colors"
         onMouseEnter={()=> sethoverIndex(id)}
         onMouseLeave={()=> sethoverIndex(null)}>
                <AnimatePresence>
              {
                hoverIndex === id && (
                  <motion.span className="absolute inset-0 rounded-lg bg-gray-100"
                  layoutId = "hoverBackground"
                  initial={{opacity:0}}
                  animate = {{opacity:1,transition: {duration:0.15}}}
                  exit={{
                    opacity:0,
                    transition: {duration:0.15, delay:0.2},
                  }}
                  />
                )
              }
                </AnimatePresence>
            <span className='relative z-10'>{title}</span>
            </Link>
        ))
    }
    </>
  )
}

export default NavLinks
