import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }: any) {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1">
                <Navbar />
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    );
}