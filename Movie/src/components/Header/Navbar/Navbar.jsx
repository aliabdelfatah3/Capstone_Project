import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Navbar component that provides navigation links for the application.
 * It supports both mobile and desktop layouts, with a toggleable mobile menu.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "TV Shows", path: "/tvshows" },
  ];

  return (
    <nav className="relative">
      <div className="flex items-center">
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8 md:gap-12 font-Inter tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm md:text-base font-semibold transition-all duration-300 relative py-1 hover:text-primary ${
                    isActive ? "text-primary border-b-2 border-primary" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-50 sm:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeMenu}></div>
          
          {/* Menu Content */}
          <div 
            className={`absolute inset-y-0 right-0 w-[70%] bg-gradient-to-br from-homebg/95 to-black/95 shadow-2xl border-l border-white/5 flex flex-col pt-24 px-8 transition-transform duration-500 ease-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <li 
                  key={link.name}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                >
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-2xl font-bold font-Inter transition-colors flex items-center gap-3 ${
                        isActive ? "text-primary" : "text-gray-300"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && <div className="w-1.5 h-8 bg-primary rounded-full animate-pulse-slow"></div>}
                        {link.name}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-auto mb-10 text-gray-500 text-sm">
              <p>© 2026 Movie Database</p>
              <p className="mt-1">Experience Excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
