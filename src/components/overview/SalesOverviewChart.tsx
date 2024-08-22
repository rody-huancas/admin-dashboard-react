import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3000 },
  { name: "Sep", sales: 2400 },
  { name: "Oct", sales: 2900 },
  { name: "Nov", sales: 3500 },
  { name: "Dec", sales: 3000 },
  { name: "Jan", sales: 4850 },
  { name: "Feb", sales: 3900 },
  { name: "Mar", sales: 4500 },
  { name: "Apr", sales: 4200 },
  { name: "May", sales: 3800 },
  { name: "Jun", sales: 3500 },
];

export const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9CA3AF" />
            <YAxis stroke={"#9CA3AF"} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey={"sales"}
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ stroke: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
