import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Logo component that serves as a clickable link to the homepage.
 * It displays the application name "Movie World" in a styled heading.
 */
function Logo() {
  return (
    <div className="pt-1">
      <NavLink to={"/"}>
        {/* Navigation link to the homepage */}
        <h1 className="font-mono w-11 sm:w-full">Movie World</h1>{" "}
      </NavLink>
    </div>
  );
}

export default Logo;
