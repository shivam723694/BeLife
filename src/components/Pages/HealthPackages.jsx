import { useState, useRef, useEffect } from "react";

const HealthPackages = () => {
  const [expandedPackages, setExpandedPackages] = useState({});
  const [activeTab, setActiveTab] = useState("all");
  const [isInView, setIsInView] = useState(false);
  const packagesRef = useRef(null);
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
      bestSeller: true,
      type: "comprehensive"
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
      bestSeller: false,
      type: "comprehensive"
    },
    {
      id: 3,
      title: "Annual Health Checkup-Advance with Free HsCRP",
      reportTime: "15 hours",
      parameters: 92,
      categories: ["Heart", "Diabetes", "Liver", "Kidney"],
      discountPercentage: 79,
      price: 1599,
      originalPrice: 7920,
      tests: ["Complete blood count", "Lipid profile", "Liver function tests", "Kidney function tests", "Blood glucose tests", "Free HsCRP test worth ₹700"],
      bestSeller: false,
      type: "annual"
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
      bestSeller: false,
      type: "advance"
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
      bestSeller: false,
      type: "premium"
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
      bestSeller: false,
      type: "specialized"
    },
  ];

  // Package type filters
  const packageTypes = [
    { id: "all", name: "All Packages" },
    { id: "comprehensive", name: "Comprehensive" },
    { id: "annual", name: "Annual" },
    { id: "advance", name: "Advanced" },
    { id: "premium", name: "Premium" },
    { id: "specialized", name: "Specialized" }
  ];

  const filteredPackages = activeTab === "all" 
    ? packages 
    : packages.filter(pkg => pkg.type === activeTab);

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
    if (currentIndex < filteredPackages.length - 3) {
      setCurrentIndex(currentIndex + 1);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 320,
        behavior: 'smooth'
      });
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (packagesRef.current) {
      observer.observe(packagesRef.current);
    }

    return () => {
      if (packagesRef.current) {
        observer.unobserve(packagesRef.current);
      }
    };
  }, []);

  // Set default expanded package (first one)
  useEffect(() => {
    if (filteredPackages.length > 0) {
      setExpandedPackages({ [filteredPackages[0].id]: true });
    }
  }, [activeTab]);

  return (
    <section className="py-20 px-4 bg-gradient-to-tr from-indigo-50 via-white to-purple-50" ref={packagesRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header with animated entrance */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-3">
            Health Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-indigo-600">Health Checkups</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our range of health packages tailored to your specific needs with 
            affordable pricing and comprehensive diagnostic coverage.
          </p>
        </div>

        {/* Package type filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {packageTypes.map(type => (
            <button
              key={type.id}
              onClick={() => {
                setActiveTab(type.id);
                setCurrentIndex(0);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === type.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Navigation and counter */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-600">
            Showing <span className="font-semibold">{filteredPackages.length}</span> packages
          </div>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                currentIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-indigo-100'
              }`}
              disabled={currentIndex === 0}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                currentIndex >= filteredPackages.length - 3 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-indigo-100'
              }`}
              disabled={currentIndex >= filteredPackages.length - 3}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Packages cards */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 pb-8"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`flex-shrink-0 w-80 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: `translateY(${isInView ? '0' : '20px'})`,
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Package header */}
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                  {pkg.bestSeller && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-bl-lg transform translate-x-1 -translate-y-1">
                      BEST SELLER
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center space-x-2 text-indigo-100">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Report in {pkg.reportTime}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-sm">{pkg.parameters} Parameters</span>
                    </div>
                  </div>
                </div>

                {/* Price section */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</span>
                        <span className="text-gray-500 line-through ml-2 text-sm">₹{pkg.originalPrice.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Limited period offer</div>
                    </div>
                    <div className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                      {pkg.discountPercentage}% OFF
                    </div>
                  </div>
                </div>

                {/* Categories */}
                {pkg.categories && (
                  <div className="px-6 py-4 border-b border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {pkg.categories.map((category, index) => (
                        <span key={index} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details section */}
                <div className="px-6 py-4">
                  <button 
                    onClick={() => togglePackageDetails(pkg.id)}
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium"
                  >
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Package Details
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedPackages[pkg.id] ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  <div className={`mt-4 transition-all duration-300 ${expandedPackages[pkg.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <ul className="space-y-3">
                      {pkg.tests.map((test, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action button */}
                <div className="px-6 py-4">
                  <button 
                    onClick={() => handleBookNow(pkg.id)}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our healthcare consultants to design a custom health checkup package
            tailored to your specific health needs and concerns.
          </p>
          <div className="inline-flex">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
              Contact a Health Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;