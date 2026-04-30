export default function Card({ title, value }: any) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <p className="text-sm text-gray-500 mb-1">{title}</p>
            <h2 className="text-2xl font-semibold text-gray-900">{value}</h2>
        </div>
    );
}