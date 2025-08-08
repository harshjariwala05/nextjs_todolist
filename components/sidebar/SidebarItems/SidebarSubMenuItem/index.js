export default function SidebarSubMenuItem({ sub, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center w-full h-10 px-2 py-2 whitespace-nowrap text-[14px] cursor-pointer rounded-md
        ${isActive ? 'bg-[#EFEFEF] text-black' : 'text-[#6F767E] hover:text-black'}
        transition-colors duration-200`}
        >
            <span>{sub.label}</span>
            {sub.badge && (
                <span
                    className={`ml-auto z-2 min-w-6 px-2 py-0.5 rounded-lg text-sm font-bold text-center leading-6  text-[#1A1D1F] ${sub.badgeColor}`}
                >
                    {sub.badge}
                </span>
            )}
        </div>
    );
}
