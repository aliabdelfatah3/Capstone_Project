import React from "react";
import HeroSlider from "../../components/ui/HeroSlider/HeroSlider";
import MediaCarousel from "../../components/ui/MediaCarousel/MediaCarousel";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Import all service endpoints
import { 
  fetchMoviesList, 
  fetchTopRatedMovies, 
  fetchUpcomingMovies 
} from "../../services/getMovies";
import { 
  fetchTvList, 
  fetchTopRatedTvShows, 
  fetchAiringTodayTvShows 
} from "../../services/getTVShows";

/**
 * Home component that serves as the main landing page of the application.
 * It integrates a HeroSlider and multiple reusable MediaCarousels to display
 * diverse feature rows like Netflix.
 */

function Home() {
  return (
    <div className="flex flex-col justify-center pb-20">
      <HelmetProvider>
        <Helmet>
          <title>Home - Movie Database</title>
        </Helmet>
      </HelmetProvider>
      
      {/* Featured Trending Banner */}
      <HeroSlider />

      {/* Dynamic Content Rows */}
      <div className="flex flex-col gap-2 md:gap-6 -mt-16 md:-mt-24 relative z-10 w-full">
        {/* Row 1: Popular Movies */}
        <MediaCarousel 
          title="Popular Movies" 
          type="movie" 
          fetchService={() => fetchMoviesList(1)} 
        />
        
        {/* Row 2: Trending TV Shows */}
        <MediaCarousel 
          title="Trending TV Shows" 
          type="tv" 
          fetchService={() => fetchTvList(1)} 
        />
        
        {/* Row 3: Top Rated Movies */}
        <MediaCarousel 
          title="Top Rated Movies" 
          type="movie" 
          fetchService={fetchTopRatedMovies} 
        />
        
        {/* Row 4: Top Rated TV Shows */}
        <MediaCarousel 
          title="Top Rated TV Shows" 
          type="tv" 
          fetchService={fetchTopRatedTvShows} 
        />
        
        {/* Row 5: Upcoming Movies */}
        <MediaCarousel 
          title="Upcoming In Cinemas" 
          type="movie" 
          fetchService={fetchUpcomingMovies} 
        />
        
        {/* Row 6: Airing Today TV Shows */}
        <MediaCarousel 
          title="Airing Today TV Shows" 
          type="tv" 
          fetchService={fetchAiringTodayTvShows} 
        />
      </div>
    </div>
  );
}

export default Home;
