import React from "react";
import banner from "../../../public/Images/Image.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section id="Banner">
        <div className="container">
          <div className="banner-content mt-[68px] flex justify-between items-center ">
            <div className="img-part">
              <Image src={banner} alt="banner img" />
            </div>
            <div className="contentpart">
              <p className="text-sm  text-green-500 font-normal mb-2">
                Welcome to shopery
              </p>
              <h2 className=" w-[536px] text-[56px] text-black font-semibold pb-5 ">
                Fresh & Healthy Organic Food
              </h2>

              <p className="text-sm  text-black font-normal mb-8">
                Free shipping on all your order. we deliver, you enjoy
              </p>

              <button className="py-3 px-6 bg-green-500 rounded-4xl flex gap-2 items-center text-white">Shop now <span><FaArrowRightLong /></span>  </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
