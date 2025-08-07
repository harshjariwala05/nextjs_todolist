import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
export default function Ads() {
    const socialLinks = [
        {
            label: "Facebook",
            icon: <FaFacebookF className="w-5 h-5 text-gray-600" />,
        },
        {
            label: "Twitter",
            icon: <FaXTwitter className="w-5 h-5 text-gray-600" />,
        },
        {
            label: "Instagram",
            icon: <FaInstagram className="w-5 h-5 text-gray-600" />,
        },
    ];
    return (
        <div className="relative bg-[#FCFCFC] rounded-lg p-6 w-full max-w-full overflow-x-hidden shadow mb-2">
            <div className="flex items-center mb-8 min-h-[40px]">
                <div className="flex items-center mr-auto">
                    <div className="w-4 h-8 rounded bg-[#B1E5FC] mr-3"></div>
                    <h1 className="text-2xl font-semibold text-[#1A1D1F]">Get more customers!</h1>
                </div>
            </div>
            <div>
                <div className="mb-4 font-[600] text-[#6F767E]">
                    50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings right now! 🔥
                </div>
                <div className="flex mx-12 gap-4 justify-around items-center">
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            target="_blank"
                            rel="noopener"
                            className="flex w-full justify-center items-center px-5 py-2 mx-2 rounded-xl text-gray-800 hover:outline-2 hover:outline-black transition"
                            style={{
                                boxShadow: "inset 0 0 0 2px #EFEFEF",
                            }}
                        >
                            <span className="mr-2">{item.icon}</span>
                            <span className="font-semibold text-sm">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}