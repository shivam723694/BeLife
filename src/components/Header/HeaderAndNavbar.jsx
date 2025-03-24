import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./TopHeader";
import MobileMenu from "./MobileMenu";


const HeaderAndNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Navbar menuItems={menuItems} clinicLocations={clinicLocations} />
      <MobileMenu menuItems={menuItems} clinicLocations={clinicLocations} />
    </>
  );
};

export default HeaderAndNavbar;