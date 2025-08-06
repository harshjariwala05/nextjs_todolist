export default function CustomerList({ customers }) {
    return (
        <div className="bg-[#FCFCFC] rounded-lg p-6 mb-2 w-full max-w-full overflow-x-auto transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div className="text-[#6F767E] max-w-[240px]">
                    <p className="mb-4 text-gray-700">
                        Welcome <span className="font-semibold text-[#111]">857 customers</span> with a personal message 😎
                    </p>
                </div>

                <div>
                    <button className="text-black border border-[#9b9c9d] font-bold px-4 py-2 rounded-md transition-all duration-300 hover:border-black hover:shadow-md hover:scale-105">
                        Send Message
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-8">
                {customers.map((val, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-md p-3 rounded-lg"
                    >
                        <img
                            src={val.image}
                            alt={val.name}
                            className="w-16 h-16 rounded-full mb-2 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        />
                        <span className="text-[13px] font-medium leading-[1.23] text-[#1A1D1F]">
                            {val.name}
                        </span>
                    </div>
                ))}

                <div className="flex flex-col items-center justify-center text-center cursor-pointer text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-2 text-lg transition-all duration-300 hover:bg-blue-100 hover:scale-110">
                        →
                    </div>
                    <span className="text-[13px] font-medium leading-[1.23]">View all</span>
                </div>
            </div>
        </div>
    );
}
