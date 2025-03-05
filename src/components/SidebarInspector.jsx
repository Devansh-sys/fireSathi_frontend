import { useState } from "react";
import { FaBars, FaClipboardList, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SidebarInspector({ selectedMenu, setSelectedMenu }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Pending Inspections", icon: <FaClipboardList /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
  ];

  return (
    <div className={`h-screen bg-white shadow-lg p-4 flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-6 text-gray-600 hover:text-blue-500 transition self-end"
      >
        <FaBars size={20} />
      </button>

      {/* Navigation Items */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelectedMenu(item.name)}
            className={`flex items-center gap-4 p-4 rounded-lg text-lg font-medium transition cursor-pointer border-l-4 ${
              selectedMenu === item.name
                ? "bg-blue-100 text-blue-500 border-blue-500"
                : "text-gray-600 border-transparent hover:bg-gray-100"
            } ${isCollapsed ? "justify-center" : ""}`}
          >
            {item.icon} {!isCollapsed && <span>{item.name}</span>}
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        className="flex items-center gap-4 p-4 rounded-lg text-lg font-medium text-red-500 hover:bg-red-100 transition cursor-pointer w-full border-l-4 border-transparent"
      >
        <FaSignOutAlt /> {!isCollapsed && <span>Logout</span>}
      </button>
    </div>
  );
}
