"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 800 },
    { month: "Mar", users: 1200 },
    { month: "Apr", users: 900 },
    { month: "May", users: 1500 },
];

export default function UserChart({ data }: any) {
    return (
       <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 h-[320px]">
            <h2 className="mb-4 font-semibold">User Growth</h2>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#3b82f6" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}