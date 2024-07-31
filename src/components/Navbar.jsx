import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-950 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo2} className="h-11" alt="Logo" />
        </div>
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex text-white gap-6 font-mono font-thin">
            <li className="cursor-pointer hover:underline">Men's</li>
            <li className="cursor-pointer hover:underline">Women's</li>
            <li className="cursor-pointer hover:underline">Customize</li>
            <li className="cursor-pointer hover:underline">Collections</li>
          </ul>
          <div className="flex items-center bg-transparent border border-white rounded-md p-2">
            <CiSearch className="text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white px-2 placeholder-gray-400"
            />
          </div>
            <div  >
            <FaShoppingBag className="text-white h-[100%] size-6" />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;