import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  
  // Locations for dropdown - updated with proper router paths
  const clinicLocations = [
    { name: "Delhi", link: "/our-clinics/delhi" },
    { name: "Agra", link: "/our-clinics/agra" },
    { name: "Faridabad", link: "/our-clinics/faridabad" },
    { name: "Haryana", link: "/our-clinics/haryana" }
  ];
  
  // Main menu items - updated with proper router paths
  const menuItems = [
    { title: "HOME", link: "/", hasDropdown: false },
    { title: "Our Clinics", link: "/our-clinics", hasDropdown: true },
    { title: "Our Services", link: "/services", hasDropdown: false },
    { title: "About Us", link: "/about", hasDropdown: false },
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
    <nav className="relative bg-gradient-to-r from-white to-pink-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <Link to="/">
              <img src={logo} alt="Logo" className="w-50 h-20" />
            </Link> */}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                  {item.hasDropdown ? (
                    <div 
                      className={`flex items-center px-2 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-200 ${
                        location.pathname.includes(item.link) 
                          ? "text-blue-500" 
                          : "text-gray-800 hover:text-blue-500"
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
                        `px-2 py-2 rounded-md text-sm font-medium transition duration-200 ${
                          isActive 
                            ? "text-blue-500" 
                            : "text-gray-800 hover:text-blue-500"
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
          
          {/* Mobile menu button */}
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
                        ? "text-pink-500 bg-blue-50" 
                        : "text-gray-800 hover:bg-blue-50 hover:text-blue-500"
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
                          ? "text-pink-500 bg-pink-50" 
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
  );
}