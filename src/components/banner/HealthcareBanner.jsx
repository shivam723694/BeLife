import React from 'react';
import Banner from "../banner/Banner.png"

const HealthcareBanner = () => {
  const serviceButtons = [
    {
      id: 1,
      title: "Online Results",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      bgColor: "bg-blue-900",
    },
    {
      id: 2,
      title: "Featured Tests",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      bgColor: "bg-rose-500",
    },
    {
      id: 3,
      title: "Home Service",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      bgColor: "bg-teal-500",
    },
    {
      id: 4,
      title: "Find a Doctor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6" />
        </svg>
      ),
      bgColor: "bg-emerald-500",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Banner Image */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img 
          src={Banner} // Replace with your actual image path
          alt="Healthcare professionals" 
          className="w-full h-full object-cover"
        />
        
        {/* Anniversary Badge - Absolute positioned */}
        <div className="absolute top-10 right-10 md:right-20 w-48 h-48">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="text-blue-800 tracking-widest text-xs font-semibold rotate-[30deg] mb-1">CELEBRATING</div>
              <div className="text-5xl font-bold text-teal-400 leading-none mb-1">13</div>
              <div className="text-blue-800 italic text-2xl font-semibold leading-tight mb-1">years</div>
              <div className="text-center">
                <span className="text-teal-400 text-sm font-semibold">of Quality </span>
                <span className="text-blue-800 text-sm font-semibold">Healthcare!</span>
              </div>
            </div>
            
            {/* SVG Circle border */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-[-15deg]">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="1,3" />
              <circle cx="50" cy="50" r="44" fill="none" stroke="#1e3a8a" strokeWidth="1" />
            </svg>
            
            {/* Star decorations */}
            <div className="absolute top-0 left-[10%] text-blue-800 text-lg">★</div>
            <div className="absolute bottom-5 right-[15%] text-blue-800 text-lg">★</div>
          </div>
        </div>
      </div>
      
      {/* Service Buttons */}
      <div className="flex flex-wrap justify-center mx-auto -mt-12 px-4 max-w-5xl relative z-10">
        {serviceButtons.map((button) => (
          <div key={button.id} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <button 
              className={`${button.bgColor} text-white w-full py-4 px-4 rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md`}
            >
              <div className="mr-2">
                {button.icon}
              </div>
              <div className="text-left">
                <span className="block font-semibold text-lg leading-tight">{button.title}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareBanner;