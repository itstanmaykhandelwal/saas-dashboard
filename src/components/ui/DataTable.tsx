"use client";

import React from "react";

const data = [
    {
        id: "#987654",
        product: "Headphones",
        customer: "Amit Sharma",
        date: "12 May 2026",
        amount: "₹2,499",
        status: "Shipped",
    },
    {
        id: "#987655",
        product: "Smart Watch",
        customer: "Rahul Verma",
        date: "10 May 2026",
        amount: "₹5,999",
        status: "Pending",
    },
    {
        id: "#987656",
        product: "Keyboard",
        customer: "Neha Gupta",
        date: "8 May 2026",
        amount: "₹1,299",
        status: "Cancelled",
    },
];

const statusColor: any = {
    Shipped:
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    Pending:
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    Cancelled:
        "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
};

function DataTable() {
    return (
        <div className="mt-10 bg-white/90 dark:bg-gray-800/80 backdrop-blur 
                    p-5 rounded-2xl border border-gray-100 dark:border-gray-700 
                    shadow-sm">

            {/* Header */}
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Recent Orders
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">

                    {/* Head */}
                    <thead>
                        <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                            <th className="py-3">ID</th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {data.map((item, i) => (
                            <tr
                                key={i}
                                className="border-b border-gray-100 dark:border-gray-700 
                           hover:bg-gray-50 dark:hover:bg-gray-700/50 
                           transition"
                            >
                                <td className="py-3 font-medium text-gray-700 dark:text-gray-200">
                                    {item.id}
                                </td>

                                <td className="text-gray-600 dark:text-gray-300">
                                    {item.product}
                                </td>

                                <td className="text-gray-600 dark:text-gray-300">
                                    {item.customer}
                                </td>

                                <td className="text-gray-500 dark:text-gray-400">
                                    {item.date}
                                </td>

                                <td className="font-medium text-gray-800 dark:text-gray-100">
                                    {item.amount}
                                </td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[item.status]}`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default React.memo(DataTable);