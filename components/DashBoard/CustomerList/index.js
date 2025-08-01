import StatCard from "../StatCard";

export default function CustomerList({ customers }) {
    return (
        <div className=" h-[550px] bg-[#FFFFFF] rounded-xl p-6 mb-2 shadow">
            <div className="flex flex-wrap justify-between items-center mb-7 gap-x-4 gap-y-3">
                <div className="flex items-center">
                    <div className="w-4 h-8 rounded bg-orange-300 mr-3"></div>
                    <h1 className="text-2xl font-semibold text-[#1A1D1F]">Overview</h1>
                </div>

                <div>
                    <select className="border border-gray-200 rounded-md px-4 py-2 text-sm font-medium text-[#1A1D1F] focus:outline-1 focus:ring-1 focus:ring-black">
                        <option>All time</option>
                        <option>In a year</option>
                        <option>Per month</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-4 mb-8">
                <StatCard />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div className="text-[#6F767E] max-w-[240px]">
                    <p className="mb-4 text-gray-700">
                        Welcome <span className="font-semibold">857 customers</span> with a personal message 😎
                    </p>
                </div>

                <div>
                    <button className=" text-black outline-1 outline-[#9b9c9d] font-bold px-4 py-2 rounded-md  hover:outline-2 hover:outline-black transition-colors">
                        Send Message
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-8">
                {customers.map((val, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center text-center cursor-pointer"
                    >
                        <img
                            src={val.image}
                            alt={val.name}
                            className="w-16 h-16 rounded-full mb-2"
                        />
                        <span className="text-[13px] font-medium leading-[1.23] text-[#1A1D1F]">
                            {val.name}
                        </span>
                    </div>
                ))}

                <div className="flex flex-col items-center justify-center text-center cursor-pointer text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-2 text-lg">
                        →
                    </div>
                    <span className="text-[13px] font-medium leading-[1.23]">View all</span>
                </div>
            </div>
        </div>
    );
}
