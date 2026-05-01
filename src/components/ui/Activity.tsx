"use client";

import { CheckCircle, AlertCircle, UserPlus, MessageCircle } from "lucide-react";

const activities = [
    {
        title: "New user registered",
        time: "2 mins ago",
        icon: UserPlus,
        color: "text-blue-500 bg-blue-100",
    },
    {
        title: "Order #987654 shipped",
        time: "10 mins ago",
        icon: CheckCircle,
        color: "text-green-500 bg-green-100",
    },
    {
        title: "Payment failed",
        time: "30 mins ago",
        icon: AlertCircle,
        color: "text-red-500 bg-red-100",
    },
    {
        title: "New comment added",
        time: "1 hour ago",
        icon: MessageCircle,
        color: "text-yellow-500 bg-yellow-100",
    },
];

export default function Activity() {
    return (
        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-gray-100 shadow-sm h-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Recent Activity
            </h2>

            <div className="space-y-4">
                {activities.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={i}
                            className="flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
                        >
                            {/* Icon */}
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-lg ${item.color}`}
                            >
                                <Icon size={16} />
                            </div>

                            {/* Content */}
                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-200">
                                    {item.title}
                                </p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}