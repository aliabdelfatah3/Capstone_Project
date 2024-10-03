import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
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
          className="relative w-40 md:w-56 pl-6 pr-6 py-1 rounded-full text-black placeholder:text-black bg-search"
          placeholder="Search"
        />
        <div className="absolute inset-y-1 md:left-48 left-32 flex items-center  ">
          <button
            className=" rounded-full"
            type="submit"
            onClick={handleRefresh}
          >
            <i className="fas fa-search text-white"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
