import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10">
      {/* Heading */}
      <h1 className="text-black text-3xl sm:text-4xl font-bold text-center bg-white px-8 py-3 rounded-full border border-neutral-500 transition-transform duration-300 hover:scale-105">
        How AI Magic Works
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-600 mt-4 mb-8 text-center">
        Transform Texts Into Stunning Images
      </p>

      {/* Steps Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-4xl">
        {stepsData.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-5 bg-white shadow-lg border border-gray-200 cursor-pointer hover:scale-[1.05] transition-transform duration-300 rounded-lg">
            <img width={50} src={item.icon} alt="" className="w-12 h-12"/>
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-orange-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
