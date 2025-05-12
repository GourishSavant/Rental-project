// components/Navbar.jsx
import React from "react";
import { Search, Bell, UserCircle2, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-[#1D1B36]  items-center w-full h-20 ">
      <h1 className="text-2xl font-semibold text-white pl-10">Rental Car</h1>
      <div className="flex items-center gap-14">
        <Search className="text-white w-8 h-8" />
        <Bell className="text-white w-8 h-8" />
        <UserCircle2 className="text-white w-10 h-10" />
        <Menu className="text-white w-8 h-8" />
      </div>
    </div>
  );
}

