import { useState } from "react";
import { FaHome, FaCity, FaTruck } from "react-icons/fa";
import banner from "../Pages/ourClinics/banner_bg.jpg";

export default function HealthcareSection() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <div className="relative bg-sky-50 flex items-center justify-center py-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 text-sky-300 text-4xl">★</div>
      <div className="absolute top-48 left-8 text-sky-300 text-2xl">★</div>
      <div className="absolute bottom-24 right-48 text-sky-300 text-xl">★</div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-rose-200 opacity-40"></div>
      <div className="absolute top-20 -right-20 w-60 h-60 rounded-full bg-rose-200 opacity-30"></div>

      <div className="container mx-15  ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-stone-600">We Are Ready to Help, </span>
              <span className="text-sky-400">BeLife Health Problems</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 mb-8">
              Avail the best BeLife healthcare and top-quality{" "}
              <span className="text-sky-400 font-medium">diagnostic services.</span>
            </p>
            
            <button 
              onClick={toggleAppointmentForm}
              className="bg-stone-600 hover:bg-stone-700 text-white rounded-full px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-xl mb-12"
            >
              Book Appointment
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                  <FaHome className="text-stone-600 text-2xl" />
                </div>
                <p className="font-medium text-sky-400">Home Collection</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                  <FaCity className="text-stone-600 text-2xl" />
                </div>
                <p className="font-medium text-sky-400">Located in 10+ Cities</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                  <FaTruck className="text-stone-600 text-2xl" />
                </div>
                <p className="font-medium text-sky-400">Free Door-Step Service</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Healthcare Info */}
          <div className="md:w-1/2 relative">
            <img 
              src={banner} 
              alt="Healthcare Banner" 
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto md:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Accessibility button */}
      {/* <button 
        aria-label="Accessibility options" 
        className="fixed bottom-6 right-6 bg-rose-500 text-white p-3 rounded-full shadow-lg hover:bg-rose-600 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      </button> */}

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
            {/* Close button */}
            <button 
              onClick={toggleAppointmentForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Form content */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Looking for Advanced, Human-Grade Care Health Care BeLife</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Fullname" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gray-800 text-white py-3 rounded-md font-medium flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Book Appointment</span>
              </button>

              <div className="text-center text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">4.9</span>
                  <span className="mx-2">in</span>
                  <span className="text-blue-600">G</span>
                  <span className="ml-2">Ratings | 125K+ Happy BeLIfe </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}