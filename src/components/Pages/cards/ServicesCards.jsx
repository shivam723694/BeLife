import React from 'react';
import { FaStethoscope, FaHome, FaVirus } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import servicesBanner from "../cards/services.png"

function ServicesCards() {
  return (
    <div className="container mx-auto px-4 py-8 bg-sky-50">
  {/* Header Section */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Text Content */}
    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
        <span className="text-sky-500">BeLIfe</span> <br />
        <span className="text-blue-900">Healthcare</span> <br />
        <span className="text-blue-900">for all!</span>
      </h1>
      
      <p className="mb-4 text-gray-700 text-lg">
        As one of the <span className="text-blue-900 font-medium">country's largest medical laboratories</span>, we
        pride ourselves in offering the widest array of services from
        routine <span className="text-blue-900 font-medium">laboratory tests, imaging, and multi-specialty
        doctors' clinics</span>. We keep abreast of the latest technology to
        provide and perform the most advanced laboratory tests.
      </p>
    </div>
    
    {/* Image Content */}
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-4 bg-sky-100 rounded-3xl transform rotate-6 z-0"></div>
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={servicesBanner} 
            alt="Healthcare Professional" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Services Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
    <ServiceCard 
      icon={<FaStethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-white" />} 
      title="Find A Doctor"
      bgColor="bg-teal-500"
    />
    <ServiceCard 
      icon={<BsCardChecklist className="w-10 h-10 sm:w-12 sm:h-12 text-white" />} 
      title="HMO Approval"
      bgColor="bg-blue-500"
    />
    <ServiceCard 
      icon={<FaHome className="w-10 h-10 sm:w-12 sm:h-12 text-white" />} 
      title="Home Service"
      bgColor="bg-teal-500"
    />
    <ServiceCard 
      icon={<FaVirus className="w-10 h-10 sm:w-12 sm:h-12 text-white" />} 
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