import StatCard from "../StatCard";

export default function CustomerList({ customers }) {
    return (
        <div className=" h-100 bg-[#FFFFFF] rounded-xl p-6 shadow">
            <div className="flex gap-4 mb-8">
                <StatCard label="Customers" value="1024" />
                <StatCard label="Income" value="256k" />
            </div>
            <p className="mb-8   text-gray-700">
                Welcome <span className="font-semibold">{customers.length}</span> customers with a personal message
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
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
