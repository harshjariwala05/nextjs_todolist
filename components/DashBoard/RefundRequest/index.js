import { IoBagOutline } from "react-icons/io5";

export default function RefundRequest() {
    return (
        <div className="bg-[#FCFCFC] rounded-md p-6 shadow relative">
            <div className="flex items-center mb-8 min-h-10 ">
                <div className="flex items-center mr-auto relative ">
                    <div className="w-4 h-8 rounded bg-[#FFBC99] mr-3"></div>
                    <h1 className="text-2xl font-semibold text-[#1A1D1F]">Refund Requests</h1>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex">
                        <div className="flex justify-center items-center w-12 h-12 mr-3 bg-[#FFE7E4] rounded-[50%]">
                            <IoBagOutline className="w-6 h-6 text-[#FF6B6B]" />
                        </div>
                        <div className="font-[500] text-[#6F767E]">
                            You have
                            <span className="font-[500] text-[#1A1D1F]">52 open refund requests</span>
                            to action. This includes
                            <span className="font-[500] text-[#1A1D1F]" >8 new requests</span>. 👀
                        </div>
                    </div>
                </div>
                <button className="w-full mt-6 cursor-pointer text-black outline-1 outline-[#9b9c9d] font-bold px-4 py-2 rounded-md  hover:outline-2 hover:outline-black transition-colors">
                    Review refund requests
                </button>
            </div>
        </div>
    );
}