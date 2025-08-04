import { MdChatBubbleOutline } from "react-icons/md";
import { FaRegHeart, FaLink } from "react-icons/fa6";

export default function Comments() {
    const comments = [
        {
            user: {
                name: "Ethel",
                username: "@ethel",
                avatar: "https://ui8-core.herokuapp.com/img/content/avatar.jpg",
            },
            time: "1h",
            postTitle: "Smiles – 3D icons",
            message: "Great work 😊",
        },
        {
            user: {
                name: "Jazmyn",
                username: "@jaz.designer",
                avatar: "https://ui8-core.herokuapp.com/img/content/avatar-1.jpg",
            },
            time: "8h",
            postTitle: "Fleet - Travel shopping",
            message: "I need react version asap!",
        },
        {
            user: {
                name: "Ethel",
                username: "@ethel",
                avatar: "https://ui8-core.herokuapp.com/img/content/avatar-2.jpg",
            },
            time: "1h",
            postTitle: "Smiles – 3D icons",
            message: "How can I buy only the design?",
        },
    ];

    return (
        <div className="relative p-6 bg-[#FCFCFC] rounded-md shadow-sm w-full max-w-full overflow-x-auto mb-2">
            <div className="flex items-center mb-8">
                <div className="flex items-center mr-auto">
                    <div className="w-4 h-8 rounded bg-[#FFD88D] mr-3"></div>
                    <h1 className="text-2xl font-semibold text-[#1A1D1F]">Comments</h1>
                </div>
            </div>

            {comments.map((comment, index) => (
                <div
                    key={index}
                    className={`flex pb-6 mb-6 ${index < comments.length - 1 ? "border-b border-[#EFEFEF]" : ""}`}
                >
                    <div className="w-12 h-12 mr-3 shrink-0">
                        <img
                            src={comment.user.avatar}
                            className="w-full h-full rounded-full object-cover"
                            alt="avatar"
                        />
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                            <div>
                                <span className="font-semibold">{comment.user.name}</span>
                                <span className="text-sm font-medium text-[#9A9FA5] ml-1">{comment.user.username}</span>
                            </div>
                            <span className="text-xs font-semibold text-[#9A9FA5]">{comment.time}</span>
                        </div>

                        <div className="text-sm mb-1 font-medium text-[#9A9FA5]">
                            On <span className="font-bold text-[#1A1D1F]">{comment.postTitle}</span>
                        </div>

                        <div className="mb-4 font-medium text-[#1A1D1F]">{comment.message}</div>

                        <div className="flex justify-between items-center">
                            <MdChatBubbleOutline className="w-5 h-5 text-[#9A9FA5] hover:text-[#4A97FF] transition cursor-pointer" />
                            <FaRegHeart className="w-5 h-5 text-[#9A9FA5] hover:text-[#4A97FF] transition cursor-pointer" />
                            <FaLink className="w-5 h-5 text-[#9A9FA5] hover:text-[#4A97FF] transition cursor-pointer" />
                        </div>
                    </div>
                </div>
            ))}

            <button className="w-full mt-4 cursor-pointer text-black outline-1 outline-[#9b9c9d] font-bold px-4 py-2 rounded-md  hover:outline-2 hover:outline-black transition-colors">
                View All
            </button>
        </div>
    );
}