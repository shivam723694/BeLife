// HealthPackages.jsx
import React from 'react';

// Import images (you'll need to add these to your assets folder)
import preMarriageImg from '../Pages/cards/preweeding.png';

import PackageCard from './cards/PackageCard';

const HealthPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Pre Marriage Health Checkup',
      image: preMarriageImg,
      bgColor: 'from-cyan-500 to-teal-500'
    },
    {
      id: 2,
      title: 'Women Health Checkup',
      image: preMarriageImg,
      bgColor: 'from-teal-400 to-cyan-500'
    },
    {
      id: 3,
      title: 'Full Body Checkup',
      image: preMarriageImg,
      bgColor: 'from-cyan-400 to-teal-500'
    },
    {
      id: 4,
      title: 'General Health Checkup',
      image: preMarriageImg,
      bgColor: 'from-teal-500 to-cyan-400'
    }
  ];

  return (
    <div className="relative w-full py-16 bg-gradient-to-r from-blue-900/90 to-purple-900/90 overflow-hidden">
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/20 blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full bg-teal-500/20 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <h2 className="text-cyan-400 text-xl font-medium mb-2">Packages</h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold">Popular Health Packages</h1>
        </div>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map(pkg => (
            <PackageCard 
              key={pkg.id}
              title={pkg.title}
              image={pkg.image}
              bgColor={pkg.bgColor}
            />
          ))}
        </div>
        
        {/* WhatsApp floating button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a 
            href="#" 
            className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;