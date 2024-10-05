import React from "react";
import { Link } from "react-router-dom";

/**
 * MovieCard component that displays a card for a single movie 
 * including its title, release date, and poster image. 
 * Clicking on the card navigates to the movie's detailed view.
 */


const MovieCard = ({ movie, to }) => {
  // Destructuring the props to access movie data and the navigation path.
  const { release_date, title, poster_path } = movie; // Extracting relevant properties from the movie object.

  return (
    <Link key={movie.id} to={to}>
      {/* Wrapping the card in a Link component to enable navigation to the specified route. */}
      <div className="flex flex-col w-56 border shadow-xl rounded-lg justify-center items-center gap-2">
        <div className="w-full flex justify-center">
          <p className="lg:w-fit w-24">Release Date: {release_date}</p>{" "}
          {/* Displaying the release date of the movie. */}
        </div>
        <img
          className="h-80"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`} // Constructing the image URL using the poster path.
          alt={title} // Providing an accessible description for the image.
        />
        <button className="flex justify-center bg-btn text-white w-full rounded py-2 px-2">
          {title} {/* Displaying the title of the movie. */}
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;
