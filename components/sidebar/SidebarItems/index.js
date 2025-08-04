import { FaHouse } from "react-icons/fa6";
import { RiVipDiamondLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

export default function SidebarItems({ isOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <FaHouse />, label: 'Home' },
    { icon: <RiVipDiamondLine />, label: 'Products' },
    { icon: <CgProfile />, label: 'Customers' }
  ];

  return (
    <div className="space-y-2">
      {menuItems.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <a
            key={index}
            href="#"
            onClick={() => setActiveIndex(index)}
            className={`flex w-full h-12 px-3 rounded-xl items-center gap-3 text-[15px] font-semibold 
              transition whitespace-nowrap
              ${isActive ? 'bg-[#EFEFEF] ' : ' hover:bg-[#f5f5f5]'}`}
          >
            <span className="text-2xl">{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
