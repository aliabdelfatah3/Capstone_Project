import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvDetails } from "../../../services/getTVShows";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { TvCasts } from "../../Casts/TvShowCasts";

export const TVShowDetails = () => {
  const { id } = useParams();
  const [tvDetails, setTvDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvShowsDetails = async () => {
      try {
        const moviesDetailsData = await fetchTvDetails(id);
        setTvDetails(moviesDetailsData);
      } catch (error) {
        setError("Failed to Fetch tvshow data");
      } finally {
        setLoading(false);
      }
    };
    fetchTvShowsDetails();
  }, [id]);
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>TVShow Details</title>
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center  m-10 p-10 gap-2 h-screen"
        key={tvDetails.id}
      >
        <img
          className="w-full h-80 object-fill md:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${tvDetails.backdrop_path}`}
          alt={tvDetails.original_name}
        />

        <h2 className="text-2xl font-semibold text-center mt-4">
          {tvDetails.original_name}
        </h2>

        <p className=" w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Plot Summary: </span>
          <p>{tvDetails.overview}</p>
        </p>

        <div className="items-start">
          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Runtime : </span>
            {tvDetails.runtime} minutes
          </h3>

          <h3 className="flex gap-2 text-lg text-gray-600 mt-2">
            <span className="font-semibold">Genres: </span>
            {tvDetails.genres.map(({ name }) => (
              <p key={name.id}>{name}</p>
            ))}
          </h3>
          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Popularity : </span>
            {tvDetails.popularity}
          </h3>

          <h3 className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Vote Average : </span>
            {tvDetails.vote_average}
          </h3>
        </div>
      </div>
      <TvCasts />
    </>
  );
};
