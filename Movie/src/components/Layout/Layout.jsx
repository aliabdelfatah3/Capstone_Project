import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

/**
 * Layout component that serves as the primary structure for the application.
 * It wraps the Header and Footer components and uses the Outlet from 
 * react-router-dom to render the matched child routes. This component 
 * provides a consistent layout throughout the application, ensuring that 
 * the header and footer are displayed on every page while the main content 
 * changes based on the current route.
 */

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
