import React from "react";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Introducing = async () => {
  // API FETCH
  const res = await fetch("https://dummyjson.com/products");
  const apidata = await res.json();
  const products = apidata.products; // <-- MUST use products array

  return (
    <section id="Introducing" className="py-20 bg-[#F4F6F3]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Introducing Our Products
        </h2>

        {/* Filter Menu */}
        <div className="flex justify-center gap-6 text-sm font-semibold text-gray-600 mb-10">
          <button className="text-green-600 border-b-2 border-green-600">All</button>
          <button className="hover:text-green-600">Vegetable</button>
          <button className="hover:text-green-600">Fruit</button>
          <button className="hover:text-green-600">Meat & Fish</button>
          <button className="hover:text-green-600">View All</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.slice (22,30) .map((product) => (
            <div
              key={product.id}
              className="relative border border-gray-200 rounded-lg p-4 bg-white hover:border-green-500 hover:bg-green-50 transition"
            >
              {/* Love + Eye Icons */}
              <div className="absolute top-7 right-5 flex flex-col gap-4">
                <AiOutlineHeart className="text-2xl text-gray-500 cursor-pointer hover:text-green-600" />
                <AiOutlineEye className="text-2xl text-gray-500 cursor-pointer hover:text-green-600" />
              </div>

              {/* Image */}
              <div className="w-full h-45 bg-gray-100 rounded-md mb-4 flex justify-center items-center">
                <img
                  src={product.thumbnail}
                  className="w-full h-full object-contain p-2"
                  alt={product.title}
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900">
                {product.title}
              </h3>

              {/* Price */}
              <p className="text-green-600 font-bold text-sm mt-1">
                ${product.price}
              </p>

              {/* Rating + Cart */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-yellow-500 text-sm">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </p>

                <AiOutlineShoppingCart className="text-xl text-gray-500 cursor-pointer hover:text-green-600" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Introducing;
