import React from 'react';
import { MapPin } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Country's Largest Medical Laboratory</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branches Section */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-green-500">Branches</h3>
            <h4 className="text-xl font-medium text-green-500">Nationwide</h4>
            <p className="text-green-500 font-medium">& growing</p>
            <p className="text-gray-600 text-sm mt-2">(Luzon, Visayas and Mindanao)</p>
            
            <div className="flex justify-center mt-4">
              <div className="w-24 h-24">
                <img src="/map-pins.png" alt="Map Locations" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          {/* Participates Section */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-orange-500">Participates</h3>
            <p className="mt-1">
              <span className="text-gray-600">in </span>
              <span className="text-green-500">Local</span>
              <span className="text-gray-600"> & </span>
              <span className="text-blue-800 font-medium">International</span>
            </p>
            <p className="text-orange-500">Proficiency Testing</p>
            
            <div className="flex justify-center mt-4">
              <div className="w-16 h-16">
                <img src="/lab-icon.png" alt="Laboratory" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          {/* Quality Section */}
          <div className="text-center">
            <p className="text-gray-600">The quality of our results is</p>
            <p className="text-gray-600">at par with</p>
            <p className="text-green-500 font-medium">International Standards</p>
            
            <div className="flex justify-center mt-4">
              <div className="w-16 h-16">
                <img src="/quality-icon.png" alt="Quality Standards" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;