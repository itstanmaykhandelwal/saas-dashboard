import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "@/services/dashboard";

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardData,
  });
};