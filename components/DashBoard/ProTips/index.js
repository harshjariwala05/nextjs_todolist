import { RiCalendarScheduleLine } from "react-icons/ri";
import Card from "./Cards";

export default function ProTips() {
    return (
        <div className="bg-[#FCFCFC] rounded-xl p-6 shadow relative mb-2">
            <div className="flex flex-wrap items-center mb-8 gap-x-4 gap-y-3 min-h-10 ">
                <div className="flex items-center mr-auto relative ">
                    <div className="w-4 h-8 rounded bg-[#B5E4CA] mr-3"></div>
                    <h1 className="text-2xl font-semibold text-[#1A1D1F]">Pro Tips</h1>
                </div>
            </div>
            <div className="mb-6 text-[#6F767E] font-semibold">
                Need some ideas for the next product?
            </div>
            <Card />
        </div>
    );
}