"use client";

import { useState } from "react";
import { Users, IndianRupee, TrendingUp } from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import Card from "@/components/ui/Card";
import { useDashboardData } from "@/hooks/useDashboardData";
import UserChart from "@/components/charts/UserChart";
import RevenueChart from "@/components/charts/RevenueChart";
import Skeleton from "@/components/ui/Skeleton";
import Filter from "@/components/ui/Filter";
import Insights from "@/components/ui/Insights";
import AIInsights from "@/components/ui/AIInsights";
import DataTable from "@/components/ui/DataTable";
import Activity from "@/components/ui/Activity";

export default function DashboardPage() {
    const [range, setRange] = useState("7");

    const { data, isLoading, error } = useDashboardData(range);

    // ❌ Error state
    if (error) {
        return (
            <MainLayout>
                <div className="bg-white p-6 rounded-2xl border text-center">
                    <p className="text-red-500">Something went wrong</p>
                </div>
            </MainLayout>
        );
    }

    // ✅ Skeleton loading
    if (isLoading && !data) {
        return (
            <MainLayout>
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Dashboard Overview
                    </h1>

                    {/* Cards Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Skeleton className="h-24" />
                        <Skeleton className="h-24" />
                        <Skeleton className="h-24" />
                    </div>

                    {/* Charts Skeleton */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Skeleton className="h-[320px] lg:col-span-2" />
                        <Skeleton className="h-[320px]" />
                    </div>
                </div>
            </MainLayout>
        );
    }

    // ✅ UI
    return (
        <MainLayout>
            <div className="space-y-6">
                {/* 🔥 Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                        Dashboard Overview
                    </h1>

                    <Filter value={range} onChange={setRange} />
                </div>

                {/* 🔹 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="Total Users"
                        value={data?.users ?? 0}
                        trend="+12%"
                        trendType="up"
                        icon={Users}
                    />

                    <Card
                        title="Revenue"
                        value={`₹${data?.revenue ?? 0}`}
                        trend="+8%"
                        trendType="up"
                        icon={IndianRupee}
                    />

                    <Card
                        title="Conversion"
                        value={`${data?.conversion ?? 0}%`}
                        trend="-2%"
                        trendType="down"
                        icon={TrendingUp}
                    />
                </div>

                {/* 🔹 Chart + Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <UserChart data={data?.userGrowth || []} />
                    </div>

                    <Activity />
                </div>

                {/* 🔹 Revenue */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <RevenueChart data={data?.revenueData || []} />
                </div>

                {/* 🔹 Insights */}
                <Insights data={data} />
                <AIInsights data={data} />

                {/* 🔹 Table */}
                <DataTable />
            </div>
        </MainLayout>
    );
}