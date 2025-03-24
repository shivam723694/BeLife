import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import logo from "../Header/logo.png";

const Header = () => {
  return (
    <div className="bg-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img src={logo} alt="BeLife Logo" className="h-20" />
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm mt-3 md:mt-0">
            <div className="flex items-center text-gray-700">
              <Phone size={16} className="text-pink-500 mr-2" />
              <span>+91 723694 1347</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Mail size={16} className="text-pink-500 mr-2" />
              <span>belife@gmail.com</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Clock size={16} className="text-pink-500 mr-2" />
              <span>Open: 8AM - 8PM</span>
            </div>
          </div>
          
          {/* Book Appointment Button */}
          <div className="mt-3 md:mt-0">
            <Link 
              to="/appointment" 
              className="bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700 transition duration-300 font-medium"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;