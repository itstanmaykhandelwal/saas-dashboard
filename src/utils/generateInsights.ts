export const generateInsights = (data: any) => {
    if (!data) return [];

    const insights = [];

    if (data.revenue > 40000) {
        insights.push("Revenue is performing well. Consider scaling ads.");
    }

    if (data.conversion < 5) {
        insights.push("Conversion rate is low. Improve landing page UX.");
    }

    if (data.users > 1000) {
        insights.push("User growth is strong. Focus on retention strategies.");
    }

    return insights;
};