import React from "react";
import MovieLists from "./MovieLists/MovieLists";
import TVShowsList from "./TVShowsList/TVShowsList";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <div className="pt-10 flex flex-col justify-center gap-20">
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <MovieLists />
      <TVShowsList />
    </div>
  );
}

export default Home;
