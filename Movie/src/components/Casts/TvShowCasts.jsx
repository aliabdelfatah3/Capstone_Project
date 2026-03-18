import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { fetchTvCasts } from "../../services/getTVShows"; 
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../ui/ArrowSwiper/ArrowSwiper";

import "swiper/css";
import "swiper/css/navigation";

/**
 * TvCasts component that fetches and displays the cast information
 * for a specific TV show based on its ID from the URL parameters.
 * It displays the cast members' names and the characters they portray.
 */
export const TvCasts = () => {
  const { id } = useParams();
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const fetchCasts = () => fetchTvCasts(id);
  const { data: tvCasts, loading, error } = useFetch(fetchCasts, [id]);

  if (loading) return <div className="text-center w-full py-10 font-medium text-gray-400 animate-pulse">Loading Casts...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!tvCasts?.cast?.length) return null;

  return (
    <div className="w-full mt-10 mb-20 px-4 md:px-0 group/swiper" key={tvCasts.id}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4 tracking-wide">
        Series Cast
      </h2>
      
      <div className="relative">
        <Swiper
          className="w-full"
          modules={[Navigation, A11y]}
          slidesPerView={2}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 16 },
            640: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 24 },
            1280: { slidesPerView: 7, spaceBetween: 24 },
          }}
          onSwiper={setSwiperInstance}
        >
          {tvCasts.cast.slice(0, 15).map((cast) => (
            <SwiperSlide key={cast.id} className="pb-4">
              <div className="flex flex-col group/cast cursor-pointer h-full">
                {/* Portrait Card */}
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover/cast:-translate-y-3 group-hover/cast:shadow-primary/20 group-hover/cast:border-primary/50">
                  {cast.profile_path ? (
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/cast:scale-110"
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-gray-500">
                      <i className="fas fa-user-tie text-4xl"></i>
                    </div>
                  )}
                  
                  {/* Name Overlay (Glassmorphism) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-3 px-3">
                    <p className="font-bold text-white text-xs md:text-sm leading-tight line-clamp-1 group-hover/cast:text-primary transition-colors">
                      {cast.name}
                    </p>
                    <p className="text-[9px] md:text-[11px] text-gray-400 mt-0.5 line-clamp-1 italic">
                      {cast.character}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <ArrowSwiper swiper={swiperInstance} />
      </div>
    </div>
  );
};
