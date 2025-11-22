import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

import lat1 from "../../../public/Images/latest1.png";
import lat2 from "../../../public/Images/latest2.png";
import lat3 from "../../../public/Images/latest3.png";

const Latest = () => {
  return (
    <section className="w-full py-14">
      <h2 className="text-center text-2xl font-semibold text-[#1D293F] mb-10">
        Latest News
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* CARD 01 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
          
          <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
            <Image
              src={lat1}
              alt="Latest 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Date Badge */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md shadow-md rounded-md px-2 py-1 text-xs flex items-center gap-1">
              <FaRegCalendarAlt className="text-green-600 text-sm" />
              <span className="font-medium text-gray-700">23 Jan</span>
            </div>
          </div>

          <div className="p-4">
            <p className="text-[#1D293F] font-semibold leading-relaxed">
              Curabitur porttitor orci eget neque accumsan venenatis.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Nullam bibendum, sem ut posuere blandit, odio mauris sagittis felis.
            </p>

            <button className="mt-3 text-[#4CAF50] text-sm font-semibold group-hover:underline">
              Read More →
            </button>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Latest;
