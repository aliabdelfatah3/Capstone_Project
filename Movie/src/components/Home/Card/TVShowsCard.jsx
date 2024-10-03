import React from "react";
import { Link } from "react-router-dom";

const TVShowsCard = ({ tv, to }) => {
  const { first_air_date, poster_path, name } = tv;
  return (
    <Link to={to}>
      <div className="flex flex-col w-56 border shadow-xl rounded-lg justify-center items-center gap-2">
        <div className="w-full flex justify-center">
          <p className="lg:w-fit w-24">First Air Date: {first_air_date}</p>
        </div>
        <img
          className="h-80"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={name}
        />

        <button className="bg-btn text-white w-220  rounded py-2 px-2">
          {name}
        </button>
      </div>
    </Link>
  );
};

export default TVShowsCard;
