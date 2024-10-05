import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Navbar component that provides navigation links for the application.
 * It supports both mobile and desktop layouts, with a toggleable mobile menu.
 */
function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggles mobile menu visibility
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" // Hamburger icon
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && ( // Renders the mobile menu if isOpen is true
        <div className="sm:hidden mt-2">
          <ul className="space-y-4 font-semibold font-Inter">
            {/* Navigation Links */}
            <li>
              <NavLink
                to={"/"} // Home link
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white py-1 border-b-2 border-white"
                      : "text-sky-500 hover:text-sky-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"movies"} // Movies link
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white py-1 border-b-2 border-white"
                      : "text-sky-500 hover:text-sky-600"
                  }`
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"tvshows"} // TV Shows link
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white py-1 border-b-2 border-white"
                      : "text-sky-500 hover:text-sky-600"
                  }`
                }
              >
                TV Shows
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden sm:flex font-semibold font-Inter flex-row gap-12">
        {/* Navigation Links for Desktop */}
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white py-1 border-b-2 border-white"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/"} // Home link
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white py-1 border-b-2 border-white"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"movies"} // Movies link
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white py-1 border-b-2 border-white"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"tvshows"} // TV Shows link
          >
            TV Shows
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
