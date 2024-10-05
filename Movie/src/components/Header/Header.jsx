import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";

/**
 * Header component that serves as the top section of the application.
 * It contains the application logo, search bar, and navigation links.
 */

function Header() {
  return (
    <div className="flex justify-evenly items-center pt-3 pb-5 bg-homebg text-white">
      <Logo />
      <SearchBar />
      <Navbar />
    </div>
  );
}

export default Header;
