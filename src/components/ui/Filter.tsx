"use client";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function Filter({ value, onChange }: Props) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Range:</span>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   hover:border-gray-300 transition cursor-pointer"
            >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="180">Last 6 Months</option>
            </select>
        </div>
    );
}