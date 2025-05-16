import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./src/Layout";

// Page components
import Home from "./src/components/Pages/Home";
import About from "./src/components/Pages/About";
import Contact from "./src/components/Pages/Contact";
import Services from "./src/components/Pages/Services";
import Packages from "./src/components/Pages/Packages";

// Clinic location pages - assuming these will be created later


// Error page
import NotFound from "./src/components/Pages/NotFound";
import DelhiClinic from "./src/components/Pages/ourClinics/DelhiClinic";
import AgraClinic from "./src/components/Pages/ourClinics/AgraClinic";
import FaridabadClinic from "./src/components/Pages/ourClinics/FaridabadClinic";
import HaryanaClinic from "./src/components/Pages/ourClinics/HaryanaClinic";
import Ghaziyabad from "./src/components/Pages/ourClinics/Ghaziyabad";
import Gallery from "./src/components/Pages/Gallery";
import OurClinics from "./src/components/Pages/OurClinics";

/**
 * Application router configuration
 * Implements nested routing with React Router v6
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "packages",
        element: <Packages />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "our-clinics",
        element: <OurClinics/>
      },

      {
        path: "services",
        element: <Services />,
      },
      // Our Clinics section with nested routes for each location
      // {
      //   path: "our-clinics",
      //   children: [
      //     {
      //       index: true,
      //       element: <OurClinics />
      //     },
      //     {
      //       path: "delhi",
      //       element: <DelhiClinic />
      //     },
      //     {
      //       path: "agra",
      //       element: <AgraClinic />
      //     },
      //     {
      //       path: "faridabad",
      //       element: <FaridabadClinic />
      //     },
      //     {
      //       path: "gazhaiybad",
      //       element: <Ghaziyabad/>
      //     },
      //     {
      //       path: "haryana",
      //       element: <HaryanaClinic />
      //     }
      //   ]
      // },
      // Handle legacy URL (with typo) by redirecting to the correct path
      // {
      //   path: "ourclicnics",
      //   element: <Navigate to="/our-clinics" replace />
      // },
      // Catch all unmatched routes
      {
        path: "*",
        element: <NotFound />
      },
      
    ],
  },
]);

export default router;