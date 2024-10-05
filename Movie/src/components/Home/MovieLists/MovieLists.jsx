import React, { useEffect, useRef, useState } from "react";
import { fetchMoviesList } from "../../../services/getMovies";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../ArrowSwiper/ArrowSwiper";
import MovieCard from "../Card/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * MovieLists component that fetches and displays a list of movies 
 * in a swiper carousel format. It utilizes the fetchMovieList service 
 * to retrieve movie data and renders each movie using the MovieCard component.
 * This component is designed for responsiveness and adapts to different 
 * screen sizes with varying numbers of slides visible.
 */


function MovieLists() {
  const [movies, setMovies] = useState([]); // State to hold the list of movies fetched from the API.
  const swiperRef = useRef(null); // Creating a ref to access the Swiper instance.

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
    <div className="flex justify-center">
      <fieldset className="border border-black rounded-lg md:p-0 p-2 relative">
        <legend className="text-lg font-semibold px-2 text-gray-700">
          <h1 className="bg-slate-200 px-1">Movie List</h1>{" "}
        </legend>
        <div>
          <Swiper
            className="lg:w-128 md:w-700 sm:w-500 w-56"
            modules={[Navigation, Pagination, A11y]} // Enabling navigation, pagination, and accessibility modules.
            slidesPerView={1} // Default number of slides to show.
            spaceBetween={30} // Space between slides.
            breakpoints={{
              // Configuring responsive behavior for different screen sizes.
              640: { slidesPerView: 2 }, // 2 slides on screens 640px and above.
              748: { slidesPerView: 3 }, // 3 slides on screens 748px and above.
              1024: { slidesPerView: 4 }, // 4 slides on screens 1024px and above.
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Storing the swiper instance in the ref.
          >
            <div className="flex">
              {movies.map(
                (
                  movie // Mapping over the movies array to create a SwiperSlide for each movie.
                ) => (
                  <SwiperSlide
                    key={movie.id} // Unique key for each slide to help React identify changes.
                    className="flex justify-center items-center" // Flex styles for centering content within the slide.
                  >
                    <MovieCard
                      key={movie.id} // Unique key for each MovieCard.
                      to={`movies/${movie.id}`} // Link to the movie details page.
                      movie={movie} // Passing the movie data to the MovieCard.
                    />
                  </SwiperSlide>
                )
              )}
            </div>
          </Swiper>
        </div>
        <ArrowSwiper swiper={swiperRef.current} />
        {/* Rendering custom navigation arrows using the ArrowSwiper component. */}
      </fieldset>
    </div>
  );
}

export default MovieLists;
