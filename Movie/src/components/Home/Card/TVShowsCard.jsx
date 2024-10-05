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
    <Link to={to}>
      {/* Wrapping the card in a Link component to enable navigation to the specified route. */}
      <div className="flex flex-col w-56 border shadow-xl rounded-lg justify-center items-center gap-2">
        <div className="w-full flex justify-center">
          <p className="lg:w-fit w-24">First Air Date: {first_air_date}</p>{" "}
          {/* Displaying the first air date of the TV show. */}
        </div>
        <img
          className="h-80"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`} // Constructing the image URL using the poster path.
          alt={name} // Providing an accessible description for the image.
        />
        <button className="bg-btn text-white w-220 rounded py-2 px-2">
          {name} {/* Displaying the name of the TV show. */}
        </button>
      </div>
    </Link>
  );
};

export default TVShowsCard;
