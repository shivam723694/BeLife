import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = ({ menuItems, clinicLocations }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

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

  return (
    <nav className="border-t border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between h-16 items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;