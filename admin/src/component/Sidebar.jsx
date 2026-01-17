
import React from "react";
import { assets } from "../assets/assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-64 h-screen bg-white shadow-md px-4 py-6">
      <div className="space-y-4">
        {/* Add Items */}
        <NavLink to={"/add-items"} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
          <img src={assets.add_icon} alt="Add" className="h-6 w-6" />
          <p className="text-gray-700 font-medium">Add Items</p>
        </NavLink >

        {/* List Items */}
        <NavLink to={"/list-items" } className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
          <img src={assets.order_icon} alt="List" className="h-6 w-6" />
          <p className="text-gray-700 font-medium">List Items</p>
        </NavLink >

        {/* Orders */}
        <NavLink to={"/orders"} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
          <img src={assets.add_icon} alt="Orders" className="h-6 w-6" />
          <p className="text-gray-700 font-medium">Orders</p>
        </NavLink >
      </div>
    </div>
  );
};

export default Sidebar;
