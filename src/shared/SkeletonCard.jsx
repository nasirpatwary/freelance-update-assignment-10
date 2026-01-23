const SkeletonCard = () => (
  <div className="h-[450px] w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden animate-pulse">
    <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
      </div>
      <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl w-full mt-4" />
    </div>
  </div>
);
export default SkeletonCard