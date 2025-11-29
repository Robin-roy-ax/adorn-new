"use client";

export default function PricingCardSkeleton() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl shadow-[0_4px_10px_-2px_#64718f60] p-6 sm:p-8 text-left bg-gray-100 border-slate-200 z-20 max-w-[370px] mx-auto">
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(
            90deg,
            #e0e0e0 0%,
            #f0f0f0 20%,
            #e0e0e0 40%,
            #e0e0e0 100%
          );
          background-size: 1000px 100%;
        }
      `}</style>

      {/* Header Section - Title and Credits Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          {/* Title skeleton */}
          <div className="h-5 shimmer rounded w-24 sm:h-6"></div>
          {/* Credits badge skeleton */}
          <div className="px-3 py-1 h-6 w-24 shimmer rounded-full"></div>
        </div>
        
        {/* Price skeleton */}
        <div className="h-12 shimmer rounded w-36 sm:h-14 mt-1"></div>
        
        {/* Description skeleton */}
        <div className="mt-3 space-y-2">
          <div className="h-4 shimmer rounded w-full sm:h-4"></div>
          <div className="h-4 shimmer rounded w-2/3 sm:h-4"></div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-6 sm:mt-8">
        {/* Primary button skeleton */}
        <div className="w-full h-12 shimmer rounded-full sm:h-14"></div>
        
        {/* Secondary button skeleton */}
        <div className="mt-3 h-6 shimmer rounded w-32 mx-auto sm:h-6"></div>
      </div>

      {/* Divider */}
      <hr className="my-5 sm:my-6 border-slate-300" />

      {/* Features Section */}
      <div className="space-y-4">
        <div>
          {/* Section title skeleton */}
          <div className="h-4 shimmer rounded w-28 mb-3"></div>
          
          {/* Features list skeleton with exact min-height from PricingCard */}
          <ul className="space-y-2 text-sm sm:text-base min-h-[185px]">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-3">
                {/* Check icon skeleton */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 shimmer rounded flex-shrink-0 mt-0.5"></div>
                {/* Feature text skeleton */}
                <div className={`h-4 shimmer rounded ${
                  i === 1 ? 'w-full' : i === 2 ? 'w-5/6' : i === 3 ? 'w-4/5' : 'w-11/12'
                }`}></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button skeleton (for expandable features) */}
        <div className="pt-2">
          <div className="h-10 shimmer rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}