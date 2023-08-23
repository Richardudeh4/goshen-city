import React from 'react'
import bounce from '@/public/Images/logos/bounce.svg'
import Image from 'next/image'
const MainLoader = () => {
  return (
    <div className="h-screen w-full  flex flex-col items-center justify-center">
      <h1 className=' text-center bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900  text-transparent bg-clip-text text-5xl'> 
      TRUSTED FUTURE
      </h1>
   <Image
   priority
   src={bounce}
   alt="loading bounce"
   height={96}
   width={96}

   />
 
    </div>
  )
}

export default MainLoader
