import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Air Freight",
    description: "Fast and reliable air freight services for urgent deliveries.",
    img: "/images/air-freight.png",
  },
  {
    title: "Sea Freight",
    description: "Cost-effective shipping for bulk cargo across the globe.",
    img: "/images/sea-freight.png",
  },
  {
    title: "Road Transport",
    description: "Efficient road transportation for goods across the country.",
    img: "/images/road-transport.png",
  },
  {
    title: "Customs Clearance",
    description: "Seamless customs handling for smooth international trade.",
    img: "/images/customs-clearance.png",
  },
];

const Services = () => {
  return (
    <div className="w-full">
      {/* ✅ Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 text-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-orange bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-black">Our Services</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-black">
            Delivering fast, reliable, and global logistics solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <motion.section
        className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-extrabold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Services;
