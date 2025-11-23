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



        
      </footer>
    </>
  );
};

export default Footer;
