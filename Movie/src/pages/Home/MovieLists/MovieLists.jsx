import { useRef } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { fetchMoviesList } from "../../../services/getMovies";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../../../components/ui/ArrowSwiper/ArrowSwiper";
import MovieCard from "../../../components/ui/Card/MovieCard";
import { CardSkeleton } from "../../../components/ui/Skeleton/CardSkeleton";

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
  const { data: movies, loading, error } = useFetch(fetchMoviesList);
  const swiperRef = useRef(null); // Creating a ref to access the Swiper instance.

  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-4 mt-8 md:mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-3 tracking-wide">
          Popular Movies
        </h2>
      </div>
      <div className="relative">
        <Swiper
          className="w-full pb-10"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {loading
            ? Array.from({ length: 5 }).map((_, idx) => (
                <SwiperSlide key={idx} className="flex justify-center items-center pt-6 pb-12">
                  <CardSkeleton />
                </SwiperSlide>
              ))
            : movies?.results?.map((movie) => (
                <SwiperSlide
                  key={movie.id}
                  className="flex justify-center items-center pt-6 pb-12 px-2"
                >
                  <MovieCard to={`movies/${movie.id}`} movie={movie} />
                </SwiperSlide>
              ))}
        </Swiper>
        <ArrowSwiper swiper={swiperRef.current} />
      </div>
    </div>
  );
}

export default MovieLists;
