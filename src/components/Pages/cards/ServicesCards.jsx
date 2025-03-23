import React from 'react';
import { FaStethoscope, FaHome, FaVirus } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';

function ServicesCards() {
  return (
    <div className="container mx-auto px-4 py-8 bg-sky-50 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-teal-500">Hi-Quality</span> <br />
            <span className="text-blue-900">Healthcare</span> <br />
            <span className="text-blue-900">for all!</span>
          </h1>
          
          <p className="mb-4">
            As one of the <span className="text-blue-900 font-medium">country's largest medical laboratories</span>, we
            pride ourselves in offering the widest array of services from
            routine <span className="text-blue-900 font-medium">laboratory tests, imaging, and multi-specialty
            doctors' clinics</span>. We keep abreast of the latest technology to
            provide and perform the most advanced laboratory tests.
          </p>
        </div>
        
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-diamond p-4">
            <img 
              src="https://onepluslab.com/wp-content/uploads/2024/10/collection.png" 
              alt="Healthcare Professional" 
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <ServiceCard 
          icon={<FaStethoscope className="w-12 h-12 text-white" />} 
          title="Find A Doctor"
          bgColor="bg-teal-500"
        />
        <ServiceCard 
          icon={<BsCardChecklist className="w-12 h-12 text-white" />} 
          title="HMO Approval"
          bgColor="bg-blue-500"
        />
        <ServiceCard 
          icon={<FaHome className="w-12 h-12 text-white" />} 
          title="Home Service"
          bgColor="bg-teal-500"
        />
        <ServiceCard 
          icon={<FaVirus className="w-12 h-12 text-white" />} 
          title="COVID-19 Test"
          bgColor="bg-blue-900"
        />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, bgColor }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`${bgColor} rounded-full p-6 flex items-center justify-center mb-2`}>
        {icon}
      </div>
      <p className="text-center font-medium text-blue-900">{title}</p>
    </div>
  );
}

export default ServicesCards;