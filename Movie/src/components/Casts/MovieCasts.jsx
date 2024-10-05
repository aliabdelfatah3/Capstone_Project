import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCasts } from "../../services/getMovies";

/**
 * MovieCasts component that fetches and displays the cast information
 * for a specific movie based on its ID from the URL parameters.
 * It shows the cast members' names along with the characters they portray.
 */
export const MovieCasts = () => {
  const { id } = useParams(); // Destructuring the movie ID from the URL parameters.
  const [movieCasts, setMovieCasts] = useState([]); // State to hold the fetched movie cast details.
  const [loading, setLoading] = useState(true); // State to manage loading state.
  const [error, setError] = useState(null); // State to manage error messages.

  // Fetching the Movie Casts API
  useEffect(() => {
    const fetchFilmsCasts = async () => {
      try {
        const moviesCastsData = await fetchMovieCasts(id); // Fetching movie cast details by ID.
        setMovieCasts(moviesCastsData); // Setting the fetched cast details into state.
      } catch (error) {
        setError("Failed to Fetch movies casts"); // Setting error message on failure.
      } finally {
        setLoading(false); // Setting loading to false after fetching attempt.
      }
    };
    fetchFilmsCasts(); // Calling the fetch function.
  }, [id]); // Adding id as a dependency to refetch when it changes.

  if (loading) return <p>Loading</p>; // Display loading message while fetching data.
  if (error) return <p>{error}</p>; // Display error message if fetching fails.

  return (
    <div
      className="flex flex-col justify-center items-center"
      key={movieCasts.id} // Unique key for the component (although it's not typically needed here).
    >
      <h1 className="sm:pr-4 py-3 font-semibold text-gray-600 text-lg">
        Casts:
      </h1>
      <div className="flex gap-3 justify-center flex-wrap">
        {movieCasts.cast.map((cast) => (
          <div key={cast.id}>
            {/* Unique key for each cast member. */}
            <img
              className="size-20" // Class for styling the image.
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} // Dynamic image URL for the cast member's profile.
              alt={cast.name} // Alt text for accessibility.
            />
            <div className="w-20 text-sm sm:text-xs">
              <p className="font-bold text-gray-600 mt-2">{cast.name}</p>
              {/* Displaying the cast member's name. */}
              <p className="">As a: {cast.character}</p>
              {/* Displaying the character name the cast member portrays. */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
