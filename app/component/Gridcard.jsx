import React from 'react'

const Gridcard = ({ title, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
    {/* <img src={imageUrl} alt={title} className="w-full h-48 object-cover" /> */}
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
  )
}

export default Gridcard
