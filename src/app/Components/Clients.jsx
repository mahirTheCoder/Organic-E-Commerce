import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Clients = () => {
  const testimonials = [
    {
      text: `"Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ac."`,
      name: "Jenny Wilson",
      role: "Customer",
    },
    {
      text: `"Praesent nec augue nec tellus malesuada ultrices eget a justo. Nullam a nibh faucibus, semper risus eu, ultricies est. Maecenas eget purus in enim imperdiet dapibus in ac mi. Fusce faucibus lacus felis."`,
      name: "Guy Hawkins",
      role: "Customer",
    },
    {
      text: `"Nam sed odio diam. Mauris sagittis sapien sed convallis cursus. Praesent mattis ultricies urna ac eleifend. Cras vel nisi nec lectus sagittis venenatis. Curabitur laoreet leo sed lorem pulvinar."`,
      name: "Kathryn Murphy",
      role: "Customer",
    },
  ];

  return (
    <section id="Clients" className="mt-25">
      <div className="w-full bg-[#F5F7F5] py-16">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-12">
          What our Clients Says
        </h2>

        {/* TESTIMONIAL CARDS */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-10 rounded-xl shadow-md border border-gray-200 relative flex flex-col items-center"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-green-600 text-3xl  mb-3" />

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              <div className="text-center mt-6">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VIDEO SECTION */}

        <div className="container mx-auto px-4 mt-14">
          <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-purple-300">
            {/* Background Image */}
            <img
              src="/mnt/data/0a06f7fd-449a-4953-8e04-ed12d0a9914b.png"
              className="w-full h-[380px] object-cover opacity-90"
              alt="video"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white">
              <p className="text-sm tracking-wide mb-2">VIDEO</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-center">
                We’re the Best Organic <br /> Farm in the World
              </h3>

              {/* Play Button */}
              <button className="mt-5 w-14 h-14 rounded-full bg-white/80 hover:bg-white transition flex items-center justify-center">
                <FaPlay className="text-green-600 text-xl ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
