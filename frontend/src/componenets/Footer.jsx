import React from "react";
import { assets } from "../assets/assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-10 mt-[100px] pt-20 px-20 pb-10">
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 max-w-6xl">
        {/* Left */}
        <div className="flex-1">
          <img src={assets.logo} alt="Logo" className="mb-4" />
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            voluptas recusandae, officiis modi corporis cumque blanditiis
            ratione sed, nulla aut odit sit totam natus? Totam vitae soluta
            mollitia ex minima.
          </p>
          <div className="flex gap-3">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6" />
          </div>
        </div>

        {/* Center */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm">
            <li>+91-6205115097</li>
            <li>kumarraj@12356gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full border-t border-gray-600 mt-10" />
      <p className="text-xs text-gray-400 mt-4">© 2025 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;




