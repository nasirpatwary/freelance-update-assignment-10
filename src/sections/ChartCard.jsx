import useChartCollect from "../hooks/useChartCollect";
import { MdAttachMoney, MdOutlineStorage, MdPeopleOutline, MdSwapHoriz } from "react-icons/md";
const ChartCard = () => {
  const [data] = useChartCollect();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <StatCard
        icon={<MdAttachMoney size={28} />}
        title="Total Revenue"
        value={`$${data?.revenue || 0}`}
        color="bg-amber-500"
      />
      <StatCard
        icon={<MdPeopleOutline size={24} />}
        title="Total Users"
        value={data?.users}
        color="bg-blue-500"
      />
      <StatCard
        icon={<MdSwapHoriz size={24} />}
        title="Total Transactions"
        value={data?.financials}
        color="bg-purple-500"
      />
      <StatCard
        icon={<MdOutlineStorage size={24} />}
        title="Server Health"
        value="99.9%"
        color="bg-emerald-500"
      />
    </div>
  );
};
const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-gray-800 flex items-center gap-5">
    <div
      className={`p-4 rounded-2xl text-white ${color} shadow-lg shadow-opacity-20`}
    >
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wider">
        {title}
      </p>
      <h2 className="text-3xl font-bold dark:text-white">{value}</h2>
    </div>
  </div>
);
export default ChartCard;
