import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import TVShows from "./components/TV/TVShows";
import { MovieDetails } from "./components/Details/MovieDetails/MovieDetails";
import { TVShowDetails } from "./components/Details/TVShowDetails/TVShowDetails";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { Layout } from "./components/Layout/Layout";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="tvshows/:id" element={<TVShowDetails />} />
            <Route path="search/:searchquery" element={<SearchResults />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
