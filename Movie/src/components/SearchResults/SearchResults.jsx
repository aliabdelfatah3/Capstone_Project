import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMultiSearch } from "../../services/getSearch";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

export const SearchResults = () => {
  const { searchquery } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const multySearch = async () => {
      const searchResults = await fetchMultiSearch(searchquery);
      setResults(searchResults);
    };
    multySearch();
  }, []);
  const movieDetailsPath = (media_type, id) => {
    if (media_type === "movie") {
      return `/${media_type}s/${id}`;
    } else if (media_type === "tv") {
      return `/${media_type}shows/${id}`;
    }
  };
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <HelmetProvider>
        <Helmet>
          <title>Search Reslts</title>
        </Helmet>
      </HelmetProvider>
      {results.map((result) => (
        <div key={result.id} className="pt-10 hover:scale-105">
          <Link to={movieDetailsPath(result.media_type, result.id)}>
            <div className="flex flex-col w-56 border shadow-2xl rounded-lg justify-center items-center gap-2">
              <p className="">Release Date: {result.release_date}</p>
              <img
                className="h-80"
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
              />

              <button className="flex justify-center bg-btn text-white w-220 rounded-full py-2 px-2">
                {result.title}
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
