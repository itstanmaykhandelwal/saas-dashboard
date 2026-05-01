"use client";

const data = [
    {
        id: "#987654",
        product: "Headphones",
        customer: "Amit Sharma",
        date: "12 May 2026",
        amount: "₹2,499",
        status: "Shipped",
    },
    {
        id: "#987655",
        product: "Smart Watch",
        customer: "Rahul Verma",
        date: "10 May 2026",
        amount: "₹5,999",
        status: "Pending",
    },
    {
        id: "#987656",
        product: "Keyboard",
        customer: "Neha Gupta",
        date: "8 May 2026",
        amount: "₹1,299",
        status: "Cancelled",
    },
];

const statusColor: any = {
    Shipped: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-600",
};

export default function DataTable() {
    return (
        <div className="mt-10 bg-white p-5 rounded-2xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Recent Orders
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="text-gray-500 border-b">
                            <th className="py-3">ID</th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, i) => (
                            <tr
                                key={i}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="py-3 font-medium text-gray-700">
                                    {item.id}
                                </td>
                                <td>{item.product}</td>
                                <td>{item.customer}</td>
                                <td>{item.date}</td>
                                <td className="font-medium">{item.amount}</td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[item.status]}`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}