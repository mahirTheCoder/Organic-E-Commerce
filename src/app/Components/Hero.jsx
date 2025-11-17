import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* BOX 1 */}
          <div className="flex items-center gap-4 p-10 bg-[#EDF2EE] shadow rounded-lg 
                          text-gray-800 transition-all duration-300 
                          hover:bg-green-500 hover:text-white cursor-pointer">
            <FaShippingFast className="text-4xl" />
            <div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-sm">Free shipping with discount</p>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="flex items-center gap-4 p-10 bg-[#EDF2EE]  shadow rounded-lg 
                          text-gray-800 transition-all duration-300 
                          hover:bg-green-500 hover:text-white cursor-pointer">
            <IoChatbubblesOutline className="text-4xl" />
            <div>
              <h3 className="font-semibold text-lg">Great Support 24/7</h3>
              <p className="text-sm">Instant access to Contact</p>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="flex items-center gap-10 p-6 bg-[#EDF2EE]  shadow rounded-lg 
                          text-gray-800 transition-all duration-300 
                          hover:bg-green-500 hover:text-white cursor-pointer">
            <MdOutlineSecurity className="text-4xl" />
            <div>
              <h3 className="font-semibold text-lg">100% Secure Payment</h3>
              <p className="text-sm">We ensure your money is safe</p>
            </div>
          </div>

          {/* BOX 4 */}
          <div className="flex items-center gap-4 p-10 bg-[#EDF2EE]  shadow rounded-lg 
                          text-gray-800 transition-all duration-300 
                          hover:bg-green-500 hover:text-white cursor-pointer">
            <RiRefund2Line className="text-4xl" />
            <div>
              <h3 className="font-semibold text-lg">Money-Back Guarantee</h3>
              <p className="text-sm">30 days money-back guarantee</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
