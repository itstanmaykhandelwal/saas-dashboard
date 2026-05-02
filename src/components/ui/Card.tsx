"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

type Props = {
    title: string;
    value: string | number;
    trend?: string;
    trendType?: "up" | "down";
    icon: LucideIcon;
};

function Card({
    title,
    value,
    trend = "+0%",
    trendType = "up",
    icon: Icon,
}: Props) {
    console.log("Card render");

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="bg-white/90 dark:bg-gray-800/80 backdrop-blur 
                 p-5 rounded-2xl border border-gray-100 dark:border-gray-700
                 shadow-sm hover:shadow-lg transition duration-300"
        >
            <div className="flex items-center justify-between">
                {/* Left */}
                <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">
                        {title}
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-1">
                        {typeof value === "number" ? value.toLocaleString() : value}
                    </h2>

                    <div className="flex items-center gap-2 mt-2">
                        <span
                            className={`text-sm font-medium ${trendType === "up"
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                        >
                            {trendType === "up" ? "↑" : "↓"} {trend}
                        </span>

                        <span className="text-xs text-gray-400 dark:text-gray-400">
                            vs last period
                        </span>
                    </div>
                </div>

                {/* Right Icon */}
                <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl
          ${trendType === "up"
                            ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                >
                    <Icon size={20} />
                </div>
            </div>
        </motion.div>
    );
}

export default React.memo(Card);