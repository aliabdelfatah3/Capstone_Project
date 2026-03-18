import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { fetchTvDetails } from "../../../services/getTVShows";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { TvCasts } from "../../../components/Casts/TvShowCasts";

/**
 * TVShowDetails component that fetches and displays detailed information
 * about a specific TV show, including its name, plot summary, runtime, genres,
 * popularity, and vote average. It also displays the cast information using the
 * TvCasts component.
 */

export const TVShowDetails = () => {
  const { id } = useParams();

  const fetchDetails = () => fetchTvDetails(id);
  const { data: tvDetails, loading, error } = useFetch(fetchDetails, [id]);

  if (loading) return <div className="text-center w-full py-20 text-xl font-semibold text-gray-300 animate-pulse">Loading TV Show Details...</div>;
  if (error) return <div className="text-center text-red-500 py-10 mt-10">{error}</div>;
  if (!tvDetails) return null;

  // Format runtime/episodes
  const formatEpisodes = (seasons) => {
    if (!seasons) return "N/A";
    return `${seasons} Seasons`;
  };

  // Determine vote color
  const getVoteColor = (vote) => {
    if (vote >= 7.5) return "text-green-400 border-green-400";
    if (vote >= 6) return "text-yellow-400 border-yellow-400";
    return "text-red-400 border-red-400";
  };

  return (
    <div className="relative min-h-screen pb-20 bg-homebg">
      <HelmetProvider>
        <Helmet>
          <title>{tvDetails.name || tvDetails.original_name} - Details</title>
        </Helmet>
      </HelmetProvider>

      {/* Hero Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {/* Backdrop Image with gradient fades */}
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original/${tvDetails.backdrop_path}`}
            alt={tvDetails.original_name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-homebg via-homebg/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-homebg via-homebg/60 to-transparent hidden md:block"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full px-4 md:px-12 lg:px-20 pb-10 flex flex-col md:flex-row items-start gap-8">
          
          {/* TV Show Poster */}
          <div className="hidden md:block shrink-0 w-48 lg:w-64 rounded-xl overflow-hidden shadow-2xl shadow-black ring-1 ring-white/20 transform -translate-y-12">
            <img 
               src={`https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`} 
               alt={`${tvDetails.original_name} Poster`}
               className="w-full h-auto object-cover"
            />
          </div>

          {/* Text and Details */}
          <div className="flex flex-col gap-4 text-white z-10 w-full md:pb-12">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-lg">
              {tvDetails.name || tvDetails.original_name}
              {tvDetails.first_air_date && (
                <span className="text-2xl md:text-3xl font-normal text-gray-300 ml-3">
                  ({tvDetails.first_air_date.split('-')[0]})
                </span>
              )}
            </h1>

            {tvDetails.tagline && (
              <p className="text-lg md:text-xl italic text-gray-300 drop-shadow-md">
                &quot;{tvDetails.tagline}&quot;
              </p>
            )}

            {/* Badges/Stats Row */}
            <div className="flex flex-wrap items-center gap-4 mt-2 mb-4">
              {/* Rating */}
               <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border bg-black/40 backdrop-blur-md font-bold ${getVoteColor(tvDetails.vote_average)}`}>
                 <i className="fas fa-star text-sm"></i>
                 <span>{tvDetails.vote_average?.toFixed(1)}</span>
               </div>
               
               {/* Seasons */}
               <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-500 bg-black/40 backdrop-blur-md text-gray-200 text-sm">
                 <i className="fas fa-list-ol"></i>
                 <span>{formatEpisodes(tvDetails.number_of_seasons)}</span>
               </div>

               {/* Genres */}
               <div className="flex flex-wrap gap-2">
                 {tvDetails?.genres?.map((genre) => (
                   <span key={genre.id} className="px-3 py-1 rounded-full bg-secondary/80 text-white text-sm backdrop-blur-md border border-white/10 shadow-sm">
                     {genre.name}
                   </span>
                 ))}
               </div>
            </div>

            {/* Overview */}
            <div className="mt-2 max-w-4xl">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg drop-shadow-md">
                {tvDetails.overview}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="w-full px-4 md:px-12 lg:px-20 mt-8 md:mt-2">
        <TvCasts />
      </div>
    </div>
  );
};
