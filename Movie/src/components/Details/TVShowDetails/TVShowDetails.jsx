import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvDetails } from "../../../services/getTVShows";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { TvCasts } from "../../Casts/TvShowCasts";

/**
 * TVShowDetails component that fetches and displays detailed information
 * about a specific TV show, including its name, plot summary, runtime, genres,
 * popularity, and vote average. It also displays the cast information using the
 * TvCasts component.
 */

export const TVShowDetails = () => {
  const { id } = useParams(); // Destructuring the TV show ID from the URL parameters.
  const [tvDetails, setTvDetails] = useState([]); // State to hold the fetched TV show details.
  const [loading, setLoading] = useState(true); // State to manage loading state.
  const [error, setError] = useState(null); // State to manage error messages.

  useEffect(() => {
    const fetchTvShowsDetails = async () => {
      try {
        const moviesDetailsData = await fetchTvDetails(id); // Fetching TV show details by ID.
        setTvDetails(moviesDetailsData); // Setting the fetched details into state.
      } catch (error) {
        setError("Failed to Fetch tvshow data"); // Setting error message on failure.
      } finally {
        setLoading(false); // Setting loading to false after fetching attempt.
      }
    };
    fetchTvShowsDetails(); // Calling the fetch function.
  }, [id]); // Adding id as a dependency to refetch when it changes.

  if (loading) return <p>Loading</p>; // Display loading message while fetching data.
  if (error) return <p>{error}</p>; // Display error message if fetching fails.

  return (
    <>
      <HelmetProvider>
        {/* Wrapping with HelmetProvider for managing the document head. */}
        <Helmet>
          <title>TVShow Details</title>
          {/* Setting the document title to "TVShow Details". */}
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center gap-2"
        key={tvDetails.id} // Unique key for the component.
      >
        <img
          className="sm:w-3/4 w-72 object-fill my-5 sm:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${tvDetails.backdrop_path}`} // Dynamic image URL for the backdrop.
          alt={tvDetails.original_name} // Alt text for accessibility.
        />

        <h2 className="text-2xl font-semibold text-center mt-4">
          {tvDetails.original_name}
          {/* Displaying the original name of the TV show. */}
        </h2>

        <h3 className=" w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Plot Summary: </span>
          <p>{tvDetails.overview}</p>
          {/* Displaying the plot summary of the TV show. */}
        </h3>

        <div className="items-start">
          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Runtime : </span>
            {tvDetails.runtime} minutes
            {/* Displaying the runtime of the TV show. */}
          </h3>

          <h3 className="flex gap-2 text-lg text-gray-600 mt-2">
            <span className="font-semibold">Genres: </span>
            {tvDetails.genres.map(({ name, index }) => (
              <div key={id || index}>
                <p>{name}</p> {/* Displaying the genres of the TV show. */}
              </div>
            ))}
          </h3>
          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Popularity : </span>
            {tvDetails.popularity}
            {/* Displaying the popularity score of the TV show. */}
          </h3>

          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Vote Average : </span>
            {tvDetails.vote_average}
            {/* Displaying the average vote score of the TV show. */}
          </h3>
        </div>
      </div>
      <TvCasts />
      {/* Rendering the TvCasts component for displaying cast information. */}
    </>
  );
};
