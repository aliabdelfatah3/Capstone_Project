import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon for rendering icons.
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Importing arrow icons for navigation.

/**
 * ArrowSwiper component that provides left and right navigation arrows 
 * for the Swiper carousel. It calls the slidePrev and slideNext methods 
 * of the Swiper instance to navigate through the slides.
 */

const ArrowSwiper = ({ swiper }) => {
  // Destructuring the props to access the swiper instance.
  return (
    <div className="flex items-center justify-between space-x-4">

      {/* Left Arrow */}
      <button
        className="bg-gray-200 bg-opacity-85 text-gray-700 p-2 rounded-lg hover:bg-gray-300 hover:bg-opacity-85 lg:left-3 absolute top-48 left-0 z-10" // Styling for the left arrow button.
        onClick={() => swiper?.slidePrev()} // Using optional chaining to safely call slidePrev if swiper is defined.
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        {/* Rendering the left arrow icon. */}
      </button>

      {/* Right Arrow */}
      <button
        className="bg-gray-200 bg-opacity-85 text-gray-900 p-2 rounded-lg hover:bg-gray-300 hover:bg-opacity-85 lg:right-3 absolute top-48 right-0 z-10" // Styling for the right arrow button.
        onClick={() => swiper?.slideNext()} // Using optional chaining to safely call slideNext if swiper is defined.
      >
        <FontAwesomeIcon icon={faArrowRight} />
        {/* Rendering the right arrow icon. */}
      </button>
    </div>
  );
};

export default ArrowSwiper;
