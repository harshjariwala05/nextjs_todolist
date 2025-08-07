import { FaArrowRightLong } from 'react-icons/fa6';

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
                        className="group flex flex-col items-center justify-center text-center cursor-pointer p-3 rounded-lg     transition-colors duration-300"
                    >
                        <img
                            src={val.image}
                            alt={val.name}
                            className="w-16 h-16 rounded-full mb-2 shadow-sm group-hover:shadow-lg transition-shadow duration-300"
                        />
                        <span className="text-[13px] font-medium leading-[1.23] text-[#1A1D1F] group-hover:text-[#5985FF]">
                            {val.name}
                        </span>
                    </div>
                ))}


                <div className="flex flex-col items-center justify-center text-center cursor-pointer text-gray-500 hover:text-[#155DFC] transition-colors duration-300 ease-in-out">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EFEFEF] mb-2 text-lg transition-all duration-300 ease-in-out hover:outline-2 hover:outline-[#155DFC] hover:bg-[#EFF6FF] hover:text-[#155DFC] shadow-sm hover:shadow-md">
                        <FaArrowRightLong />
                    </div>
                    <span className="text-[13px] font-medium leading-[1.23] transition-all duration-300 ease-in-out">
                        View all
                    </span>
                </div>

            </div>
        </div>
    );
}
