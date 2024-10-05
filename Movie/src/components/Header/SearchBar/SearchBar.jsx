import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

/**
 * SearchBar component that allows users to input search queries.
 * Upon submission, it navigates to the search results page
 * using the query provided.
 */

function SearchBar() {
  const [query, setQuery] = useState(""); // State to hold the search query.
  const navigate = useNavigate(); // Using the useNavigate hook for navigation.

  // Function to handle form submission.
  const handleSearch = async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.
    if (query.trim() === "") return; // If the input is empty, do nothing.
    navigate(`search/${query}`); // Navigating to the search results page with the query.
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        {/* Form submission handler. */}
        <input
          type="text"
          value={query} // Controlled input value.
          onChange={(e) => setQuery(e.target.value)} // Updating state on input change.
          className="relative w-40 md:w-56 pl-6 pr-6 py-1 rounded-full text-black placeholder:text-black bg-blue-300"
          placeholder="Search"
        />
        <div className="absolute inset-y-1 md:left-48 left-32 flex items-center">
          <button
            className="rounded-full"
            type="submit" // Setting button type to submit.
          >
            <i className="fas fa-search text-white"></i>
            {/* FontAwesome search icon. */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
