

import React from 'react';
import { assets } from "../assets/assets/assets";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={assets.logo} alt="Logo" className="h-10 w-auto object-contain" />

      </div>

      {/* Profile */}
      <div className="flex items-center space-x-4">
        <img
          src={assets.profile_image}
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
