import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 sm:px-12 py-10">
      
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Generate AI Images
      </h1>
      
      
      <p className="text-lg text-gray-500 mb-8">
        Bring Creative Vision to Life
      </p>
    
    
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        
        
        <img 
          src={assets.sample_img_2} 
          alt="AI Generated Image" 
          className="w-full sm:w-80 xl:w-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />


        <div className="text-left max-w-xl">
          <h2 className="text-3xl font-medium mb-4">
            Introducing the AI Website - Your Ultimate Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Effortlessly bring your ideas to life with our free AI image generator. Transform your text into stunning visuals in seconds. Imagine, describe, and see your vision come to life instantly.
          </p>
          <p className="text-gray-600">
            Type a text prompt, and our advanced AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even non-existent concepts come to life effortlessly. Unleash limitless creativity with our AI technology.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Description
