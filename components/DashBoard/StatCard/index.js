import { CgShoppingBag } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";

export default function StatCard() {
    return (
        <div className="w-full px-2 sm:px-4 md:px-6">
            <div className="flex flex-wrap justify-between sm:gap-2 md:gap-4">

                <div className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] min-w-[160px] flex items-center justify-between p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full text-2xl">
                            <CgShoppingBag />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Customers</p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">1024</h3>
                        </div>
                    </div>
                </div>

                <div className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] min-w-[160px] flex items-center justify-between p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full text-2xl">
                            <BsGraphUp />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Income</p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">256k</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}