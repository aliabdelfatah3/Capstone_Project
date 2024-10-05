import React, { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom"; 
import { fetchMultiSearch } from "../../services/getSearch";
import { HelmetProvider } from "react-helmet-async"; 
import { Helmet } from "react-helmet-async"; 


/**
 * SearchResults component that displays the results of a search query.
 * It fetches search results from the API using the `fetchMultiSearch` 
 * function based on the search query obtained from URL parameters. 
 * Each result is rendered as a link to its respective details page, 
 * and the component manages the document title using `Helmet`.
 */

export const SearchResults = () => {
  // Destructuring the search query from URL parameters.
  const { searchquery } = useParams();
  const [results, setResults] = useState([]); // State to hold search results.

  // Effect to fetch search results when the component mounts.
  useEffect(() => {
    const multySearch = async () => {
      // Asynchronous function to fetch search results.
      const searchResults = await fetchMultiSearch(searchquery); // Fetching search results using the query.
      setResults(searchResults); // Updating state with the fetched results.
    };

    multySearch(); // Calling the fetch function.
  }, [searchquery]); // Adding searchquery as a dependency to refetch if it changes.

  // Function to determine the path for movie or TV show details based on media type.
  const movieDetailsPath = (media_type, id) => {
    if (media_type === "movie") {
      return `/${media_type}s/${id}`; // Returns path for movie details.
    } else if (media_type === "tv") {
      return `/${media_type}shows/${id}`; // Returns path for TV show details.
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Flex container for search results layout. */}
      <HelmetProvider>
        {/* Wrapping with HelmetProvider for managing the document head. */}
        <Helmet>
          <title>Search Results</title>
          {/* Setting the document title to "Search Results". */}
        </Helmet>
      </HelmetProvider>
      {/* Mapping over search results to render each result. */}
      {results.map((result) => (
        <div key={result.id} className="pt-10 hover:scale-105">
          {/* Unique key for each result to help React identify changes. */}
          <Link to={movieDetailsPath(result.media_type, result.id)}>
            {/* Link to the details page for each result. */}
            <div className="flex flex-col w-56 border shadow-2xl rounded-lg justify-center items-center gap-2">
              {/* Container for individual result card. */}
              <p className="">Release Date: {result.release_date}</p>{" "}
              {/* Displaying the release date of the media. */}
              <img
                className="h-80" // Styling the image height.
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} // Dynamic image URL for the poster.
                alt={result.title} // Alt text for accessibility.
              />
              <button className="flex justify-center bg-btn text-white w-220 rounded-full py-2 px-2">
                {/* Button styled for the media title. */}
                {result.title} {/* Displaying the title of the media. */}
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
