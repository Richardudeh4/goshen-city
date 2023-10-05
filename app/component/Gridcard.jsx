import Image from 'next/image'
import React from 'react'

const Gridcard = ({ title, text, images}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
    {/* <img src={imageUrl} alt={title} className="w-full h-48 object-cover" /> */}
    <div >
      <div className=" border-white w-full h-full m-0">
       <img
       src= {images}
       alt="images"
       />
       </div>
      <h2 className="text-xl font-semibold mb-2 text-center font-croissant p-4 pt-4">{title}</h2>
      <p className="text-gray-600 pt-6 mx-4 p-4">{text}</p>
    </div>
  </div>
  )
}

export default Gridcard
