import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

const Hero = () => {
  const features = [
    {
      icon: FaShippingFast,
      title: "Free Shipping",
      desc: "Free shipping with discount",
    },
    {
      icon: IoChatbubblesOutline,
      title: "Great Support 24/7",
      desc: "Instant access to Contact",
    },
    {
      icon: MdOutlineSecurity,
      title: "100% Secure Payment",
      desc: "We ensure your money is safe",
    },
    {
      icon: RiRefund2Line,
      title: "Money-Back Guarantee",
      desc: "30 days money-back guarantee",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-[#EDF2EE] shadow rounded-lg text-gray-800 transition-all duration-300 hover:bg-green-500 hover:text-white cursor-pointer"
              >
                {/* ICON */}
                <div className="flex-shrink-0">
                  <IconComponent className="text-4xl" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 hover:text-inherit mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Hero;
