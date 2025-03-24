import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-96 bg-white">
      <img 
        src="/lab-image.jpg" 
        alt="Medical Laboratory" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0  bg-opacity-10"></div>
      <div className="absolute top-8 left-0 right-0 text-center">
        <h1 className="text-3xl font-semibold">
          <span className="text-gray-800">State-of-the-Art </span>
          <span className="text-red-600 font-bold">Technology</span>
          <span className="text-gray-800"> in the </span>
          <span className="text-sky-500 font-bold">Main Laboratory</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;