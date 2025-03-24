import React, { useState, useRef } from 'react';

const HealthPackages = () => {
  const [expandedPackages, setExpandedPackages] = useState({});
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const packages = [
    {
      id: 1,
      title: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
      reportTime: "15 hours",
      parameters: 92,
      categories: ["Heart", "Diabetes (Hba1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"],
      discountPercentage: 78,
      price: 1599,
      originalPrice: 7614,
      tests: ["Complete blood count", "Lipid profile", "Liver function tests", "Kidney function tests", "Blood glucose tests", "Free HsCRP test worth ₹700"],
      icon: "🩺"
    },
    {
      id: 2,
      title: "Fit India Full Body Checkup with Free HbA1c",
      reportTime: "15 hours",
      parameters: 89,
      categories: ["Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"],
      discountPercentage: 78,
      price: 1099,
      originalPrice: 5233,
      tests: ["Complete blood count", "Lipid profile", "Liver function tests", "Kidney function tests", "Blood glucose tests", "Free HbA1c test worth ₹500"],
      icon: "💉"
    },
    {
      id: 3,
      title: "Annual Health Checkup-Advance with Free HsCRP",
      reportTime: "15 hours",
      parameters: 92,
      discountPercentage: 79,
      price: 1599,
      originalPrice: 7920,
      tests: ["Complete blood count", "Lipid profile", "Liver function tests", "Kidney function tests", "Blood glucose tests", "Free HsCRP test worth ₹700"],
      icon: "🏥"
    },
    {
      id: 4,
      title: "Advance Health Package",
      reportTime: "15 hours",
      parameters: 90,
      categories: ["CBC", "ESR", "Iron Studies"],
      discountPercentage: 73,
      price: 2199,
      originalPrice: 8266,
      tests: ["Complete blood count", "Lipid profile", "Liver function tests", "Kidney function tests", "Blood glucose tests"],
      icon: "🩸"
    },
    {
      id: 5,
      title: "Premium Health Checkup",
      reportTime: "24 hours",
      parameters: 110,
      categories: ["Heart", "Diabetes", "Liver", "Kidney", "Thyroid", "Vitamin Panel"],
      discountPercentage: 75,
      price: 2599,
      originalPrice: 10399,
      tests: ["Complete blood count", "Lipid profile", "Liver function tests", "Kidney function tests", "Blood glucose tests", "Vitamin panel"],
      icon: "🌟"
    },
    {
      id: 6,
      title: "Women's Health Screening",
      reportTime: "24 hours",
      parameters: 88,
      categories: ["Hormones", "Bone Health", "Vitamin D", "Thyroid", "CBC"],
      discountPercentage: 70,
      price: 1899,
      originalPrice: 6330,
      tests: ["Complete blood count", "Hormone tests", "Bone health markers", "Vitamin D test", "Thyroid function tests"],
      icon: "👩"
    },
  ];

  const togglePackageDetails = (id) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBookNow = (packageId) => {
    alert(`Booking package #${packageId}`);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (currentIndex < packages.length - 4) {
      setCurrentIndex(currentIndex + 1);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Top Health Packages</h2>
          <p className="text-gray-600">Comprehensive health checkups at affordable prices</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={scrollLeft}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 shadow-sm'}`}
            disabled={currentIndex === 0}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentIndex >= packages.length - 4 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 shadow-sm'}`}
            disabled={currentIndex >= packages.length - 4}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-8"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="flex-shrink-0 w-80 border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="p-6 border-b">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl mb-3">
                    {pkg.icon}
                  </div>
                  <button 
                    onClick={() => togglePackageDetails(pkg.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={expandedPackages[pkg.id] ? "Collapse details" : "Expand details"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className={`w-6 h-6 transition-transform ${expandedPackages[pkg.id] ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{pkg.title}</h3>
                
                <div className="flex text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reports in</span>
                    <span className="font-semibold text-gray-600 ml-1">{pkg.reportTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Parameters</span>
                    <span className="font-semibold text-gray-600 ml-1">{pkg.parameters}</span>
                  </div>
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${expandedPackages[pkg.id] ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="mt-2 text-gray-600">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.tests.map((test, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {pkg.categories && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {pkg.categories.map((category, index) => (
                      <span key={index} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {category}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 bg-gray-50 flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through ml-2 text-sm">₹{pkg.originalPrice.toLocaleString()}</span>
                    <span className="ml-2 text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                      {pkg.discountPercentage}% OFF
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Limited period offer
                  </div>
                </div>
                <button 
                  onClick={() => handleBookNow(pkg.id)}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;