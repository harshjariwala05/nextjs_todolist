export default function StatCard({ label, value, icon, change, positive }) {
    return (
        <div className="flex-1 bg-gray-100 rounded-xl p-4 shadow flex items-center gap-4">
            
            <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-500">{label}</span>
                <span className="text-4xl font-bold">{value}</span>
            </div>
            
        </div>
    );
}
