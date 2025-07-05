export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {" "}{/* Responsive grid-like layout for shimmer items */}
      {Array(12).fill("").map((
        _,
        index // Generate more shimmer items for a better visual effect
      ) =>
        <div
          key={index}
          className="w-[250px] h-[300px] bg-gray-200 rounded-lg shadow-md overflow-hidden relative"
        >
          {/* Shimmer effect overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />

          {/* Placeholder for image */}
          <div className="h-40 w-full bg-gray-300 mb-3 rounded-t-lg" />

          {/* Placeholder for text lines */}
          <div className="p-3">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-full mb-2" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
          </div>
        </div>
      )}
    </div>
  );
};
