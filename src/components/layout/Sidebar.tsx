export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col justify-between">
            <div>
                <h1 className="text-xl font-bold mb-8 tracking-wide">SaaS Dashboard</h1>

                <ul className="space-y-3">
                    <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition">
                        Dashboard
                    </li>
                    <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition">
                        Users
                    </li>
                    <li className="hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition">
                        Revenue
                    </li>
                </ul>
            </div>

            <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-sm">Tanmay</p>
            </div>
        </div>
    );
}