import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "@/services/dashboard";

type DashboardData = {
    users: number;
    revenue: number;
    conversion: number;
    userGrowth: { month: string; users: number }[];
    revenueData: { month: string; revenue: number }[];
};

export const useDashboardData = (range: string) => {
    return useQuery<DashboardData>({
        queryKey: ["dashboard", range],
        queryFn: () => getDashboardData(range),

        staleTime: 1000 * 60 * 5,

        // old
        // cacheTime: 1000 * 60 * 10,

        //new (v5)
        gcTime: 1000 * 60 * 10,

        refetchOnWindowFocus: false,
    });
};