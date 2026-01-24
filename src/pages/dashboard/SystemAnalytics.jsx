import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ComposedChart, Line, Area, Bar, Legend } from "recharts";
import usePieChart from "../../hooks/usePieChart";
import ChartCard from "../../sections/ChartCard";

const SystemAnalytices = () => {
  const { charts } = usePieChart();

  const COLORS = ["#A288FD", "#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

  return (
    <>
      <title>System Analytices || Financial</title>
      <div className="py-10 px-4 lg:px-8 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
        <ChartCard />

        {/* Grid Layout for Charts */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 1. Composed Chart (Area, Bar, Line) */}
          <div className="bg-slate-50 dark:bg-gray-900 p-6 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <h3 className="text-lg font-bold mb-6 dark:text-gray-200">
              Revenue Summary
            </h3>
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={charts}
                 
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#374151"
                    opacity={0.1}
                  />
                  <XAxis
                    dataKey="name"
                    fontSize={12}
                    tick={{ fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    fontSize={12}
                    tick={{ fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                    itemStyle={{ color: "#A288FD" }}
                  />
                  <Legend iconType="circle" />
                  <Area
                    type="monotone"
                    dataKey="totalAmount"
                    fill="url(#colorTotal)"
                    stroke="#A288FD"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A288FD" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#A288FD" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Bar
                    dataKey="totalAmount"
                    barSize={15}
                    fill="#A288FD"
                    radius={[6, 6, 0, 0]}
                  />
                  {/* Line Key change to totalAmount for meaningful data */}
                  <Line
                    type="monotone"
                    dataKey="totalAmount"
                    stroke="#ff7300"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 2. Pie Chart */}
          <div className="bg-slate-50 dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <h3 className="text-lg font-bold mb-6 dark:text-gray-200">
              Category Distribution
            </h3>
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={charts}
                    dataKey="totalAmount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={80} // Donut chart style
                    outerRadius={120}
                    paddingAngle={5}
                    fill="#A288FD"
                    labelLine={false}
                  >
                    {charts?.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "12px",
                    }}
                    itemStyle={{ color: "#ffffff" }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemAnalytices;
