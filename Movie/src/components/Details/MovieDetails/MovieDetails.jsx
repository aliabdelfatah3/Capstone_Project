import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesDetails } from "../../../services/GetMovies";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { MovieCasts } from "../../Casts/MovieCasts";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmsDetails = async () => {
      try {
        const moviesDetailsData = await fetchMoviesDetails(id);
        setMovieDetails(moviesDetailsData);
      } catch (error) {
        setError("Failed to Fetch movies data");
      } finally {
        setLoading(false);
      }
    };
    fetchFilmsDetails();
  }, [id]);
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Movie Details</title>
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center  m-10 p-10 gap-2 h-screen"
        key={movieDetails.id}
      >
        <img
          className="w-full h-80 object-fill md:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
          alt={movieDetails.original_title}
        />
        <h2 className="text-2xl font-semibold text-center mt-4">
          {movieDetails.original_title}
        </h2>

        <p className="w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Plot Summary : </span>

          <p> {movieDetails.overview}</p>
        </p>
        <div className="items-start">
          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Runtime: </span>
            {movieDetails.runtime} minutes
          </h3>

          <h3 className="flex gap-2 text-lg text-gray-600 mt-2">
            <span className="font-semibold">Genres: </span>
            {movieDetails.genres.map((genres) => (
              <p key={genres.id}>{genres.name}</p>
            ))}
          </h3>

          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Popularity : </span>
            {movieDetails.popularity}
          </h3>

          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Vote Average : </span>
            {movieDetails.vote_average}
          </h3>
        </div>
      </div>
      <MovieCasts />
    </>
  );
};
