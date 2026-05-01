"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <motion.main
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex-1 p-6 md:p-8 
                     bg-gradient-to-br from-gray-50 to-gray-100 
                     dark:from-gray-900 dark:to-gray-800"
                >
                    {/* Wrapper for consistent spacing */}
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </motion.main>
            </div>
        </div>
    );
}