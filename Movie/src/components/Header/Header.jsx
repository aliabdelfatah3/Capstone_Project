import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";

/**
 * Header component that serves as the top section of the application.
 * It features a transparent-to-solid scroll effect to integrate
 * seamlessly with full-bleed hero components.
 */

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex fixed w-full z-50 top-0 justify-evenly items-center pt-3 pb-5 transition-all duration-500 text-white ${
      isScrolled ? "bg-homebg/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
    }`}>
      <Logo />
      <SearchBar />
      <Navbar />
    </header>
  );
}

export default Header;
