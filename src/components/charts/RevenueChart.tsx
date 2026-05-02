"use client";

import React, { useMemo } from "react";
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

function RevenueChart({ data = [] }: Props) {
    const total = useMemo(
        () => data.reduce((acc, item) => acc + item.revenue, 0),
        [data]
    );

    const avg = data.length ? Math.round(total / data.length) : 0;

    return (
        <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur 
                    p-5 rounded-2xl border border-gray-100 dark:border-gray-700 
                    shadow-sm h-[380px] flex flex-col">

            {/* 🔹 Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                        Revenue
                    </h2>
                    <p className="text-xs text-gray-400 dark:text-gray-400">
                        Total: ₹{total.toLocaleString()}
                    </p>
                </div>

                <select className="text-sm border border-gray-200 dark:border-gray-600 
                           bg-white dark:bg-gray-700 
                           text-gray-700 dark:text-gray-200
                           px-2 py-1 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-green-200">
                    <option>Monthly</option>
                    <option>Weekly</option>
                </select>
            </div>

            {/* 🔹 Chart */}
            <div className="flex-1 min-h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>

                        {/* Grid */}
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(156,163,175,0.2)"
                        />

                        {/* X Axis */}
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: "#9CA3AF" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        {/* Y Axis */}
                        <YAxis
                            tick={{ fontSize: 12, fill: "#9CA3AF" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        {/* Tooltip */}
                        <Tooltip
                            cursor={{ fill: "rgba(0,0,0,0.05)" }}
                            contentStyle={{
                                borderRadius: "10px",
                                border: "1px solid #374151",
                                backgroundColor: "#1F2937",
                                color: "#fff",
                                fontSize: "12px",
                            }}
                            labelStyle={{ color: "#9CA3AF" }}
                        />

                        {/* Bar */}
                        <Bar
                            dataKey="revenue"
                            fill="#10b981"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* 🔹 Footer */}
            <div className="flex justify-end items-center gap-2 mt-3 text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                    Avg: ₹{avg.toLocaleString()}
                </span>

                <span className="text-green-500 font-medium bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md">
                    +8% growth
                </span>
            </div>
        </div>
    );
}

export default React.memo(RevenueChart);