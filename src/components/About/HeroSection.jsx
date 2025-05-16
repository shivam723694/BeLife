import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-96 bg-white">
      <img 
        src="/lab-image.jpg" 
        alt="One Plus Lab Diagnostics" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-10"></div>
      <div className="absolute top-8 left-0 right-0 text-center">
        <h1 className="text-3xl font-semibold">
          <span className="text-gray-800">Empowering Healthcare with </span>
          <span className="text-red-600 font-bold">Reliable</span>
          <span className="text-gray-800"> & </span>
          <span className="text-sky-500 font-bold">Quality-Driven Diagnostics</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          One Plus Lab: Your Trusted Partner in Health Across 10+ Cities
        </p>
      </div>
    </div>
  );
};

export default HeroSection;