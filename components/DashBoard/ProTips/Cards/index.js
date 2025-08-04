import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import {
    RiCalendarScheduleLine,
    RiCheckLine,
    RiPhoneLine,
} from "react-icons/ri";

export default function Card() {
    const cards = [
        {
            title: "Early access",
            label: "New",
            labelColor: "#CABDFF",
            time: "3 mins read",
            avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            icon: <RiCalendarScheduleLine className="text-xl font-bold" />,
        },
        {
            title: "Asset use guidelines",
            label: "Small label",
            labelColor: "#C6F6D5",
            time: "Time",
            avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            icon: <FaArrowRight className="text-xl font-bold" />,
        },
        {
            title: "Exclusive downloads",
            label: null,
            labelColor: null,
            time: "2 mins read",
            avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            icon: <FiDownload className="text-xl font-bold" />,
        },
        {
            title: "Behind the scenes",
            label: "Hot",
            labelColor: "#FECACA",
            time: "3 mins read",
            avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            icon: <MdOutlineEmergencyRecording className="text-xl font-bold" />,
        },
        {
            title: "Asset use guidelines",
            label: "Popular",
            labelColor: "#A1E3B5",
            time: "Time",
            avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            icon: <RiPhoneLine className="text-xl font-bold" />,
        },
        {
            title: "Life & work updates",
            label: null,
            labelColor: null,
            time: "3 mins read",
            avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            icon: <RiCheckLine className="text-xl font-bold" />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="flex items-center bg-[#FFFFFF] rounded-lg p-4 cursor-pointer"
                >
                    <div className="flex justify-center items-center w-16 h-16 mr-4 bg-[#FFFFFF] rounded-full border-2 border-[#EFEFEF]
                    hover:bg-[#F0F0F0] transition-colors">
                        {card.icon}
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-[#1A1D1F] mb-1">
                            {card.title}
                        </div>
                        <div className="flex items-center text-sm">
                            {card.label && (
                                <span
                                    className="px-2 py-0.5 rounded-md mr-2 text-xs font-bold leading-5"
                                    style={{ backgroundColor: card.labelColor }}
                                >
                                    {card.label}
                                </span>
                            )}
                            <div className="flex items-center text-gray-500 text-xs">
                                <img
                                    src={card.avatar}
                                    alt="avatar"
                                    className="w-5 h-5 rounded-full mr-1 object-cover"
                                />
                                {card.time}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};