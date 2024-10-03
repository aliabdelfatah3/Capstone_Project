import React, { useEffect, useState } from "react";
import TVShowsCard from "../Home/Card/TVShowsCard";
import { fetchTvList } from "../../services/getTVShows";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

export default function TVShows() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchTv = async () => {
      const tvData = await fetchTvList();
      setSeries(tvData);
    };
    fetchTv();
  }, []);
  return (
    <div className="pt-10">
      <HelmetProvider>
        <Helmet>
          <title>TV Shows</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex justify-center flex-wrap gap-4">
        {series.map((tv) => (
          <div key={tv.id} className="hover:scale-105 ">
            <TVShowsCard to={`${tv.id}`} tv={tv} />
          </div>
        ))}
      </div>
    </div>
  );
}
