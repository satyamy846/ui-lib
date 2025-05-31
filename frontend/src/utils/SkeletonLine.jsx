const SkeletonLine = ({ width = "w-full", height = "h-4" }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${width} ${height}`}></div>
);

export default SkeletonLine;