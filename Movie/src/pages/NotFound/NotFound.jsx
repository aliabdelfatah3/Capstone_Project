import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in-up">
      <HelmetProvider>
        <Helmet>
          <title>404 - Page Not Found</title>
        </Helmet>
      </HelmetProvider>
      
      <div className="relative">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 mb-2 drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
          404
        </h1>
        <i className="fas fa-satellite text-4xl text-gray-500 absolute -top-4 -right-8 animate-bounce"></i>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Oops! You&apos;re lost in space.
      </h2>
      
      <p className="text-gray-400 text-lg mb-8 max-w-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link
        to="/"
        className="px-8 py-3.5 bg-primary hover:bg-primary/80 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-primary/50 flex items-center gap-2"
      >
        <i className="fas fa-home"></i>
        <span>Back to Home</span>
      </Link>
    </div>
  );
};
