import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, to }) => {
  const { release_date, title, poster_path } = movie;
  return (
    <Link key={movie.id} to={to}>
      <div className="flex flex-col w-56 border shadow-xl rounded-lg justify-center items-center gap-2">
        <p className="">Release Date: {release_date}</p>
        <img
          className="h-80"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

        <button className="flex justify-center bg-btn text-white w-220 rounded py-2 px-2">
          {title}
        </button>
      </div>
    </Link>
  );
};
export default MovieCard;
