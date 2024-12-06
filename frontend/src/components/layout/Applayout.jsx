import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Applayout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;
