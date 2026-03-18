import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
// Import Font Awesome for social media icons.

/**
 * Footer component that serves as the bottom section of the application.
 * It provides a brief description, quick navigation links, social icons,
 * and a copyright notice in a modern multi-column layout.
 */

function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-gray-400 py-12 px-6 border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">MovieDb</h2>
          <p className="mb-6 max-w-sm">
            Our platform is trusted by millions & features the best updated movies and TV shows all around the world.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/movies" className="hover:text-primary transition-colors">Movies</a></li>
            <li><a href="/tvshows" className="hover:text-primary transition-colors">TV Shows</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm">
        <p>© {new Date().getFullYear()} Movie Database. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;