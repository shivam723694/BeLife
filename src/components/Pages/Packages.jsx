import React from 'react';
import { motion } from 'framer-motion';

const HealthPackageCard = ({ title, price, originalPrice, discount, reportTime, parameters, categories = [], description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
    >
      {/* Header with dropdown */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-red-600 pr-2">{title}</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Reports and parameters info */}
      <div className="px-4 py-3 bg-gray-50 text-sm text-gray-500 flex items-center">
        <div>Reports in <span className="font-semibold text-gray-700">{reportTime}</span></div>
        <div className="mx-2">|</div>
        <div>Parameters <span className="font-semibold text-gray-700">{parameters}</span></div>
      </div>
      
      {/* Categories */}
      {categories.length > 0 && (
        <div className="p-4 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span key={index} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {category}
            </span>
          ))}
        </div>
      )}
      
      {/* Description - optional */}
      {description && (
        <div className="px-4 pb-4 text-gray-700">
          {description}
        </div>
      )}
      
      {/* Pricing and CTA */}
      <div className="mt-auto p-4 flex items-center justify-between">
        <div>
          <div className="flex items-end">
            <span className="text-2xl font-bold text-gray-800">₹{price}</span>
            <span className="text-gray-500 line-through ml-2 text-sm">₹{originalPrice}</span>
          </div>
          <div className="text-xs text-gray-600">
            <span className="text-red-500 font-medium">{discount}% off</span> for a limited period
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300">
          Book
        </button>
      </div>
    </motion.div>
  );
};

const TopHealthPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
      price: "1599",
      originalPrice: "7614",
      discount: "78",
      reportTime: "15 hours",
      parameters: "92",
      categories: ["Heart", "Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"]
    },
    {
      id: 2,
      title: "Fit India Full Body Checkup with Free HbA1c",
      price: "1099",
      originalPrice: "5233",
      discount: "78",
      reportTime: "15 hours",
      parameters: "89",
      categories: ["Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"]
    },
    {
      id: 3,
      title: "Annual Health Checkup-Advance with Free HsCRP",
      price: "1599",
      originalPrice: "7920",
      discount: "79",
      reportTime: "15 hours",
      parameters: "92",
      description: "The Annual Health checkup Advance package covers 91 parameters of tests..."
    },
    {
      id: 4,
      title: "Advanced Full Body Checkup with Free HbA1c",
      price: "2199",
      originalPrice: "8260",
      discount: "73",
      reportTime: "15 hours",
      parameters: "96",
      categories: ["CBC, ESR", "Iron Studies"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="relative w-full py-12 bg-sky-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan-100/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-100/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Top Health Packages</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Packages grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {packages.map((pkg, index) => (
            <HealthPackageCard 
              key={pkg.id}
              {...pkg}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="#all-packages"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Health Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
        
        {/* Floating contact button */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a 
            href="#contact"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-cyan-600 rounded-full shadow-lg p-3 transition-all duration-300 border border-cyan-100"
            aria-label="Contact us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="font-medium hidden md:block">Chat Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TopHealthPackages;