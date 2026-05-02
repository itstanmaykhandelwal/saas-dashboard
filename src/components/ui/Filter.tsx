"use client";

import React from "react";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

function Filter({ value, onChange }: Props) {
    return (
        <div className="flex items-center gap-2">
            {/* Label */}
            <span className="text-sm text-gray-500 dark:text-gray-400">
                Range:
            </span>

            {/* Select */}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 
                   bg-white dark:bg-gray-700 
                   text-gray-700 dark:text-gray-200
                   shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                   hover:border-gray-300 dark:hover:border-gray-500 
                   transition cursor-pointer"
            >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="180">Last 6 Months</option>
            </select>
        </div>
    );
}

export default React.memo(Filter);