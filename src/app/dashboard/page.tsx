"use client";

import MainLayout from "@/components/layout/MainLayout";
import Card from "@/components/ui/Card";
import { useDashboardData } from "@/hooks/useDashboardData";
import UserChart from "@/components/charts/UserChart";
import RevenueChart from "@/components/charts/RevenueChart";
import Skeleton from "@/components/ui/Skeleton";

export default function DashboardPage() {
    const { data, isLoading, error } = useDashboardData();

    console.log("DATA:", data, "LOADING:", isLoading, "ERROR:", error);

    // Error state
    if (error) return <div>Error aa gaya</div>;

    // Skeleton loading UI
    if (isLoading) {
        return (
            <MainLayout>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Dashboard Overview
                </h1>

                {/* 🔹 Cards Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Skeleton className="h-24" />
                    <Skeleton className="h-24" />
                    <Skeleton className="h-24" />
                </div>

                {/* 🔹 Charts Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <Skeleton className="h-[320px]" />
                    <Skeleton className="h-[320px]" />
                </div>
            </MainLayout>
        );
    }

    // UI
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Dashboard Overview
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Total Users" value={data?.users} />
                <Card title="Revenue" value={`₹${data?.revenue}`} />
                <Card title="Conversion" value={`${data?.conversion}%`} />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <UserChart data={data?.userGrowth} />
                <RevenueChart data={data?.revenueData} />
            </div>
        </MainLayout>
    );
}