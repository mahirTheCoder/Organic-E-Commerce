import React from "react";
import Image from "next/image";
import banner from "../../../public/Images/Image.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section id="Banner" className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 mt-10">

          {/* Text Section */}
          <div className="contentpart w-full lg:w-1/2 max-w-[600px] text-center lg:text-left">
            <p className="text-sm text-green-500 mb-2">Welcome to Shopery</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight mb-5">
              Fresh & Healthy Organic Food
            </h2>

            <p className="text-sm lg:text-base text-gray-700 mb-8">
              Free shipping on all your orders. We deliver, you enjoy.
            </p>

            <button className="py-3 px-6 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center lg:justify-start gap-2 text-white text-base mx-auto lg:mx-0 shadow-md transition-all duration-200">
              Shop now
              <FaArrowRightLong />
            </button>
          </div>

          {/* Image Section */}
          <div className="img-part w-full lg:w-1/2 flex justify-center">
            <Image
              src={banner}
              alt="Banner"
              className="w-52 sm:w-64 md:w-80 lg:w-[430px] h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
