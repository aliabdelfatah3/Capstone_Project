import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesDetails } from "../../../services/getMovies";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { MovieCasts } from "../../Casts/MovieCasts";

/**
 * MovieDetails component that fetches and displays detailed information
 * about a specific movie, including its title, plot summary, runtime, genres,
 * popularity, and vote average. It also displays the cast information using the
 * MovieCasts component.
 */

export const MovieDetails = () => {
  const { id } = useParams(); // Destructuring the movie ID from the URL parameters.
  const [movieDetails, setMovieDetails] = useState([]); // State to hold the fetched movie details.
  const [loading, setLoading] = useState(true); // State to manage loading state.
  const [error, setError] = useState(null); // State to manage error messages.

  useEffect(() => {
    const fetchFilmsDetails = async () => {
      try {
        const moviesDetailsData = await fetchMoviesDetails(id); // Fetching movie details by ID.
        setMovieDetails(moviesDetailsData); // Setting the fetched details into state.
      } catch (error) {
        setError("Failed to Fetch movies data"); // Setting error message on failure.
      } finally {
        setLoading(false); // Setting loading to false after fetching attempt.
      }
    };
    fetchFilmsDetails(); // Calling the fetch function.
  }, [id]); // Adding id as a dependency to refetch when it changes.

  if (loading) return <p>Loading</p>; // Display loading message while fetching data.
  if (error) return <p>{error}</p>; // Display error message if fetching fails.

  return (
    <>
      <HelmetProvider>
        {/* Wrapping with HelmetProvider for managing the document head. */}
        <Helmet>
          <title>Movie Details</title>{" "}
          {/* Setting the document title to "Movie Details". */}
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center gap-2"
        key={movieDetails.id} // Unique key for the component.
      >
        <img
          className="sm:w-3/4 w-72 object-fill my-5 sm:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} // Dynamic image URL for the backdrop.
          alt={movieDetails.original_title} // Alt text for accessibility.
        />
        <h2 className="text-2xl font-semibold text-center mt-4">
          {movieDetails.original_title}
          {/* Displaying the original title of the movie. */}
        </h2>

        <h1 className="w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Plot Summary : </span>
          <p> {movieDetails.overview}</p>
          {/* Displaying the plot summary of the movie. */}
        </h1>
        <div className="items-start">
          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Runtime: </span>
            {movieDetails.runtime} minutes
            {/* Displaying the runtime of the movie. */}
          </h3>

          <h3 className="flex flex-col sm:flex-row gap-2 text-lg text-gray-600 mt-2">
            <span className="font-semibold">Genres: </span>
            {movieDetails.genres.map((genres) => (
              <p key={genres.id}>{genres.name}</p>
            ))}
            {/* Displaying the genres of the movie. */}
          </h3>

          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Popularity : </span>
            {movieDetails.popularity}
            {/* Displaying the popularity score of the movie. */}
          </h3>

          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Vote Average : </span>
            {movieDetails.vote_average}
            {/* Displaying the average vote score of the movie. */}
          </h3>
        </div>
      </div>
      <MovieCasts />
      {/* Rendering the MovieCasts component for displaying cast information. */}
    </>
  );
};
