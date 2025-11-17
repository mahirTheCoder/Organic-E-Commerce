"use client";

import React, { useState } from "react";
import logo from "../../../public/Images/logo.png";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Shop", "About", "Contact"];

  return (
    <header id="header" className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="logo shrink-0">
            <Image src={logo} alt="logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-green-600"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search (desktop) */}
          <div className="hidden md:flex items-center pl-5 gap-3 bg-white rounded-lg border border-gray-300 max-w-md flex-1 md:flex-initial">
            <FaSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search now..."
              className="flex-1 outline-none rounded-md py-1"
            />
            <button className="bg-green-600 text-white px-5 py-2">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-[22px] text-black hover:text-green-500">
              <CiHeart />
            </div>
            <div className="flex gap-1 items-center">
              <div className="text-[20px] text-black">
                <HiOutlineShoppingBag />
              </div>
              <div className="text">
                <p className="text-xs text-gray-400">Cart</p>
                <h1 className="text-sm font-bold text-black">$57.00</h1>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-2xl"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mt-3 transition-all duration-200 ${
            open ? "max-h-96" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search now..."
                className="flex-1 outline-none rounded-md py-1 border border-gray-200 px-2"
              />
              <button className="bg-green-600 text-white px-4 py-1 rounded">
                Search
              </button>
            </div>

            <div className="flex items-center gap-4 mt-3">
              <CiHeart />
              <HiOutlineShoppingBag />
              <span className="ml-auto font-bold">$57.00</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
