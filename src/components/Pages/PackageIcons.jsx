import { useState, useRef } from 'react';

// Icons for each package types
const PackageIcons = {
  FullBody: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-3.866 0-7 1.79-7 4v2h14v-2c0-2.21-3.134-4-7-4z" />
    </svg>
  ),
  Fever: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Diabetes: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Vitamin: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Thyroid: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

// Package data
const packageData = [
  { id: 1, type: 'FullBody', name: 'Full Body', description: 'Complete health assessment' },
  { id: 2, type: 'Fever', name: 'Fever', description: 'Fever and infection checkup' },
  { id: 3, type: 'Heart', name: 'Heart', description: 'Cardiac health assessment' },
  { id: 4, type: 'Diabetes', name: 'Diabetes', description: 'Blood sugar monitoring' },
  { id: 5, type: 'Vitamin', name: 'Vitamin', description: 'Vitamin deficiency test' },
  { id: 6, type: 'Thyroid', name: 'Thyroid', description: 'Thyroid function test' },
  { id: 7, type: 'FullBody', name: 'Advanced Full Body', description: 'Comprehensive assessment' },
  { id: 8, type: 'Heart', name: 'Heart Pro', description: 'Advanced cardiac screening' },
];

export default function HealthCheckupCarousel() {
  const [activeType, setActiveType] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef(null);

  // Get unique package types for tabs
  const packageTypes = ['All', ...new Set(packageData.map((pkg) => pkg.type))];

  // Filter packages based on active type
  const filteredPackages =
    activeType === 'All'
      ? packageData
      : packageData.filter((pkg) => pkg.type === activeType);

  // Calculate total pages
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);

  // Handle tab click
  const handleTabClick = (type) => {
    setActiveType(type);
    setCurrentPage(0); // Reset to first page when changing tabs
  };

  // Navigate to next/previous page
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get current page items
  const currentPackages = filteredPackages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Doctors Curated Health Checkup Packages</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevPage}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-blue-900 hover:bg-gray-300"
            disabled={totalPages <= 1}
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={goToNextPage}
            className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800"
            disabled={totalPages <= 1}
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Package Type Tabs */}
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {packageTypes.map((type) => {
          const Icon = type !== 'All' ? PackageIcons[type] : null;
          return (
            <button
              key={type}
              onClick={() => handleTabClick(type)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full min-w-max transition-all ${
                activeType === type
                  ? 'bg-blue-50 text-blue-900 shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {Icon && (
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeType === type ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <Icon />
                </div>
              )}
              <span className="font-medium">{type === 'FullBody' ? 'Full Body' : type}</span>
            </button>
          );
        })}
      </div>

      {/* Package Cards */}
      <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentPackages.map((pkg) => {
          const Icon = PackageIcons[pkg.type];
          return (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 mr-4">
                  {Icon && <Icon />}
                </div>
                <div>
                  <h3 className="font-medium text-blue-900">{pkg.name}</h3>
                  <p className="text-sm text-gray-500">{pkg.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                  View Details
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full ${
                currentPage === index ? 'bg-blue-900' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}