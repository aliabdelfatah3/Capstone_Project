import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    setLoading(true);
    navigate(`search/${query}`);
  };
  const handleRefresh = () => {
    setTimeout(() => {
      window.location.reload(); // Reload the entire page after 1 second
    }, 1);
  };
  if (loading) return <p>Loading</p>;

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="relative pl-6 pr-6 py-1 rounded-full text-black placeholder:text-black bg-search"
          placeholder="Search"
        />
        <div className="absolute inset-y-1 left-48 flex items-center pl-3 pointer-events-none">
          <i className="fas fa-search text-white"></i>
        </div>
        <button
          className="ml-4 bg-btn py-1 px-3 rounded-full"
          type="submit"
          onClick={handleRefresh}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
