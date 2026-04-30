"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", revenue: 10000 },
    { month: "Feb", revenue: 20000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 30000 },
    { month: "May", revenue: 25000 },
];

export default function RevenueChart({ data }: any) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 h-[320px]">
            <h2 className="mb-4 font-semibold">Revenue</h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#10b981" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}