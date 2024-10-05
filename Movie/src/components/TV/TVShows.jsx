import React, { useEffect, useState } from "react";
import TVShowsCard from "../Home/Card/TVShowsCard";
import { fetchTvList } from "../../services/getTVShows";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";


/**
 * TVShows component that fetches and displays a list of TV shows.
 * It retrieves data from the API using the `fetchTvList` function 
 * when the component mounts and manages the document title using `Helmet`.
 * Each TV show is rendered as a card using the TVShowsCard component.
 */

export default function TVShows() {
  // State to hold the list of TV series fetched from the API.
  const [series, setSeries] = useState([]);

  // Effect to fetch TV shows when the component mounts.
  useEffect(() => {
    // Asynchronous function to fetch the TV shows data.
    const fetchTv = async () => {
      const tvData = await fetchTvList(); // Fetching the TV shows data from the API.
      setSeries(tvData); // Setting the fetched data into state.
    };

    fetchTv(); // Calling the fetch function.
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className="pt-10">
      <HelmetProvider>
        {/* Wrapping with HelmetProvider for managing the document head. */}
        <Helmet>
          <title>TV Shows</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex justify-center flex-wrap gap-4">
        {series.map(
          (
            tv // Mapping over the series array to create a TVShowsCard for each show.
          ) => (
            <div key={tv.id} className="hover:scale-105 ">
              {/* Unique key for each child to help React identify which items have changed. */}
              <TVShowsCard to={`${tv.id}`} tv={tv} />{" "}
              {/* Rendering the TVShowsCard component with the TV show data and link. */}
            </div>
          )
        )}
      </div>
    </div>
  );
}
