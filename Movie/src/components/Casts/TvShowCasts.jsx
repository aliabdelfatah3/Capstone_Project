import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvCasts } from "../../services/getTVShows";

export const TvCasts = () => {
  const { id } = useParams();
  const [tvCasts, setTvCasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvShowCasts = async () => {
      try {
        const tvCastsData = await fetchTvCasts(id);
        setTvCasts(tvCastsData);
      } catch (error) {
        setError("Failed to Fetch tvshow casts");
      } finally {
        setLoading(false);
      }
    };
    fetchTvShowCasts();
  }, [id]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className="flex flex-col justify-center items-center"
      key={tvCasts.id}
    >
      <h1 className="pr-4 font-semibold text-gray-600 text-lg">Casts:</h1>
      <div className="flex gap-3 justify-center flex-wrap">
        {tvCasts.cast.map((cast) => (
          <div key={cast.id}>
            <img
              className="size-20"
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
            />
            <div className="w-20 text-sm">
              <p className="font-bold text-gray-600 mt-2">{cast.name}</p>
              <p className="">As a: {cast.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
