// components/SidebarMenu.jsx
import { FaHome, FaBox, FaUsers, FaChartBar } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { RiVipDiamondLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function SidebarItems({ isOpen }) {
  const menuItems = [
    { icon: <FaHouse />, label: 'Home' },
    { icon: <RiVipDiamondLine />, label: 'Products' },
    { icon: <CgProfile />, label: 'Customers' }
  ];

  return (
    <div className="space-y-5">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <span className="text-2xl">{item.icon}</span>
          {isOpen && <span className='text-md font-semibold'>{item.label}</span>}
        </a>
      ))}
    </div>
  );
}
