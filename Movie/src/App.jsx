import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Movies = React.lazy(() => import("./pages/Movies/Movies"));
const TVShows = React.lazy(() => import("./pages/TV/TVShows"));
const MovieDetails = React.lazy(() => import("./pages/Details/MovieDetails/MovieDetails").then(module => ({ default: module.MovieDetails })));
const TVShowDetails = React.lazy(() => import("./pages/Details/TVShowDetails/TVShowDetails").then(module => ({ default: module.TVShowDetails })));
const SearchResults = React.lazy(() => import("./pages/SearchResults/SearchResults").then(module => ({ default: module.SearchResults })));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound").then(module => ({ default: module.NotFound })));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white text-xl">Loading...</div>}>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="tvshows/:id" element={<TVShowDetails />} />
            <Route path="search/:searchquery" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
