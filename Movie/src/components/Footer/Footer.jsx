import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome for social media icons.
/**
 * Footer component that serves as the bottom section of the application.
 * It provides a brief description of the platform's credibility and features
 * social media icons with links to various platforms, along with a copyright notice.
 *
 */

function Footer() {
  return (
    <div className="py-10 px-5 sm:px-0 mt-10 bg-homebg text-white flex flex-col justify-center sm:flex-row sm:justify-around">
      <h1 className="sm:w-80 sm:text-3xl w-72 text-lg font-semibold">
        Our platform is trusted by millions & features best updated movies all
        around the world.
      </h1>
      <div className="flex flex-col items-end sm:gap-10 sm:pt-24">
        {/* Social media icons with links */}
        <div className="social-icons sm:text-2xl flex gap-3 sm:gap-5">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fab fa-youtube"></i> {/* YouTube icon */}
          </a>
        </div>
        <p>© 2024</p>
      </div>
    </div>
  );
}
export default Footer;