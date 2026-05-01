"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

type Props = {
    data?: { month: string; revenue: number }[];
};

export default function RevenueChart({ data = [] }: Props) {
    const total = data.reduce((acc, item) => acc + item.revenue, 0);

    return (
        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-gray-100 shadow-sm h-[360px] flex flex-col">
            {/* 🔹 Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                        Revenue
                    </h2>
                    <p className="text-xs text-gray-400">
                        Total: ₹{total.toLocaleString()}
                    </p>
                </div>

                <select className="text-sm border px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200">
                    <option>Monthly</option>
                    <option>Weekly</option>
                </select>
            </div>

            {/* 🔹 Chart */}
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
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

                        <Bar
                            dataKey="revenue"
                            fill="#10b981"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* 🔹 Footer Stats */}
            <div className="flex justify-between mt-3 text-sm text-gray-500">
                <span>
                    Avg: ₹
                    {data.length ? Math.round(total / data.length).toLocaleString() : 0}
                </span>
                <span className="text-green-500 font-medium">+8% growth</span>
            </div>
        </div>
    );
}