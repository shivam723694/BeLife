import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, ChevronDown, ChevronUp, Menu } from "lucide-react";
import logo from "../Header/logo.png"; // Make sure this path is correct

const HeaderAndNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  
  const clinicLocations = [
    { name: "Delhi", link: "/our-clinics/delhi" },
    { name: "Noida", link: "/our-clinics/noida" },
    { name: "Ghaziabad", link: "/our-clinics/ghaziabad" },
    { name: "Agra", link: "/our-clinics/agra" },
    { name: "Faridabad", link: "/our-clinics/faridabad" },
    { name: "Haryana", link: "/our-clinics/haryana" },
    { name: "Gurugram", link: "/our-clinics/gurugram" },
  ];
  
  const menuItems = [
    { title: "HOME", link: "/", hasDropdown: false },
    { title: "ABOUT US", link: "/about", hasDropdown: false },
    { title: "LOCATION", link: "/our-clinics", hasDropdown: true },
    { title: "PACKAGES", link: "/packages", hasDropdown: false },
    { title: "OUR SERVICES", link: "/services", hasDropdown: false },
    { title: "GALLERY", link: "/gallery", hasDropdown: false },

    { title: "CONTACT US", link: "/contact", hasDropdown: false }
  ];

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

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>+91 723694 1347</span>
            </div>
            
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>belife@gmail.com</span>
            </div>
            
            <div className="flex items-center">
              <Clock size={14} className="mr-2" />
              <span>Open: 8AM - 8PM</span>
            </div>
          </div>
          
          {/* Social Links or Additional Info */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="#" className="hover:text-blue-200 transition">FAQ</Link>
            <Link to="#" className="hover:text-blue-200 transition">Help Center</Link>
          </div>
        </div>
      </div>
      
      {/* Main Header with Logo and Navigation */}
      <div className="bg-white py-3 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="BeLife Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150x60?text=BeLife+Logo";
              }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                {item.hasDropdown ? (
                  <div 
                    className={`flex items-center py-2 text-base font-medium cursor-pointer transition ${
                      location.pathname.includes(item.link) 
                        ? "text-blue-600" 
                        : "text-gray-700 hover:text-blue-600"
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
                      `py-2 text-base font-medium transition ${
                        isActive 
                          ? "text-blue-600 border-b-2 border-blue-600" 
                          : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
                
                {item.hasDropdown && dropdownOpen && (
                  <div className="absolute z-20 left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 py-1">
                    {clinicLocations.map((location, locIndex) => (
                      <Link
                        key={locIndex}
                        to={location.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Appointment Button */}
          <div className="hidden md:block">
            <Link 
              to="/appointment" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div 
                    className={`flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname.includes(item.link) 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
                
                {item.hasDropdown && mobileDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {clinicLocations.map((location, locIndex) => (
                      <Link
                        key={locIndex}
                        to={location.link}
                        className={`block px-3 py-2 rounded-md text-sm ${
                          location.pathname === location.link
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-2">
              <Link 
                to="/appointment" 
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-full hover:from-blue-700 hover:to-blue-900 transition font-medium"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAndNavbar;