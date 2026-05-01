"use client";

import { Search, Bell, User } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
    return (
        <div className="h-16 px-6 flex items-center justify-between 
                    bg-white/90 backdrop-blur border-b border-gray-100
                    dark:bg-gray-900 dark:border-gray-800">

            {/* 🔹 Left */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Dashboard
            </h2>

            {/* 🔹 Right */}
            <div className="flex items-center gap-4">

                {/* 🔍 Search */}
                <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                    <Search size={16} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
                    />
                </div>

                {/* 🔔 Notification */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <Bell size={18} className="text-gray-600 dark:text-gray-300" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* 🌙 Dark Mode Toggle */}
                <ThemeToggle />

                {/* 👤 Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                        <User size={16} className="text-gray-600 dark:text-gray-200" />
                    </div>
                    <span className="hidden sm:block text-sm text-gray-700 dark:text-gray-200">
                        Tanmay
                    </span>
                </div>
            </div>
        </div>
    );
}