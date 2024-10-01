import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCasts } from "../../services/GetMovies";

export const MovieCasts = () => {
  const { id } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmsCasts = async () => {
      try {
        const moviesCastsData = await fetchMovieCasts(id);
        setMovieCasts(moviesCastsData);
      } catch (error) {
        setError("Failed to Fetch movies casts");
      } finally {
        setLoading(false);
      }
    };
    fetchFilmsCasts();
  }, [id]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className="flex flex-col justify-center items-center"
      key={movieCasts.id}
    >
      <h1 className="pr-4 font-semibold text-gray-600 text-lg">Casts:</h1>
      <div className="flex gap-3 justify-center flex-wrap">
        {movieCasts.cast.map((cast) => (
          <div key={cast.id}>
            <img
              className="size-20"
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
            />
            <div className="w-20  text-sm">
              <p className="font-bold text-gray-600 mt-2">{cast.name}</p>
              <p className="">As a: {cast.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
