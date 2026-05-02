"use client";

export default function Insights({ data }: any) {
    if (!data) return null;

    const revenue = data.revenue || 0;
    const users = data.users || 0;
    const conversion = data.conversion || 0;

    return (
        <div className="mt-10">
            {/* Heading */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Insights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Revenue */}
                <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition hover:shadow-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Revenue
                    </p>

                    <p className="text-2xl font-semibold mt-1 text-gray-900 dark:text-gray-100">
                        ₹{revenue.toLocaleString()}
                    </p>

                    <p className="text-green-500 text-sm mt-2">+8% growth</p>
                </div>

                {/* Users */}
                <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition hover:shadow-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Users
                    </p>

                    <p className="text-2xl font-semibold mt-1 text-gray-900 dark:text-gray-100">
                        {users}
                    </p>

                    <p className="text-green-500 text-sm mt-2">+12% growth</p>
                </div>

                {/* Conversion */}
                <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition hover:shadow-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversion
                    </p>

                    <p className="text-2xl font-semibold mt-1 text-gray-900 dark:text-gray-100">
                        {conversion}%
                    </p>

                    <p className="text-red-500 text-sm mt-2">-2% drop</p>
                </div>
            </div>
        </div>
    );
}