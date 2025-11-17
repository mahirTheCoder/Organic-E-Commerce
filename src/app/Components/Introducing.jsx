import React from "react";
// import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

const Introducing = () => {
  const filterButtons = [
    "All",
    "Vegetable",
    "Fruit",
    "Meat & Fish",
    "View All",
  ];
  const products = [
    { name: "Green Apple", price: "$14.99", rating: 4 },
    { name: "Fresh Carrot", price: "$8.99", rating: 5 },
    { name: "Red Tomato", price: "$6.99", rating: 4 },
    { name: "Organic Chicken", price: "$18.99", rating: 5 },
  ];

  return (
    <section id="Introducing" className="py-6 sm:py-10 lg:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Introducing Our Products
          </h2>
        </div>
        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 lg:gap-5 pb-8 mt-4 text-xs sm:text-sm font-semibold text-gray-600 flex-wrap">
          {filterButtons.map((btn, idx) => (
            <button
              key={idx}
              className={`px-3 sm:px-4 py-1 sm:py-2 transition ${
                idx === 0
                  ? "text-green-600 border-b-2 border-green-600"
                  : "hover:text-green-600"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative bg-gray-100 h-32 sm:h-40 rounded-md mb-3 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image</span>
              </div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">
                  {product.name}
                </h3>
                <AiOutlineHeart className="text-lg sm:text-xl cursor-pointer hover:text-red-500 shrink-0" />
              </div>
              <p className="text-green-600 font-bold text-sm sm:text-base mb-2">
                {product.price}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 text-xs sm:text-sm">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </span>
                <IoBagHandleOutline className="text-lg sm:text-xl cursor-pointer hover:text-green-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introducing;
