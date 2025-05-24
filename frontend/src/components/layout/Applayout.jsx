import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Applayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/book"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navber />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default Applayout;
