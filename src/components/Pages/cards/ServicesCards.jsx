import React from 'react';
import { FaStethoscope, FaHome, FaVirus, FaUserMd } from 'react-icons/fa';
import { BsCardChecklist, BsShieldCheck } from 'react-icons/bs';
import { GiMedicalPack } from 'react-icons/gi';

function ServicesCards() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">BeLife</span>{' '}
              <span className="text-gray-800">Healthcare for all!</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As one of the country's <span className="font-semibold text-blue-600">largest medical laboratories</span>, we
              pride ourselves in offering the widest array of services from
              routine <span className="font-semibold text-blue-600">laboratory tests, imaging, and multi-specialty
              doctors' clinics</span>. We keep abreast of the latest technology to
              provide and perform the most advanced laboratory tests.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Learn More
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthcare professionals working" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-600/20"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-6 w-5/6 max-w-md">
              <div className="grid grid-cols-3 gap-4">
                <StatItem number="200+" label="Doctors" icon={<FaUserMd className="text-blue-600" />} />
                <StatItem number="50+" label="Clinics" icon={<GiMedicalPack className="text-blue-600" />} />
                <StatItem number="100%" label="Accredited" icon={<BsShieldCheck className="text-blue-600" />} />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<FaStethoscope className="w-8 h-8" />} 
              title="Find A Doctor"
              description="Book appointments with top specialists in your area"
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
            <ServiceCard 
              icon={<BsCardChecklist className="w-8 h-8" />} 
              title="HMO Approval"
              description="Fast-track your health insurance approvals"
              bgColor="bg-teal-100"
              iconColor="text-teal-600"
            />
            <ServiceCard 
              icon={<FaHome className="w-8 h-8" />} 
              title="Home Service"
              description="Professional medical care in the comfort of your home"
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
            <ServiceCard 
              icon={<FaVirus className="w-8 h-8" />} 
              title="COVID-19 Test"
              description="RT-PCR and rapid antigen testing with quick results"
              bgColor="bg-teal-100"
              iconColor="text-teal-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, bgColor, iconColor }) {
  return (
    <div className={`${bgColor} p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 h-full flex flex-col`}>
      <div className={`w-16 h-16 ${bgColor.replace('100', '200')} rounded-full flex items-center justify-center mb-6`}>
        <span className={`${iconColor} text-2xl`}>{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center mt-auto">
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

function StatItem({ number, label, icon }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-2xl mb-2">
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900">{number}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default ServicesCards;