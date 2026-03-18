import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useFetch } from "../../../hooks/useFetch";
import { fetchTrendingMovies } from "../../../services/getMovies";

const HeroSlider = () => {
  const { data: trendingData, loading, error } = useFetch(fetchTrendingMovies, []);

  if (loading) {
    return (
      <div className="w-full h-[60vh] md:h-[80vh] bg-homebg animate-pulse flex items-center justify-center">
        <span className="text-gray-500 text-lg font-semibold">Loading Featured...</span>
      </div>
    );
  }

  if (error || !trendingData?.results?.length) return null;

  // Take top 5 trending
  const featuredMovies = trendingData.results.slice(0, 5);

  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] bg-homebg">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-400 !w-3 !h-3 !mx-2 transition-all duration-300",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !w-8 !rounded-full",
        }}
        loop={true}
        allowTouchMove={true}
        className="w-full h-full"
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover object-top"
              />
              {/* Overlays for readability and fading into lists */}
              <div className="absolute inset-0 bg-gradient-to-t from-homebg via-homebg/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-homebg via-homebg/40 to-transparent md:w-3/4"></div>
            </div>

            {/* Content Container */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
              <div className="w-full max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100 z-10">
                <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-4 leading-tight">
                  {movie.title}
                </h1>
                
                {/* Badges */}
                <div className="flex items-center gap-4 mb-5 text-sm md:text-base font-medium">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded border border-green-500/50 bg-black/40 text-green-400 backdrop-blur-sm">
                    <i className="fas fa-star text-xs"></i> {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-300 drop-shadow-md">
                    {movie.release_date?.split("-")[0]}
                  </span>
                </div>

                {/* Plot Description */}
                <p className="text-gray-300 text-sm md:text-lg mb-8 line-clamp-3 md:line-clamp-4 drop-shadow-md max-w-2xl">
                  {movie.overview}
                </p>

                {/* Call to Actions */}
                <div className="flex gap-4">
                  <Link
                    to={`/movies/${movie.id}`}
                    className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-primary hover:bg-primary/80 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/50"
                  >
                    <i className="fas fa-play"></i>
                    <span>Watch Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
