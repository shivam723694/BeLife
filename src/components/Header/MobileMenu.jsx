import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

const MobileMenu = ({ menuItems, clinicLocations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-300"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <Menu className="block h-6 w-6" aria-hidden="true" />
      </button>

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
    </div>
  );
};

export default MobileMenu;