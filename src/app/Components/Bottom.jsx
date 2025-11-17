import React from "react";
import { FaBars } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Bottom = () => {
  return (
    <>
      <style>
        {`
          /* Remove border from select + option */
          select, option {
            border: none !important;
            outline: none !important;
          }
        `}
      </style>

      <div
        id="Bottom"
        className="w-full h-[135px] bg-[#EDF2EE] flex items-center"
      >
        <div className="container mx-auto">
          <div className="bottomsItems flex justify-between items-center">

            {/* LEFT MENU AREA */}
            <div className="menuItems flex items-center gap-10">

              {/* ALL CATEGORY SELECT + MENU ICON */}
              <div className="flex items-center gap-2 bg-green-400 py-5 px-5 rounded-4xl relative">
                <FaBars className="text-gray-700 text-lg" />

                <select className="appearance-none bg-transparent outline-none text-gray-700 cursor-pointer text-sm pr-4">
                  <option>All Categories</option>
                  <option>Home</option>
                  <option>Shop</option>
                  <option>Pages</option>
                  <option>Blog</option>
                </select>

                <FaChevronDown className="absolute right-3 text-gray-700 text-[10px]" />
              </div>

              {/* OTHER SMALL DROPDOWNS */}
              {["Home", "Shop", "Pages", "Blog"].map((item, index) => (
                <div key={index} className="flex items-center gap-2 relative">
                  <select className="appearance-none bg-transparent outline-none text-gray-700 cursor-pointer text-sm pr-4">
                    <option>{item}</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <FaChevronDown className="absolute right-1 text-gray-700 text-[10px]" />
                </div>
              ))}

              {/* NORMAL TEXT ITEMS */}
              <p className="text-gray-800 cursor-pointer">About Us</p>
              <p className="text-gray-800 cursor-pointer">Contact</p>
            </div>

            {/* RIGHT CONTACT AREA */}
            <div className="contact flex items-center gap-2">
              <FaPhoneAlt className="text-green-700 text-sm" />
              <span className="text-gray-800 font-medium">01897277518</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
