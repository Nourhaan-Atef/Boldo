import React from "react";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer";

const RootLayout = () => {
  return (
    <div className=" h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
