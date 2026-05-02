"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { generateInsights } from "@/utils/generateInsights";

function AIInsights({ data }: any) {
    const insights = generateInsights(data);

    if (!insights.length) return null;

    return (
        <div className="mt-8 bg-white/90 dark:bg-gray-800/80 backdrop-blur 
                    p-5 rounded-2xl border border-gray-100 dark:border-gray-700 
                    shadow-sm">

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-indigo-500 dark:text-indigo-400" size={18} />
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    AI Insights
                </h2>
            </div>

            {/* Insights list */}
            <div className="space-y-3">
                {insights.map((item: string, index: number) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl 
                       border border-gray-100 dark:border-gray-700
                       bg-gray-50 dark:bg-gray-700/50
                       hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition"
                    >
                        {/* Dot */}
                        <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500" />

                        {/* Text */}
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(AIInsights);