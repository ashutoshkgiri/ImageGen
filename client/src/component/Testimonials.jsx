import React from 'react'
import { assets, testimonialsData } from '../assets/assets'



const Testimonials = () => {
  return (
    <div className="px-6 sm:px-12 py-12">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
        User Reviews
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-500 text-center mb-10">
        What our customers say
      </p>

      {/* Testimonials Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg border w-full max-w-sm mx-auto 
                       cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* User Image */}
            <div className="flex flex-col items-center">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="rounded-full w-16 h-16 shadow-md"
              />
              <h2 className="text-xl font-semibold mt-3 text-gray-900">{testimonial.name}</h2>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center mt-2">
              {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                <img 
                  key={starIndex} 
                  src={assets.rating_star} 
                  alt="star" 
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-center text-sm text-gray-600 mt-4">
              {testimonial.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonials;
