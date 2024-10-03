import React, { useEffect, useState } from "react";
import MovieCard from "../Home/Card/MovieCard";
import { fetchMoviesList } from "../../services/getMovies";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const moviesData = await fetchMoviesList();
      setMovies(moviesData);
    };
    fetchFilms();
  }, []);
  return (
    <div className="pt-10">
      <HelmetProvider>
        <Helmet>
          <title>Movies</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex justify-center  flex-wrap gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="hover:scale-105">
            <MovieCard to={`${movie.id}`} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
