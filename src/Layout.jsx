import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./components/Header/TopHeader";
import MainHeader from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
;

function Layout() {
  return (
    <>
      <MainHeader />
      {/* <TopHeader /> */}
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;