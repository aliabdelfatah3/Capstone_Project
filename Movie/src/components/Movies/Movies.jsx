import React, { useEffect, useState } from "react"; 
import MovieCard from "../Home/Card/MovieCard"; 
import { fetchMoviesList } from "../../services/getMovies"; 
import { Helmet } from "react-helmet-async"; 
import { HelmetProvider } from "react-helmet-async"; 

/**
 * Movies component that fetches and displays a list of movies.
 * It uses the `fetchMoviesList` function to retrieve movie data 
 * from an API and manages the fetched data using React state.
 * Each movie is rendered using the `MovieCard` component. The 
 * component is wrapped in a `HelmetProvider` to manage the 
 * document head for setting the page title.
 */


export default function Movies() {
  const [movies, setMovies] = useState([]); // State to hold the list of movies fetched from the API.

  // Effect to fetch movies when the component mounts.
  useEffect(() => {
    const fetchFilms = async () => {
      // Asynchronous function to fetch the movies data.
      const moviesData = await fetchMoviesList(); // Fetching the movies data from the API.
      setMovies(moviesData); // Setting the fetched data into state.
    };

    fetchFilms(); // Calling the fetch function.
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className="pt-10">
      <HelmetProvider>
        ،{/* Wrapping with HelmetProvider for managing the document head. */}
        <Helmet>
          <title>Movies</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex justify-center flex-wrap gap-4">
        {movies.map(
          (
            movie // Mapping over the movies array to create a MovieCard for each movie.
          ) => (
            <div key={movie.id} className="hover:scale-105">
              {/* Unique key for each child to help React identify which items have changed. */}
              <MovieCard to={`${movie.id}`} movie={movie} />
              {/* Rendering the MovieCard component with the movie data and link. */}
            </div>
          )
        )}
      </div>
    </div>
  );
}
