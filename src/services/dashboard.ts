export const getDashboardData = async (range: string) => {
    console.log("API CALL HO RAHI HAI, RANGE:", range);

    await new Promise((res) => setTimeout(res, 800));

    const multiplier = range === "7" ? 1 : range === "30" ? 2 : 3;

    return {
        users: 1200 * multiplier,
        revenue: 45000 * multiplier,
        conversion: 3.5,
        userGrowth: [
            { month: "Jan", users: 400 * multiplier },
            { month: "Feb", users: 800 * multiplier },
        ],
        revenueData: [
            { month: "Jan", revenue: 10000 * multiplier },
            { month: "Feb", revenue: 20000 * multiplier },
        ],
    };
};