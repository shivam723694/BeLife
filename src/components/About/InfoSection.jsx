import React from 'react';
import { MapPin, Globe, CheckCircle, Home, Building, Gift, Activity, AlertCircle, Mail, Phone, Link } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About One Plus Lab</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              One Plus Lab (officially Fifty One Plus Diagnostics & Polyclinic) is a healthcare and diagnostic service provider. 
              Our mission is to empower the healthcare ecosystem with reliable, safe, affordable, and quality-driven diagnostic services.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Home className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">Home Sample Collection</h3>
              </div>
              <p className="text-gray-600">Get your tests done from the comfort of your home or workplace.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Building className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">Presence in 10+ Cities</h3>
              </div>
              <p className="text-gray-600">Services available across multiple locations nationwide.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Gift className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">Free Doorstep Services</h3>
              </div>
              <p className="text-gray-600">No extra charge for home visits and sample collection.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Activity className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">400+ Advanced Machines</h3>
              </div>
              <p className="text-gray-600">We use modern diagnostic equipment for accurate results.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <AlertCircle className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">Online Reports & SMS Alerts</h3>
              </div>
              <p className="text-gray-600">Fast online access to test reports with notification alerts.</p>
            </div>
          </div>
          
          {/* Tests & Packages */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-blue-800">Popular Tests & Packages</h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-medium text-blue-800 mb-4">Diagnostic Tests</h4>
                <ul className="space-y-3">
                  {['USG (Ultrasound)', 'Digital X-ray', 'PFT (Pulmonary Function Test)', 'EEG (Electroencephalography)'].map((test, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-medium text-blue-800 mb-4">Health Check-Up Packages</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Pre-Marital Health Check', price: '₹999' },
                    { name: "Women's Health Check", price: '₹899' },
                    { name: 'Full Body Check-Up', price: '₹2999' },
                    { name: 'Basic Health Check-Up', price: '₹499' }
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between items-start">
                      <div className="flex">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-medium text-blue-800">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
              <div className="w-16 h-1 bg-white mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Phone className="text-white mb-3" size={28} />
                <p className="font-medium mb-1">Toll-Free Number</p>
                <a href="tel:18001203877" className="text-blue-200 hover:text-white transition-colors">
                  1800-120-3877
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Mail className="text-white mb-3" size={28} />
                <p className="font-medium mb-1">Email</p>
                <a href="mailto:info@fiftyoneplus.com" className="text-blue-200 hover:text-white transition-colors">
                  info@fiftyoneplus.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Link className="text-white mb-3" size={28} />
                <p className="font-medium mb-1">Website</p>
                <a href="https://onepluslab.com" className="text-blue-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  onepluslab.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Country's Largest Medical Laboratory</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branches Section */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 text-green-500 flex items-center justify-center">
                  <MapPin size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-1">Branches</h3>
              <h4 className="text-xl font-medium text-green-600 mb-1">Nationwide</h4>
              <p className="text-green-500 font-medium mb-2">& growing</p>
              <p className="text-gray-500 text-sm">(Luzon, Visayas and Mindanao)</p>
            </div>
            
            {/* Participates Section */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 text-blue-600 flex items-center justify-center">
                  <Globe size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Participates</h3>
              <p className="mb-1">
                <span className="text-gray-600">in </span>
                <span className="text-green-500 font-medium">Local</span>
                <span className="text-gray-600"> & </span>
                <span className="text-blue-800 font-medium">International</span>
              </p>
              <p className="text-orange-500 font-medium">Proficiency Testing</p>
            </div>
            
            {/* Quality Section */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 text-green-500 flex items-center justify-center">
                  <CheckCircle size={40} strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-gray-600 mb-1">The quality of our results is</p>
              <p className="text-gray-600 mb-2">at par with</p>
              <p className="text-green-600 font-medium text-xl">International Standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InfoSection