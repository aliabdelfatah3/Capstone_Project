import React from "react";
import MovieLists from "./MovieLists/MovieLists";
import TVShowsList from "./TVShowsList/TVShowsList";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

/**
 * Home component that serves as the main landing page of the application.
 * It integrates MovieLists and TVShowsList components to display featured
 * movies and TV shows. The component uses React Helmet for setting the 
 * document title, enhancing SEO and user experience. The Home component 
 * provides a central hub for users to explore both movies and TV shows 
 * in a clean and organized layout.
 */


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
