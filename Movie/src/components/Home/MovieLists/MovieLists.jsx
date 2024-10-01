import React, { useEffect, useRef, useState } from "react";
import { fetchMoviesList } from "../../../services/getMovies";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../ArrowSwiper/ArrowSwiper";
import MovieCard from "../Card/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MovieLists() {
  const [movies, setMovies] = useState([]);

  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchFilms = async () => {
      const moviesData = await fetchMoviesList();
      setMovies(moviesData);
    };
    fetchFilms();
  }, []);
  return (
    <div className="flex justify-center ">
      <fieldset className="border border-black rounded-lg p-4 relative ">
        <legend className="text-lg font-semibold px-2 text-gray-700">
          <h1 className="bg-slate-200 px-1">Movie List</h1>
        </legend>
        <div>
          <Swiper
            className="w-128"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={4}
            spaceBetween={15}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <div className="flex">
              {movies.map((movie) => (
                <SwiperSlide
                  key={movie.id}
                  className="flex justify-center items-center"
                >
                  <MovieCard
                    key={movie.id}
                    to={`movies/${movie.id}`}
                    movie={movie}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <ArrowSwiper swiper={swiperRef.current} />
      </fieldset>
    </div>
  );
}

export default MovieLists;
