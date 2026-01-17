import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets/assets";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { StoreContext } from "../context/Storecontext";
const NavBar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

const navigate=useNavigate();

const logout=()=>{
  localStorage.removeItem("token")
  setToken("")
  navigate("/")
}

  return (
    <div
      className="flex items-center  justify-between  py-4 mb-5
 text-sm"
    >
      {/* Logo */}
      <Link to={"/"}>
        {" "}
        <img
          src={assets.logo}
          className="w-16 md:w-28 lg:w-34 xl:w-44 cursor-pointer  "
          alt="Logo"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:text-sm  md:flex items-start gap-5 font-medium">
        {[
          { label: "HOME", to: "/" },
          { label: "MENU", to: "/menu" },
          { label: "DONATE", to: "/mobileApp" },
          { label: "CONTACT US", to: "/contactus" },
        ].map((link) => (
          <li key={link.to} className="text-center hidden md:flex relative">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-3/5 after:bg-primary after:content-['']"
                  : "text-black"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Search and Basket */}
      <div className="flex gap-[40px] items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:hidden   lg:hidden xl:flex px-2 py-1 border border-gray-300 rounded-md"
        />
  <Link to="/chat">
  <IoChatboxOutline className="text-2xl cursor-pointer hover:text-primary transition" />
</Link>

        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              className="cursor-pointer w-4 sm:w-5 md:w-6 lg:w-6"
              alt="Basket"
            />
          </Link>

          <div
            className={`min-w-[10px] min-h-[10px] absolute -top-[8px] -right-[8px] rounded-full transition-all duration-300 ${
              getTotalCartAmount() === 0 ? "hidden" : "bg-red-600"
            }`}
          ></div>
        </div>
{!token ? (
    <button
      onClick={() => setShowLogin(true)}
      className="px-4 py-2 rounded-full border border-orange-400 text-gray-600 hover:bg-orange-100 transition-all duration-200 text-sm md:text-base"
    >
      Sign In
    </button>
  ) : (
    <div className="relative group mr-5">
      <img
        src={assets.profile_icon}
        alt="Profile"
        className="w-6  rounded-full cursor-pointer"
      />
      <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <img src={assets.bag_icon} alt="Cart" className="w-4 h-4" />
          <span>Cart</span>
        </li>
        <hr className="my-1" />
        <li onClick={logout} className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <img src={assets.logout_icon} alt="Logout" className="w-4 h-4" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )}
      
      </div>

      {/* Sign In Button */}
    </div>
  );
};

export default NavBar;
