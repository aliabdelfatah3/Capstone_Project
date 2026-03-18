import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, Link } from "react-router-dom";
import { useDebounce } from "../../../hooks/useDebounce";
import { fetchMultiSearch } from "../../../services/getSearch";

/**
 * SearchBar component that allows users to input search queries.
 * Upon submission, it navigates to the search results page.
 * It also includes a Live Search Autocomplete dropdown.
 */
function SearchBar() {
  const [query, setQuery] = useState(""); // State to hold the search query.
  const [results, setResults] = useState([]); // State for live search results.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls dropdown visibility.
  const [loading, setLoading] = useState(false); // Loading state for dropdown.
  
  const navigate = useNavigate(); // Using the useNavigate hook for navigation.
  const dropdownRef = useRef(null); 
  const debouncedQuery = useDebounce(query, 500); // 500ms debounce delay

  // Fetch live results when debounced query changes
  useEffect(() => {
    const fetchLiveSearch = async () => {
      if (!debouncedQuery.trim()) {
        setResults([]);
        setIsDropdownOpen(false);
        return;
      }
      setLoading(true);
      try {
        const data = await fetchMultiSearch(debouncedQuery);
        // Display top 5 results
        setResults(data.slice(0, 5));
        setIsDropdownOpen(true);
      } catch (error) {
        console.error("Failed to fetch live search results:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveSearch();
  }, [debouncedQuery]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle form submission for full search page
  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (query.trim() === "") return; 
    setIsDropdownOpen(false);
    navigate(`search/${query}`); 
  };

  // Helper for item navigation path
  const getDetailsPath = (result) => {
    if (result.media_type === "movie") return `/movies/${result.id}`;
    if (result.media_type === "tv") return `/tvshows/${result.id}`;
    return `/search/${query}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query} 
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isDropdownOpen) setIsDropdownOpen(true);
          }}
          className="relative w-40 md:w-64 pl-6 pr-10 py-2 rounded-full text-white placeholder:text-gray-300 bg-secondary/60 backdrop-blur border border-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-secondary/90 transition-all duration-300"
          placeholder="Search movies, TV..."
        />
        <div className="absolute inset-y-0 right-3 flex items-center pr-2">
          <button type="submit" className="text-gray-300 hover:text-white transition-colors duration-200">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {/* Live Search Dropdown */}
      {isDropdownOpen && query.trim() !== "" && (
        <div className="absolute top-12 left-0 w-full bg-[#1A1A1D]/90 backdrop-blur-md border border-secondary/60 shadow-2xl rounded-xl overflow-hidden z-50 animate-fade-in-up">
          {loading ? (
             <div className="p-4 text-center text-gray-400 text-sm animate-pulse">Searching...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <li key={result.id} className="border-b border-secondary/40 last:border-b-0">
                  <Link
                    to={getDetailsPath(result)}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-secondary/60 transition-colors duration-200"
                  >
                    {result.poster_path || result.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${result.poster_path || result.profile_path}`}
                        alt={result.title || result.name}
                        className="w-10 h-14 object-cover rounded shadow-md"
                      />
                    ) : (
                      <div className="w-10 h-14 bg-secondary/80 rounded flex items-center justify-center text-xs text-gray-400">
                        {result.media_type === "person" ? "User" : "Img"}
                      </div>
                    )}
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-semibold text-white truncate w-full">
                        {result.title || result.name}
                      </span>
                      <span className="text-xs text-primary capitalize mt-1">
                        {result.media_type === "movie" ? "Movie" : result.media_type === "tv" ? "TV Show" : "Person"}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={handleSearch}
                  className="w-full text-center p-3 text-sm font-semibold text-primary hover:text-white hover:bg-primary transition-colors duration-300"
                >
                  View all results
                </button>
              </li>
            </ul>
          ) : (
             <div className="p-4 text-center text-gray-400 text-sm">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
