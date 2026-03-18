import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../ArrowSwiper/ArrowSwiper";
import MovieCard from "../Card/MovieCard";
import TVShowsCard from "../Card/TVShowsCard";
import { CardSkeleton } from "../Skeleton/CardSkeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Reusable MediaCarousel component for displaying rows of Movies or TV Shows.
 * It fetches its own data using the provided fetchService and renders the
 * appropriate cards based on the 'type' prop ("movie" or "tv").
 */
function MediaCarousel({ fetchService, title, type }) {
  const { data, loading, error } = useFetch(fetchService);
  const [swiperInstance, setSwiperInstance] = useState(null);

  if (error) return null; 

  const items = data?.results || [];

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto group/swiper">
      <div className="flex items-center justify-between mb-4 mt-8 md:mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-3 tracking-wide drop-shadow-md">
          {title}
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
          onSwiper={setSwiperInstance}
        >
          {loading
            ? Array.from({ length: 5 }).map((_, idx) => (
                <SwiperSlide key={idx} className="flex justify-center items-center pt-6 pb-12">
                  <CardSkeleton />
                </SwiperSlide>
              ))
            : items.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center pt-6 pb-12 px-2"
                >
                  {type === "movie" ? (
                    <MovieCard to={`movies/${item.id}`} movie={item} />
                  ) : (
                    <TVShowsCard to={`tvshows/${item.id}`} tv={item} />
                  )}
                </SwiperSlide>
              ))}
        </Swiper>
        <ArrowSwiper swiper={swiperInstance} />
      </div>
    </div>
  );
}

export default MediaCarousel;
