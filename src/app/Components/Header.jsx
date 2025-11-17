import React from "react";
import logo from "../../../public/Images/logo.png";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section id="hedaer" className="py-7">
        <div className="container">
          <div className="nav-rows flex justify-between items-center">
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>

            {/* --------search icon -------- */}

            <div className="menu-search flex items-center pl-5 gap-3 bg-white  rounded-lg border border-gray-300 w-full max-w-md">
              {/* Search Icon */}
              <FaSearch className="text-gray-500 text-lg" />

              {/* Input */}
              <input
                type="text"
                placeholder="Search now..."
                className="flex-1 outline-none  rounded-md  py-1"
              />

              {/* Search Button */}
              <button className="bg-green-600 text-white  px-5 py-3  ">
                Search
              </button>
            </div>

            <div className="favIcon flex gap-4 ">
              <div className="favouriteIcon text-[38px] text-black duration-700 hover:text-green-500">
                <CiHeart />
              </div>
              <div className="cartIconWithText flex gap-1 items-center">
                <div className="cartIcon text-[34px] text-black  ">
                  <HiOutlineShoppingBag />
                </div>
                <div className="text">
                  <p className="text-xs font-normal text-gray-400 mb-1                    ">
                    Shopping cart:
                  </p>
                  <h1 className="text-sm font-bold text-black ">$57.00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
