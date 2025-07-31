// components/SidebarMenu.jsx
import { FaHome, FaBox, FaUsers, FaChartBar } from 'react-icons/fa';

export default function SidebarItems({ open }) {
  const menuItems = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaBox />, label: 'Products' },
    { icon: <FaUsers />, label: 'Customers' }
  ];

  return (
    <div className="space-y-2">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <span className="text-2xl">{item.icon}</span>
          {open && <span className='text-lg'>{item.label}</span>}
        </a>
      ))}
    </div>
  );
}
