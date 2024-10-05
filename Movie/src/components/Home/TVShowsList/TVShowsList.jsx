import React, { useEffect, useRef, useState } from "react";
import { fetchTvList } from "../../../services/getTVShows";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSwiper from "../ArrowSwiper/ArrowSwiper";
import TVShowsCard from "../Card/TVShowsCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * TVShowsList component that fetches and displays a list of TV shows 
 * in a swiper carousel format. It utilizes the fetchTvList service 
 * to get the data and renders each TV show using the TVShowsCard component.
 */


function TVShowsList() {
  const [series, setSeries] = useState([]); // State to hold the list of TV shows fetched from the API.
  const swiperRef = useRef(null); // Creating a ref to access the Swiper instance.

  // Effect to fetch TV shows when the component mounts.
  useEffect(() => {
    const fetchTv = async () => {
      // Asynchronous function to fetch TV show data.
      const tvData = await fetchTvList(); // Fetching the list of TV shows.
      setSeries(tvData); // Setting the fetched data into state.
    };
    fetchTv(); // Calling the fetch function.
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className="flex justify-center">
      <fieldset className="border border-black rounded-lg sm:p-0 p-2 relative">
        <legend className="text-lg font-semibold px-2 text-gray-700">
          <h1 className="bg-slate-200 px-1">Tv-Show List</h1>{" "}
        </legend>
        <div className="lg:w-128 md:w-700 sm:w-500 w-56">
          <Swiper
            modules={[Navigation, Pagination, A11y]} // Enabling navigation, pagination, and accessibility modules.
            slidesPerView={1} // Default number of slides to show at once.
            spaceBetween={30} // Space between slides.
            breakpoints={{
              // Configuring responsive behavior for different screen sizes.
              640: { slidesPerView: 2 }, // 2 slides on screens 640px and above.
              748: { slidesPerView: 3 }, // 3 slides on screens 748px and above.
              1024: { slidesPerView: 4 }, // 4 slides on screens 1024px and above.
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Storing the Swiper instance in the ref.
          >
            <div>
              {series.map(
                (
                  tv // Mapping over the series array to create a SwiperSlide for each TV show.
                ) => (
                  <SwiperSlide
                    key={tv.id} // Unique key for each slide to help React identify changes.
                    className="flex justify-center items-center"
                  >
                    <TVShowsCard
                      to={`tvshows/${tv.id}`} // Link to the TV show details page.
                      key={tv.id} // Unique key for each TVShowsCard.
                      tv={tv} // Passing the TV show data to the TVShowsCard.
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

export default TVShowsList;
