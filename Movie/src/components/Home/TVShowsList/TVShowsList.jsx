import React, { useEffect, useRef, useState } from "react";
import { fetchTvList } from "../../../services/getTVShows";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../ArrowSwiper/ArrowSwiper";
import TVShowsCard from "../Card/TVShowsCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TVShowsList() {
  const [series, setSeries] = useState([]);

  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchTv = async () => {
      const tvData = await fetchTvList();
      setSeries(tvData);
    };
    fetchTv();
  }, []);
  return (
    <div className="flex justify-center">
      <fieldset className="border border-black rounded-lg sm:p-0 p-2 relative">
        <legend className="text-lg font-semibold px-2 text-gray-700">
          <h1 className="bg-slate-200 px-1">Tv-Show List</h1>
        </legend>
        <div className="lg:w-128 md:w-700 sm:w-500 w-56">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              748: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <div>
              {series.map((tv) => (
                <SwiperSlide
                  key={tv.id}
                  className="flex justify-center items-center"
                >
                  <TVShowsCard to={`tvshows/${tv.id}`} key={tv.id} tv={tv} />
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

export default TVShowsList;
