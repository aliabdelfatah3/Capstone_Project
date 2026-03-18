import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * ArrowSwiper component that provides elegant left and right navigation arrows.
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * ArrowSwiper component that provides elegant left and right navigation arrows.
 * Positioned absolutely to the parent container, centering themselves vertically.
 */
const ArrowSwiper = ({ swiper }) => {
  if (!swiper) return null;

  return (
    <>
      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full opacity-0 group-hover/swiper:opacity-100 transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 shadow-lg"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-sm md:text-lg" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full opacity-0 group-hover/swiper:opacity-100 transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 shadow-lg"
        onClick={() => swiper.slideNext()}
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-sm md:text-lg" />
      </button>
    </>
  );
};

export default ArrowSwiper;
