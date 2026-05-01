"use client";

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Users", icon: Users },
  { name: "Revenue", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside
      className="w-64 h-screen sticky top-0 
                 bg-white dark:bg-gray-900 
                 border-r border-gray-100 dark:border-gray-800 
                 flex flex-col justify-between p-5 
                 overflow-y-auto"
    >
      {/* 🔹 Top */}
      <div>
        {/* Logo */}
        <h1 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">
          SaaS Dashboard
        </h1>

        {/* Menu */}
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
                ${
                  item.active
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 Bottom */}
      <div className="space-y-3 mt-6">
        {/* Profile */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
          <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
            T
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Tanmay
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        {/* Logout */}
        <button
          className="w-full flex items-center justify-center gap-2 p-2 rounded-lg text-sm 
                     text-gray-500 hover:text-red-500 
                     hover:bg-red-50 dark:hover:bg-red-500/10 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}