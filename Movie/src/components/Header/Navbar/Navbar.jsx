import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex font-semibold font-Inter flex-row gap-12">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white py-1 border-b-2 border-white"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/"}
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
            to={"movies"}
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
            to={"tvshows"}
          >
            TV Shows
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
