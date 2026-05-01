"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

type Props = {
  data?: { month: string; users: number }[];
};

export default function UserChart({ data = [] }: Props) {
  return (
    <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-gray-100 shadow-sm h-[360px] flex flex-col">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">
            User Growth
          </h2>
          <p className="text-xs text-gray-400">Last 6 months</p>
        </div>

        <select className="text-sm border px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      {/* 🔹 Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #eee",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#6b7280" }}
            />

            <Legend />

            {/* Main line */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />

            {/* Comparison */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#93c5fd"
              strokeDasharray="4 4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}