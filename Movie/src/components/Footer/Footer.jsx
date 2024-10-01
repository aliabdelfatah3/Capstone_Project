import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="py-10 mt-10 bg-homebg text-white flex justify-around">
      <h1 className="w-80 text-3xl font-semibold">
        Our platform is trusted by millions & features best updated movies all
        around the world.
      </h1>
      <div className="flex flex-col items-end gap-10 pt-24">
        <div className="social-icons text-2xl flex gap-5">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <p>© 2024</p>
      </div>
    </div>
  );
}

export default Footer;
