export default function SidebarSubMenuItem({ sub, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center w-full h-10 px-2 py-2 whitespace-nowrap text-[14px] cursor-pointer rounded-md
        ${isActive ? 'bg-[#EFEFEF] text-black' : 'text-[#6F767E] hover:text-black'}`}
        >
            <span>{sub.label}</span>
            {sub.badge && (
                <span
                    className={`ml-auto px-2 py-0.5 rounded-md text-xs font-medium text-[#1A1D1F] ${sub.badgeColor}`}
                >
                    {sub.badge}
                </span>
            )}
        </div>
    );
}
