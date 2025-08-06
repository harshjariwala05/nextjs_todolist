import { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import CustomerList from "../CustomerList";
import BasicLineChart from "../BasicLineChart";

export default function StatCards({ customers }) {
   const [activeCard, setActiveCard] = useState("customer");

   return (
      <div className="bg-[#FCFCFC] rounded-lg p-6 mb-2 w-full max-w-full overflow-x-hidden shadow">
         <div className="flex flex-wrap justify-between items-center mb-7 gap-x-4 gap-y-3">
            <div className="flex items-center">
               <div className="w-4 h-8 rounded bg-[#FFBC99] mr-3"></div>
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
         <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 mb-8 p-2 bg-[#F4F4F4] rounded-[20px]">
            <div
               onClick={() => setActiveCard("customer")}
               className={`cursor-pointer w-full sm:w-1/2 flex items-center justify-between rounded-xl text-[#1A1D1F] py-5 px-4 transition duration-300 ease-in-out select-none
               ${activeCard === "customer" ? "bg-[#FCFCFC]" : "bg-[#F4F4F4]"}
            `}
            >
               <div className="hidden sm:flex items-center justify-center shrink-0 w-10 h-10 mr-4 rounded-full bg-[#B1E5FC]">
                  <CgShoppingBag className="w-6 h-6 fill-[#1A1D1F]" />
               </div>

               <div className="flex-1">
                  <div className="flex items-center mb-1 text-[13px] font-semibold text-[#6F767E]">
                     Customers
                     <AiFillInfoCircle className="ml-1 w-4 h-4 fill-[#9A9FA5]" />
                  </div>
                  <div className="text-5xl font-semibold leading-[1]">1024</div>
               </div>

               <div className="flex items-center text-xs font-bold bg-[#FFE7E4] h-6 px-1 rounded-lg text-[#FF6A55] ml-2">
                  <AiOutlineArrowDown className="w-4 h-4 mr-1 fill-[#FF6A55]" />
                  37.8%
               </div>
            </div>

            <div
               onClick={() => setActiveCard("income")}
               className={`cursor-pointer w-full sm:w-1/2 flex items-center justify-between rounded-xl text-[#1A1D1F] py-5 px-4 transition duration-300 ease-in-out select-none
               ${activeCard === "income" ? "bg-[#FCFCFC]" : "bg-[#F4F4F4]"}
            `}
            >
               <div className="hidden sm:flex items-center justify-center shrink-0 w-10 h-10 mr-4 rounded-full bg-[#CABDFF]">
                  <BsGraphUp className="w-6 h-6 fill-[#1A1D1F]" />
               </div>

               <div className="flex-1">
                  <div className="flex items-center mb-1 text-[13px] font-semibold text-[#6F767E]">
                     Income
                     <AiFillInfoCircle className="ml-1 w-4 h-4 fill-[#9A9FA5]" />
                  </div>
                  <div className="text-5xl font-semibold leading-[1]">256k</div>
               </div>

               <div className="flex items-center text-xs font-bold bg-[#EAFAE5] h-6 px-1 rounded-lg text-[#83BF6E] ml-2">
                  <AiOutlineArrowUp className="w-4 h-4 mr-1 fill-[#83BF6E]" />
                  37.8%
               </div>
            </div>
         </div>

         {activeCard === "customer" ? (<CustomerList customers={customers} />) : (<BasicLineChart />)}
      </div>
   );
}