"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiLeaf } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#111] text-white py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ---------- Logo & Text ---------- */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div>
                <h2 className="text-2xl font-bold tracking-wide">
                  Ecobazar
                </h2>
       
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-6 mb-5">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl">
              <a className="hover:text-green-500 cursor-pointer"><FaFacebookF /></a>
              <a className="hover:text-green-500 cursor-pointer"><FaTwitter /></a>
              <a className="hover:text-green-500 cursor-pointer"><FaPinterestP /></a>
              <a className="hover:text-green-500 cursor-pointer"><FaInstagram /></a>
            </div>
          </div>

          {/* ---------- My Account ---------- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-green-500 cursor-pointer">My Account</li>
              <li className="hover:text-green-500 cursor-pointer">Order History</li>
              <li className="hover:text-green-500 cursor-pointer">Shoping Cart</li>
              <li className="hover:text-green-500 cursor-pointer">Wishlist</li>
            </ul>
          </div>

          {/* ---------- Helps ---------- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Helps</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-green-500 cursor-pointer">Contact</li>
              <li className="hover:text-green-500 cursor-pointer">Faqs</li>
              <li className="hover:text-green-500 cursor-pointer">Terms & Condition</li>
              <li className="hover:text-green-500 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* ---------- Download Mobile App ---------- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Mobile App</h3>

            <div className="space-y-3">
              <button className="flex items-center gap-3 bg-[#222] py-2 px-4 rounded-md border border-gray-700 hover:border-green-500 w-44">
                <FaApple className="text-2xl" />
                <div className="text-left text-sm leading-4">
                  <span className="text-xs">Download on the</span>
                  <br />
                  <span className="font-semibold">App Store</span>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-[#222] py-2 px-4 rounded-md border border-gray-700 hover:border-green-500 w-44">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left text-sm leading-4">
                  <span className="text-xs">Download on the</span>
                  <br />
                  <span className="font-semibold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>



        
      </footer>
    </>
  );
};

export default Footer;
