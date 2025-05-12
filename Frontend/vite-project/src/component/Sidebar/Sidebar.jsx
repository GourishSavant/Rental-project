import React from "react";
import { NavLink } from "react-router-dom";
import { Home, CalendarToday, TableChart, Storefront } from "@mui/icons-material";

const sidebarItems = [
  { name: "Dashboard", icon: <Home />, path: "/" },
  { name: "Calendar", icon: <CalendarToday />, path: "/calendar" },
  { name: "Table List", icon: <TableChart />, path: "/table-list" },
  { name: "Product", icon: <Storefront />, path: "/product" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1D1B48] text-white  space-y-6 ">
     
      <nav className="space-y-4">
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 font-semibold px-2 py-1 rounded ${
                isActive ? "bg-white text-[#1D1B48]" : "text-white"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
