import { useState } from "react";
import { FaHeartbeat, FaCalendarAlt, FaFlask } from "react-icons/fa";
import website1img from "../Pages/images/website1img.png"
import { Link } from "react-router-dom";

export default function HealthcareSection() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <div className="relative bg-gradient-to-br from-sky-50 to-purple-50 py-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-sky-600 rounded-full opacity-40 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-sky-100 rounded-xl transform rotate-3"></div>
              <img 
                src={website1img} 
                alt="Healthcare Services" 
                className="relative z-10 rounded-xl shadow-lg w-full object-cover h-96"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                  <span className="font-bold text-gray-800">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Trusted by 125K+ patients</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 z-10">
            <div className="inline-block px-4 py-1 bg-purple-100 rounded-full text-blue-700 font-medium text-sm mb-4">
              Premium Healthcare Services
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Personalized </span>
              <span className="text-blue-600">Healthcare</span>
              <span className="text-gray-800"> For Your Wellbeing</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Experience exceptional medical care with our team of specialists and 
              <span className="text-blue-600 font-medium"> cutting-edge diagnostics</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={toggleAppointmentForm}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-xl flex items-center"
              >
                <FaCalendarAlt className="mr-2" />
                Schedule Appointment
              </button>
              
              <Link to="/services" className="bg-white text-purple-600 border border-purple-200 hover:border-purple-400 rounded-lg px-8 py-3 font-medium transition-all duration-300">
                Our Services
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500">
                <div className="mb-3 bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FaHeartbeat className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Expert Care</h3>
                <p className="text-sm text-gray-600">Trained specialists available 24/7</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
                <div className="mb-3 bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FaFlask className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Advanced Labs</h3>
                <p className="text-sm text-gray-600">State-of-the-art diagnostic testing</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500">
                <div className="mb-3 bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Home Service</h3>
                <p className="text-sm text-gray-600">Doorstep care in 10+ cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn">
            {/* Close button */}
            <button 
              onClick={toggleAppointmentForm}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Form header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Book Your Appointment</h2>
              <p className="text-gray-600">We'll connect you with our healthcare experts</p>
            </div>

            {/* Form inputs */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 text-sm font-medium mb-1">Service Type</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a service</option>
                  <option value="checkup">General Checkup</option>
                  <option value="diagnostic">Diagnostic Tests</option>
                  <option value="consultation">Specialist Consultation</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300"
              >
                Confirm Appointment
              </button>

              <div className="text-center text-sm text-gray-500 flex items-center justify-center space-x-1">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <span>Your information is secure and encrypted</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}