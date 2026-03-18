import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import TVShowsCard from "../../components/ui/Card/TVShowsCard";
import { CardSkeleton } from "../../components/ui/Skeleton/CardSkeleton";
import { fetchTvList } from "../../services/getTVShows";
import { Helmet, HelmetProvider } from "react-helmet-async";


/**
 * TVShows component that fetches and displays a list of TV shows.
 * It retrieves data from the API using the `fetchTvList` function 
 * when the component mounts and manages the document title using `Helmet`.
 * Each TV show is rendered as a card using the TVShowsCard component.
 */

export default function TVShows() {
  const [page, setPage] = useState(1);

  // Create a callback that passes the current page to the fetch function
  const fetchPage = () => fetchTvList(page);
  const { data, loading, error } = useFetch(fetchPage, [page]);
  
  const series = data?.results;
  // TMDB API limits pagination to 500 pages maximum
  const totalPages = Math.min(data?.total_pages || 1, 500);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (error && page === 1) return <div className="text-center text-red-500 py-10 mt-10">{error}</div>;

  return (
    <div className="pt-28 flex flex-col items-center">
      <HelmetProvider>
        {/* Wrapping with HelmetProvider for managing the document head. */}
        <Helmet>
          <title>TV Shows</title>
        </Helmet>
      </HelmetProvider>
      <div className="w-full max-w-[1400px] px-4 md:px-8 lg:px-12 min-h-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {/* If loading, show skeletons */}
          {loading ? (
            Array.from({ length: 12 }).map((_, idx) => (
              <div key={`skeleton-${idx}`}>
                <CardSkeleton />
              </div>
            ))
          ) : (
            /* Render fetched TV shows for current page */
            series?.map((tv) => (
              <div key={tv.id}>
                <TVShowsCard to={`${tv.id}`} tv={tv} />
              </div>
            ))
          )}
        </div>
      </div>
      
      {error && page > 1 && <div className="text-red-500 my-4 text-sm">{error}</div>}

      {/* Advanced Pagination Controls */}
      {!loading && !error && series?.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-20 max-w-full px-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              page === 1 
                ? "bg-secondary/40 text-gray-500 cursor-not-allowed" 
                : "bg-secondary hover:bg-primary text-white shadow-lg"
            }`}
          >
            Prev
          </button>
          
          {/* Dynamic Page Buttons with First/Last Page shortcuts */}
          {(() => {
            let startPage = Math.max(1, page - 2);
            let endPage = Math.min(totalPages, startPage + 4);
            if (endPage - startPage < 4) {
              startPage = Math.max(1, endPage - 4);
            }
            
            const pages = [];
            for (let i = startPage; i <= endPage; i++) {
              if (i <= totalPages) pages.push(i);
            }

            return (
              <>
                {/* Always show Page 1 */}
                {startPage > 1 && (
                  <>
                    <button
                      onClick={() => setPage(1)}
                      className="w-10 h-10 rounded-full font-bold transition-all duration-300 bg-secondary/60 text-gray-300 hover:bg-secondary hover:text-white"
                    >
                      1
                    </button>
                    {startPage > 2 && <span className="text-gray-500 font-bold px-1">...</span>}
                  </>
                )}

                {pages.map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                      page === pageNum
                        ? "bg-primary text-white shadow-lg shadow-primary/40 scale-110"
                        : "bg-secondary/60 text-gray-300 hover:bg-secondary hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                
                {/* Always show Last Page */}
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && <span className="text-gray-500 font-bold px-1">...</span>}
                    <button
                      onClick={() => setPage(totalPages)}
                      className="w-10 h-10 rounded-full font-bold transition-all duration-300 bg-secondary/60 text-gray-300 hover:bg-secondary hover:text-white"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </>
            );
          })()}
          
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              page === totalPages 
                ? "bg-secondary/40 text-gray-500 cursor-not-allowed" 
                : "bg-secondary hover:bg-primary text-white shadow-lg"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
