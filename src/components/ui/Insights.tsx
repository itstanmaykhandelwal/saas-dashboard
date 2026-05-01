"use client";

export default function Insights({ data }: any) {
  if (!data) return null;

  const revenue = data.revenue || 0;
  const users = data.users || 0;
  const conversion = data.conversion || 0;

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-gray-100 shadow-sm transition">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-2xl font-semibold mt-1">
            ₹{revenue.toLocaleString()}
          </p>
          <p className="text-green-500 text-sm mt-2">+8% growth</p>
        </div>

        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-gray-100 shadow-sm transition">
          <p className="text-sm text-gray-500">Users</p>
          <p className="text-2xl font-semibold mt-1">{users}</p>
          <p className="text-green-500 text-sm mt-2">+12% growth</p>
        </div>

        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-gray-100 shadow-sm transition">
          <p className="text-sm text-gray-500">Conversion</p>
          <p className="text-2xl font-semibold mt-1">{conversion}%</p>
          <p className="text-red-500 text-sm mt-2">-2% drop</p>
        </div>
      </div>
</div>
  );
}