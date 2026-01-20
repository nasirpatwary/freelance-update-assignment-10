import useChartCollect from "../hooks/useChartCollect";

const ChartCard = () => {
  const [data] = useChartCollect();
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="border space-y-2 border-primary w-full rounded-2xl p-5 bg-white dark:bg-gray-800">
        <p className="text-2xl text-gray-700 dark:text-gray-200">
          Total Revenue
        </p>
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          {data.revenue}
        </h2>
      </div>
      <div className="border space-y-2 border-primary w-full rounded-2xl p-5 bg-white dark:bg-gray-800">
        <p className="text-2xl text-gray-700 dark:text-gray-200">
          Total Financials
        </p>
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          {data.financials}
        </h2>
      </div>
      <div className="border space-y-2 border-primary w-full rounded-2xl p-5 bg-white dark:bg-gray-800">
        <p className="text-2xl text-gray-700 dark:text-gray-200">Total Users</p>
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          {data.users}
        </h2>
      </div>
    </div>
  );
};

export default ChartCard;
