import { useState } from "react";
import { RiVipDiamondLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneShop } from "react-icons/ai";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarSubMenuItem from "./SidebarSubMenuItem";
import { TbHomeFilled } from "react-icons/tb";

export default function SidebarItems({ isOpen, toggleSidebar }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState({});
  const [activeSubIndex, setActiveSubIndex] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const menuItems = [
    { icon: <TbHomeFilled />, label: "Home" },
    {
      icon: <RiVipDiamondLine />,
      label: "Products",
      submenu: [
        { label: "Dashboard" },
        { label: "Drafts", badge: 2, badgeColor: "bg-[#FFBC99]" },
        { label: "Released" },
        { label: "Comments" },
        { label: "Scheduled", badge: 8, badgeColor: "bg-[#B5E4CA]" },
      ],
    },
    {
      icon: <CgProfile />,
      label: "Customers",
      submenu: [{ label: "Overview" }, { label: "Customer list" }],
    },
    { icon: <AiTwotoneShop />, label: "Shop" },
    {
      icon: <CgProfile />,
      label: "Income",
      submenu: [{ label: "Overview" }, { label: "Customer list" }],
    },
    { icon: <AiTwotoneShop />, label: "Promote" },
  ];

  return (
    <div className="space-y-2 w-full mb-0">
      {menuItems.map((item, index) => {
        const isSubmenuOpen = openSubmenu[index] || false;
        const isMainItemActive =
          (activeIndex === index && activeSubIndex[index] === undefined) ||
          (activeSubIndex[index] !== undefined);

        return (
          <div key={index}>
            <SidebarMenuItem
              item={item}
              index={index}
              isOpen={isOpen}
              isActive={isMainItemActive}
              isSubmenuOpen={isSubmenuOpen}
              onClick={() => {
                setActiveIndex(index);
                setActiveSubIndex({});

                if (item.submenu) {
                  if (!isOpen) {
                    toggleSidebar();
                    setTimeout(() => {
                      setOpenSubmenu((prev) => ({ ...prev, [index]: true }));
                    }, 300);
                  } else {
                    toggleSubmenu(index);
                  }
                }
              }}
            />

            {item.submenu && isOpen && isSubmenuOpen && (
              <div className="pl-6 ml-2 border-l border-gray-300 space-y-1 mt-1">
                {item.submenu.map((sub, subIndex) => {
                  const isSubActive = activeSubIndex[index] === subIndex;
                  return (
                    <SidebarSubMenuItem
                      key={subIndex}
                      sub={sub}
                      isActive={isSubActive}
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveSubIndex({ ...activeSubIndex, [index]: subIndex });
                        if (isOpen) {
                          toggleSidebar();
                        }
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}