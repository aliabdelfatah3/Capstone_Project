import React from "react";
import { Link } from "react-router-dom";

/**
 * TVShowsCard component that represents a single TV show card
 * displaying its title, release date, and poster image.
 * The card is clickable, navigating to the detailed view of the show.
 */

const TVShowsCard = ({ tv, to }) => {
  // Destructuring the props to access tv data and the navigation path.
  const { first_air_date, poster_path, name } = tv; // Extracting relevant properties from the tv object.

  return (
    <Link to={to} className="block group">
      {/* Wrapping the card in a Link component to enable navigation. */}
      <div className="flex flex-col w-56 bg-secondary/20 backdrop-blur-sm border border-secondary/40 shadow-xl rounded-xl justify-center items-center gap-2 overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-fade-in-up">
        
        <div className="relative w-full h-80 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`} // Constructing the image URL using the poster path.
            alt={name} // Providing an accessible description for the image.
          />
          
          {/* Rating Badge */}
          {tv.vote_average > 0 && (
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-yellow-500 font-bold text-xs px-2 py-1 rounded-md border border-white/10 flex items-center gap-1">
              <i className="fas fa-star"></i> {tv.vote_average.toFixed(1)}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-homebg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
             <p className="text-sm font-medium text-white/80">First Aired: {first_air_date}</p>
          </div>
        </div>
        
        <div className="p-3 w-full">
           <button className="flex justify-center bg-btn/80 hover:bg-primary transition-colors duration-300 text-white w-full rounded lg text-sm font-semibold tracking-wide py-2 truncate relative overflow-hidden">
            <span className="relative z-10 truncate px-2">{name}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TVShowsCard;
