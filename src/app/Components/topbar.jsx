import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";

const Topbar = () => {
  return (
    <section id="topbar" className="py-3 ">
      <div className="container mx-auto px-4 text-[#666666] flex flex-col sm:flex-row justify-between items-center gap-3">

        {/* Left: Location */}
        <div className="flex items-center gap-2 text-sm">
          <IoLocationOutline className="text-lg text-gray-600" />
          <span className="font-medium">
            Store Location: Lincoln-344, Illinois, Chicago, USA
          </span>
        </div>

        {/* Right: Options */}
        <div className="flex items-center gap-8">

          {/* Language + Country Select */}
          <div className="flex items-center gap-4">

            {/* Language Select */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent text-sm border border-gray-300 rounded-md px-3 py-1 pr-6 cursor-pointer outline-none hover:border-gray-400"
              >
                <option>English</option>
                <option>Bangla</option>
              </select>

              {/* Small Icon */}
              <IoChevronDownSharp
                size={12}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              />
            </div>

            {/* Country Select */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent text-sm border border-gray-300 rounded-md px-3 py-1 pr-6 cursor-pointer outline-none hover:border-gray-400"
              >
                <option>USA</option>
                <option>Bangladesh</option>
                <option>India</option>
              </select>

              {/* Small Icon */}
              <IoChevronDownSharp
                size={12}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              />
            </div>

          </div>

          {/* Login / Register */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="hover:text-black transition">Login</button>
            <button className="hover:text-black transition">Register</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Topbar;
