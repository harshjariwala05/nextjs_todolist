import StatCard from "../StatCard";

export default function CustomerList({ customers }) {
    return (
        <div className="bg-[#FCFCFC] rounded-lg p-6 mb-2 w-full max-w-full overflow-x-auto shadow">
            <div className="flex items-center mb-8 gap-x-4 gap-y-3 min-h-10">

                {/* <div className="relative pl-8 leading-[1.6] w-4 h-8 rounded bg-orange-300 mr-auto text-[20px] font-[600]">Overview</div> */}
                <div className="relative flex items-center mr-auto">
                    <div className="bg-[#FFBC99] absolute w-4 h-8 rounded-sm"></div>
                    <div className="mr-auto relative pl-8 text-xl font-semibold leading-[1.6] ">Overview</div>
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
