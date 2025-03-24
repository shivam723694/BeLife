import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, ChevronDown, ChevronUp, Menu } from "lucide-react";
import logo from "../Header/logo.png"

const HeaderAndNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  
  // Locations for dropdown - updated with proper router paths
  const clinicLocations = [
    { name: "Delhi", link: "/our-clinics/delhi" },
    { name: "Noida", link: "/our-clinics/noida" },
    { name: " Ghaziabad", link: "/our-clinics/ghaziabad" },
    { name: "Agra", link: "/our-clinics/agra" },
    { name: "Faridabad", link: "/our-clinics/faridabad" },
    { name: "Haryana", link: "/our-clinics/haryana" },
    { name: "Gurugram", link: "/our-clinics/gurugram" },

  ];
  
  // Main menu items - updated with proper router paths
  const menuItems = [
    { title: "Home", link: "/", hasDropdown: false },
    { title: "About Us", link: "/about", hasDropdown: false },
    { title: "Our Clinics", link: "/our-clinics", hasDropdown: true },
    { title: "Packages", link: "/packages", hasDropdown: false },
    { title: "Our Services", link: "/services", hasDropdown: false },
    { title: "Contact Us", link: "/contact", hasDropdown: false }
];

  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Header with Logo and Contact Info */}
      <div className="bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/">
                {/* If you have the logo as an image */}
                <img src={logo} alt="BeLife Logo" className="h-20" />
                
             
              </Link>
              {/* <p className="text-gray-700 mt-1">caring for your furry family</p> */}
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
      
      {/* Navigation Bar */}
      <nav className="border-t border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between h-16 items-center">
            {/* Empty div for spacing on desktop */}
            <div className="hidden md:block"></div>
            
            {/* Desktop Menu - Centered */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                    {item.hasDropdown ? (
                      <div 
                        className={`flex items-center px-2 py-2 text-base text-2xl font-medium cursor-pointer transition duration-200 ${
                          location.pathname.includes(item.link) 
                            ? "text-pink-500" 
                            : "text-gray-800 hover:text-pink-500"
                        }`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <span>{item.title}</span>
                        <span className="ml-1">
                          {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </span>
                      </div>
                    ) : (
                      <NavLink
                        to={item.link}
                        className={({ isActive }) => 
                          `px-2 py-2 text-base font-medium transition duration-200 text-md ${
                            isActive 
                              ? "text-pink-500" 
                              : index === 0 ? "text-blue-500 hover:text-blue-600" : "text-gray-800 hover:text-pink-500"
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    )}
                    
                    {/* Desktop Dropdown */}
                    {item.hasDropdown && dropdownOpen && (
                      <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {clinicLocations.map((location, locIndex) => (
                            <Link
                              key={locIndex}
                              to={location.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-500 transition duration-150"
                              role="menuitem"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {location.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button - centered when mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-300"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Empty div for spacing on desktop */}
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div 
                      className={`flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
                        location.pathname.includes(item.link) 
                          ? "text-pink-500 bg-pink-50" 
                          : "text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                      }`}
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    >
                      <span>{item.title}</span>
                      <span>
                        {mobileDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </div>
                  ) : (
                    <NavLink
                      to={item.link}
                      className={({ isActive }) => 
                        `block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
                          isActive 
                            ? index === 0 ? "text-blue-500 bg-blue-50" : "text-pink-500 bg-pink-50" 
                            : "text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && mobileDropdownOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-md ml-2 mr-2 mt-1 mb-1">
                      {clinicLocations.map((location, locIndex) => (
                        <Link
                          key={locIndex}
                          to={location.link}
                          className={`block px-3 py-2 rounded-md text-sm transition duration-150 ${
                            location.pathname === location.link
                              ? "text-pink-500 bg-pink-100"
                              : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
                          }`}
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default HeaderAndNavbar;