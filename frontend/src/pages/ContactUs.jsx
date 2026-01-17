import React from "react";

import { assets } from "../assets/assets/assets";

const ContactUs = () => {
  return (
    <div className=" min-h-screen">
      {/* Navbar */}

      {/* Main Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10">
        {/* Heading */}
        <div className="text-center text-3xl font-semibold text-gray-600 mb-10">
          CONTACT <span className="text-orange-600">US</span>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 bg-white p-6 sm:p-10 rounded-xl ">
          {/* Left: Info */}
          <div className="flex flex-col justify-center gap-6 text-gray-600 w-full md:w-1/2">
            <div>
              <h3 className="text-lg font-semibold">OUR OFFICE</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                00000 Willms Station <br />
                Suite 000, Washington, USA
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Tel: (000) 000-0000 <br />
                Email: kumarrajnish28443@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4">
                CAREERS AT PRESCRIPTO
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Learn more about our teams and job openings.
              </p>
            </div>

            <button className="mt-2 w-max border border-orange-600 px-6 py-2 rounded-md text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full bg-white rounded-lg shadow-md"
              src={assets.cont}
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
