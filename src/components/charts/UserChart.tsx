"use client";

import React from "react";
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

function UserChart({ data = [] }: Props) {
    return (
        <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur 
                    p-5 rounded-2xl border border-gray-100 dark:border-gray-700 
                    shadow-sm h-[380px] flex flex-col">

            {/* 🔹 Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                        User Growth
                    </h2>
                    <p className="text-xs text-gray-400 dark:text-gray-400">
                        Last 6 months
                    </p>
                </div>

                <select className="text-sm border border-gray-200 dark:border-gray-600 
                           bg-white dark:bg-gray-700 
                           text-gray-700 dark:text-gray-200
                           px-2 py-1 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <option>Monthly</option>
                    <option>Weekly</option>
                </select>
            </div>

            {/* 🔹 Chart */}
            <div className="flex-1 min-h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>

                        {/* Grid */}
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(156,163,175,0.2)" // better for both modes
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
                            contentStyle={{
                                borderRadius: "10px",
                                border: "1px solid #374151",
                                backgroundColor: "#1F2937",
                                color: "#fff",
                                fontSize: "12px",
                            }}
                            labelStyle={{ color: "#9CA3AF" }}
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

export default React.memo(UserChart);