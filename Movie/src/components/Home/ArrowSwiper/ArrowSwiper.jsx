import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowSwiper = ({ swiper }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      {/* Left Arrow */}
      <button
        className="bg-gray-200 bg-opacity-85 text-gray-700 p-2 rounded-lg hover:bg-gray-300 hover:bg-opacity-85 lg:left-3 absolute top-48 left-0 z-10"
        onClick={() => swiper?.slidePrev()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Right Arrow */}
      <button
        className="bg-gray-200 bg-opacity-85 text-gray-900 p-2 rounded-lg hover:bg-gray-300 hover:bg-opacity-85 lg:right-3 absolute top-48 right-0 z-10"
        onClick={() => swiper?.slideNext()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ArrowSwiper;
