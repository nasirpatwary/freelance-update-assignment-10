import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  Legend,
} from "recharts";

import usePieChart from "../hooks/usePieChart";
import Container from "../shared/Container";
import ChartCard from "../sections/ChartCard";
const Reports = () => {
  const { charts } = usePieChart();
  return (
    <>
      <title>Reports || Financial</title>
      <Container className="my-12">
        <ChartCard />
        <div className="mt-12 md:flex space-y-8">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <ComposedChart
                data={charts}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="totalAmount"
                  fill="#A288FD"
                  stroke="#8884d8"
                />
                <Bar dataKey="totalAmount" barSize={20} fill="#A288FD" />
                <Line type="monotone" dataKey="name" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <ResponsiveContainer width={"100%"} height={300}>
            <PieChart>
              <Pie
                data={charts}
                dataKey="totalAmount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#A288FD"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};

export default Reports;
