export const CardSkeleton = () => {
  return (
    <div className="flex flex-col w-56 p-3 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[320px] bg-secondary/60 rounded-xl mb-4"></div>
      
      {/* Title Skeleton */}
      <div className="w-3/4 h-5 bg-secondary/60 rounded mb-2"></div>
      
      {/* Date/Info Skeleton */}
      <div className="w-1/2 h-4 bg-secondary/60 rounded"></div>
    </div>
  );
};
