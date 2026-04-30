export const getDashboardData = async () => {
  console.log("API CALL HO RAHI HAI");

  await new Promise((res) => setTimeout(res, 800));

  return {
    users: 1200,
    revenue: 45000,
    conversion: 3.5,
    userGrowth: [
      { month: "Jan", users: 400 },
      { month: "Feb", users: 800 },
    ],
    revenueData: [
      { month: "Jan", revenue: 10000 },
      { month: "Feb", revenue: 20000 },
    ],
  };
};