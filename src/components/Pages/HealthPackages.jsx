// components/HealthPackages.jsx
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
    },
    {
      id: 3,
      title: "Annual Health Checkup-Advance with Free HsCRP",
      reportTime: "15 hours",
      parameters: 92,
      description: "The Annual Health checkup Advance package covers 91 parameters of tests...",
      discountPercentage: 79,
      price: 1599,
      originalPrice: 7920,
    },
    {
      id: 4,
      title: "Advance with Free",
      reportTime: "15 hours",
      parameters: 90,
      categories: ["CBC", "ESR", "Iron Studies"],
      discountPercentage: 73,
      price: 2199,
      originalPrice: 8266,
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
    },
  ];

  const togglePackageDetails = (id) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBookNow = (packageId) => {
    // In a real application, this would redirect to a booking page or open a booking modal
    alert(`Booking package #${packageId}`);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (currentIndex < packages.length - 4) {
      setCurrentIndex(currentIndex + 1);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-stone-600">Top Health Packages</h2>
        <div className="flex gap-2">
          <button 
            onClick={scrollLeft}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-stone-600 hover:bg-gray-300'}`}
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentIndex >= packages.length - 4 ? 'bg-gray-200 text-gray-400' : 'bg-sky-400 text-white hover:bg-sky-500'}`}
            disabled={currentIndex >= packages.length - 4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {packages.map((pkg) => (
          <div key={pkg.id} className="flex-shrink-0 w-full max-w-xs border rounded-lg shadow-sm overflow-hidden bg-white">
            <div className="p-5 border-b">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-rose-500 pr-6">{pkg.title}</h3>
                <button 
                  onClick={() => togglePackageDetails(pkg.id)}
                  className="text-stone-400 hover:text-stone-600 transition-colors"
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
              
              <div className="flex text-stone-500 text-sm mb-4">
                <div className="flex items-center mr-4">
                  <span>Reports in</span>
                  <span className="font-semibold text-stone-600 ml-2">{pkg.reportTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="mx-2">|</span>
                  <span>Parameters</span>
                  <span className="font-semibold text-stone-600 ml-2">{pkg.parameters}</span>
                </div>
              </div>

              {pkg.description && (
                <p className="text-stone-600 mb-4">{pkg.description}</p>
              )}

              {/* Additional details shown only when expanded */}
              <div className={`transition-all duration-300 overflow-hidden ${expandedPackages[pkg.id] ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <div className="mt-2 text-stone-600">
                  <h4 className="font-semibold mb-2">What's included:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Complete blood count</li>
                    <li>Lipid profile</li>
                    <li>Liver function tests</li>
                    <li>Kidney function tests</li>
                    <li>Blood glucose tests</li>
                    {pkg.id === 1 || pkg.id === 3 ? <li>Free HsCRP test worth ₹700</li> : null}
                    {pkg.id === 2 ? <li>Free HbA1c test worth ₹500</li> : null}
                  </ul>
                </div>
              </div>

              {pkg.categories && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {pkg.categories.map((category, index) => (
                    <span key={index} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-5 bg-sky-50 flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-stone-800">₹{pkg.price}</span>
                  <span className="text-stone-500 line-through ml-2 text-sm">₹{pkg.originalPrice}</span>
                </div>
                <div className="text-sm text-stone-600">
                  <span className="font-medium">{pkg.discountPercentage}% off</span>
                  <br />
                  <span>for a limited period</span>
                </div>
              </div>
              <button 
                onClick={() => handleBookNow(pkg.id)}
                className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-600 transition-colors"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackages;