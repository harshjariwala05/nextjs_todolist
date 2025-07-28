"use client";
export default function Assignee({ value, onChange, assignees }) {
    return (
        <div className="space-y-1 mt-1">
            <select
                className="w-full px-3 py-2 border-[#8E939B] text-gray-900 placeholder-gray-500 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Select Assignee</option>
                {assignees.map((value) => (
                    <option key={value.name} value={value.name}>
                        {value.name}
                    </option>
                ))}
            </select>
        </div>
    );
}