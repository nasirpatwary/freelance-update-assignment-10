import Container from "../shared/Container";

const DetailsSkeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-950 py-10 animate-pulse">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* --- Media Gallery Skeleton --- */}
          <div className="aspect-video rounded-3xl bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg"></div>

          {/* --- Content Skeleton --- */}
          <div className="flex flex-col space-y-6">
            <div>
              {/* Badge & Title Skeleton */}
              <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-md mb-4"></div>
              <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-xl mb-2"></div>
              <div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-xl mb-6"></div>
              
              {/* Rating & Location Skeleton */}
              <div className="flex gap-6 mb-8">
                <div className="h-5 w-24 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
              </div>

              {/* Amount Card Skeleton */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                </div>
              </div>

              {/* Description Skeleton */}
              <div className="space-y-3">
                <div className="h-6 w-40 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Opportunities Skeleton */}
        <div className="mt-24">
          <div className="h-8 w-56 bg-slate-200 dark:bg-slate-800 rounded-xl mb-8"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-72 bg-slate-200 dark:bg-slate-800 rounded-3xl shadow-sm"></div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsSkeleton;