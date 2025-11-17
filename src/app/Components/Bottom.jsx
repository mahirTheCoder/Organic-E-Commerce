import React from "react";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Bottom = () => {
  return (
    <>
      <style>
        {`
          select, option {
            border: none !important;
            outline: none !important;
          }
        `}
      </style>

      <div id="Bottom" className="w-full bg-[#EDF2EE]">
        <div className="container mx-auto px-4">
          
          <div className="
            flex flex-col 
            sm:flex-row 
            justify-between 
            items-center 
            gap-4 
            py-4
          ">
            
            {/* LEFT MENU — Visible on tablet & desktop */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm">

              {/* Main Category Dropdown */}
              <div className="relative flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-full">
                <FaBars className="text-white" />

                <select className="appearance-none bg-transparent text-white pr-4 cursor-pointer">
                  <option>Categories</option>
                  <option>Home</option>
                  <option>Shop</option>
                  <option>Pages</option>
                  <option>Blog</option>
                </select>

                <FaChevronDown className="absolute right-3 text-[10px]" />
              </div>

              {/* Smaller Category Menus (only on large screens) */}
              <div className="hidden lg:flex items-center gap-5">

                {["Home", "Shop", "Pages", "Blog"].map((item, i) => (
                  <div key={i} className="relative flex items-center">
                    <select className="appearance-none bg-transparent text-gray-700 cursor-pointer pr-5">
                      <option>{item}</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>

                    <FaChevronDown className="absolute right-1 text-[10px] text-gray-600" />
                  </div>
                ))}

              </div>

              {/* Static Text */}
              <p className="cursor-pointer hover:text-green-600">About Us</p>
              <p className="cursor-pointer hover:text-green-600">Contact</p>
            </div>

            {/* RIGHT CONTACT — Always visible */}
            <div className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-green-700" />
              <span className="font-medium text-gray-900">01897277518</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Bottom;
