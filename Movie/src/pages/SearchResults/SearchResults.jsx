import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { fetchMultiSearch } from "../../services/getSearch";
import { HelmetProvider } from "react-helmet-async"; 
import { Helmet } from "react-helmet-async";
import MovieCard from "../../components/ui/Card/MovieCard";
import TVShowsCard from "../../components/ui/Card/TVShowsCard";


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
  
  // Use a callback to pass the query to our useFetch hook
  const fetchQuery = () => fetchMultiSearch(searchquery);
  const { data: results, loading, error } = useFetch(fetchQuery, [searchquery]);

  if (loading) return <div className="text-center w-full py-20 text-xl font-semibold">Loading Search Results...</div>;
  if (error) return <div className="text-center text-red-500 py-10 mt-10">{error}</div>;

  // Function to determine the path for movie or TV show details based on media type.
  const movieDetailsPath = (media_type, id) => {
    if (media_type === "movie") {
      return `/${media_type}s/${id}`; // Returns path for movie details.
    } else if (media_type === "tv") {
      return `/${media_type}shows/${id}`; // Returns path for TV show details.
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <HelmetProvider>
        <Helmet>
          <title>Search Results</title>
        </Helmet>
      </HelmetProvider>

      <div className="w-full max-w-[1400px] px-4 md:px-8 lg:px-12 min-h-[50vh]">
        {results?.length === 0 && !loading && (
          <div className="text-center mt-10 text-gray-400">
            No results found for &quot;{searchquery}&quot;
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {results?.map((result) => {
            if (!result.poster_path) return null;

            return (
              <div key={result.id}>
                {result.media_type === "movie" ? (
                  <MovieCard to={movieDetailsPath(result.media_type, result.id)} movie={result} />
                ) : result.media_type === "tv" ? (
                  <TVShowsCard to={movieDetailsPath(result.media_type, result.id)} tv={result} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
