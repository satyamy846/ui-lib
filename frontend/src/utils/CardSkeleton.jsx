import SkeletonBoxLoader from "./SkeletonBoxLoader";
import SkeletonLine from "./SkeletonLine";

const CardSkeleton = () => (
  <div className="border border-gray-200 rounded-lg p-4 space-y-3">
    <SkeletonBoxLoader className="w-full h-48" />
    <SkeletonLine width="w-3/4" height="h-6" />
    <SkeletonLine width="w-1/2" height="h-4" />
    <SkeletonLine width="w-full" height="h-4" />
  </div>
);

export default CardSkeleton;