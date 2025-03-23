// PackageCard.jsx
import React from 'react';

const PackageCard = ({ title, image, bgColor }) => {
  return (
    <div className="group relative h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl">
      {/* Image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
    />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${bgColor} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        
        {/* Hidden button that appears on hover */}
        <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="px-6 py-2 bg-white text-teal-600 rounded-full font-semibold text-sm hover:bg-teal-50 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;