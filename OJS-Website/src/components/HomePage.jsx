import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShippingFast, FaGlobe, FaHeadset, FaBoxOpen, FaQuoteLeft, FaWhatsapp} from "react-icons/fa";
import backgrounds from "../data/backgrounds";
import services from "../data/services";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const nextBackground = () => {
    setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <div className="w-screen">
      {/* ✅ Hero Section */}
<div className="relative w-full h-screen overflow-hidden">
  <div className="absolute inset-0 w-full h-full flex">
    <AnimatePresence mode="popLayout">
      <motion.div
        key={backgrounds[index].img}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgrounds[index].img})` }}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </AnimatePresence>
  </div>

  {/* ✅ Overlay for Better Text Visibility */}
  <div className="absolute inset-0 w-full h-full bg-opacity-90"></div>

  {/* Hero Text & Next Button */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 md:px-16 text-center">
    
    {/* Main Text - Bigger, Bolder, and with Spacing */}
    <motion.h1
      key={backgrounds[index].text}
      className="text-5xl md:text-7xl font-extrabold drop-shadow-lg leading-tight md:leading-snug mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {backgrounds[index].text}
    </motion.h1>

    {/* Subtext - Larger and with More Spacing */}
    <motion.p
      key={backgrounds[index].subText}
      className="text-xl md:text-3xl mt-6 md:mt-4 font-medium drop-shadow-md leading-relaxed"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {backgrounds[index].subText}
    </motion.p>

    {/* Next Button - Larger & More Prominent */}
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={nextBackground}
      className="mt-8 md:mt-12 px-8 py-4 text-2xl bg-orange-500 text-black font-bold rounded-lg shadow-md hover:bg-orange-600 transition"
    >
      Next
    </motion.button>
  </div>
</div>


      {/* ✅ About Us Section */}
<motion.section
  className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center bg-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  {/* ✅ Left Side - Image */}
  <img
    src="/images/about-us.jpg"
    alt="About Us"
    className="w-full md:w-1/2 rounded-lg shadow-lg"
  />

  {/* ✅ Right Side - Text Content */}
  <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left w-full md:w-1/2">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
      About <span className="text-orange-500">Us</span>
    </h2>

    {/* ✅ Express Logistics */}
    <div className="mb-6">
      <FaShippingFast className="text-5xl text-orange-500 mb-4 mx-auto md:mx-0" />
      <h3 className="text-2xl font-semibold text-gray-800">
        Express Logistics Solutions
      </h3>
      <p className="text-lg text-gray-700 mt-3 leading-relaxed">
        We provide <span className="font-semibold text-gray-900">fast</span> and 
        <span className="font-semibold text-gray-900"> reliable</span> logistics solutions for urgent shipping.  
        Whether local or international, we ensure a <b>smooth and efficient</b> process with 
        <span className="text-orange-500 font-semibold"> real-time tracking</span> and 
        <span className="text-gray-900 font-semibold"> dedicated support</span>.
      </p>
    </div>

    {/* ✅ On-Time Delivery */}
    <div>
      <FaBoxOpen className="text-5xl text-green-500 mb-4 mx-auto md:mx-0" />
      <h3 className="text-2xl font-semibold text-gray-800">
        On-Time Delivery
      </h3>
      <p className="text-lg text-gray-700 mt-3 leading-relaxed">
        Time is crucial in logistics. That’s why we have a 
        <span className="font-semibold text-gray-900"> 99% on-time delivery rate</span>.  
        Our <span className="text-gray-900 font-semibold">advanced tracking</span>, 
        <span className="text-gray-900 font-semibold"> optimized routes</span>, and 
        <span className="text-gray-900 font-semibold"> expert team</span> ensure timely shipments, 
        <span className="text-green-600 font-bold"> every time</span>.
      </p>
    </div>
  </div>
</motion.section>


     {/* ✅ We Export Worldwide Section */}
<motion.section
  className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center bg-gray-100"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="text-left md:text-left w-full md:w-1/2">
    <h2 className="text-5xl font-extrabold text-gray-900 leading-tight md:leading-snug mb-6">
      <span className="text-blue-600">Global</span> Shipping Network
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
      We provide worldwide shipping to{" "}
      <span className="font-semibold text-gray-900">150+ countries</span> with{" "}
      <span className="text-blue-600 font-bold">real-time tracking</span>. Our network ensures 
      that your cargo reaches its destination safely, efficiently, and on time.
    </p>
    <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-2xl">
      With a strong presence in international logistics, we handle{" "}
      <span className="font-semibold text-gray-900">air, sea, and land</span> shipments, offering
      tailored solutions to meet your business needs. Whether it's{" "}
      <span className="font-semibold text-gray-900">express shipping</span> for urgent goods or 
      <span className="text-blue-600 font-bold"> bulk transportation</span> for large consignments, 
      we’ve got you covered.
    </p>
    <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-2xl">
      Our advanced <span className="font-semibold text-gray-900">logistics technology</span> provides 
      live updates on shipment status, customs clearance, and delivery times. With a dedicated 
      team and global partners, we ensure smooth operations and{" "}
      <span className="text-blue-600 font-bold">cost-effective solutions</span> for all your 
      export and import needs.
    </p>
  </div>
  <img
    src="/images/global-shipping.png"
    alt="Global Shipping"
    className="w-full md:w-1/2 rounded-lg shadow-lg mt-6 md:mt-0"
  />
</motion.section>



      {/* ✅ Services Section */}
<motion.section
  className="py-16 bg-gray-100 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <h2 className="text-5xl font-extrabold">What We Do Best</h2>
  
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
    {services.map((service) => (
      <motion.div
        key={service.title}
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105"
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
        <h3 className="text-2xl font-extrabold mt-4">{service.title}</h3> {/* Made bold */}
        <p className="text-gray-600 mt-3 text-lg leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>


{/* ✅ Our Features Section */}
<motion.section
  className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center bg-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  {/* ✅ Left Side - Features List */}
  <div className="w-full md:w-1/2">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
      Why Choose <span className="text-orange-500">Us?</span>
    </h2>

    <div className="space-y-6">
      {/* Feature 1 - Fast & Reliable Delivery */}
      <div className="flex items-start space-x-4">
        <FaShippingFast className="text-4xl text-orange-500 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Fast & Reliable Delivery</h3>
          <p className="text-lg text-gray-700 mt-2 leading-relaxed">
            We ensure quick and on-time deliveries with 
            <span className="text-orange-500 font-semibold"> real-time tracking</span>. 
            Our optimized routes, experienced team, and advanced logistics network 
            guarantee your shipments arrive as scheduled—every time.
          </p>
        </div>
      </div>

      {/* Feature 2 - Secure Packaging */}
      <div className="flex items-start space-x-4">
        <FaBoxOpen className="text-4xl text-green-500 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Secure Packaging</h3>
          <p className="text-lg text-gray-700 mt-2 leading-relaxed">
            We use <span className="text-green-500 font-semibold">high-quality materials</span> to ensure your shipments 
            are protected during transit. From fragile items to bulk goods, 
            our secure packaging solutions prevent damage and ensure safe arrival.
          </p>
        </div>
      </div>

      {/* Feature 3 - 24/7 Customer Support */}
      <div className="flex items-start space-x-4">
        <FaHeadset className="text-4xl text-blue-500 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">24/7 Customer Support</h3>
          <p className="text-lg text-gray-700 mt-2 leading-relaxed">
            Our dedicated support team is available <span className="font-semibold text-blue-500">24/7</span> to assist you with 
            shipment tracking, inquiries, and urgent requests. No matter the time zone, 
            we are here to ensure smooth and hassle-free logistics operations.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* ✅ Right Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <img
      src="/images/logistics-feature.png"
      alt="Logistics Features"
      className="w-full h-auto max-w-md md:max-w-lg object-cover rounded-lg shadow-lg"
    />
  </div>
</motion.section>


      {/* ✅ Call-to-Action Section */}
<motion.section 
  className="py-16 px-6 md:px-20 flex flex-col items-center bg-white text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <h2 className="text-5xl font-extrabold text-gray-900">Ready to Ship with Us?</h2>
  <p className="text-xl text-gray-700 mt-4 max-w-2xl">
    Get a fast and reliable logistics solution tailored to your needs.
  </p>

  {/* ✅ Contact Details */}
  <div className="mt-6 space-y-4 text-lg text-gray-800">
    <div className="flex items-center space-x-3">
      <span className="font-bold">📧 Email:</span>
      <a href="ookiwe1@yahoo.com" className="text-blue-500 hover:underline">ookiwe1@yahoo.com, doris30dey@yahoo.com</a>
    </div>
    <div className="flex items-center space-x-3">
      <span className="font-bold">📞 Phone:</span>
      <a href="tel:+234 9014729697" className="text-blue-500 hover:underline">+234 9014729697</a>
    </div>
  </div>

  {/* ✅ Buttons */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-auto">
    <button className="px-8 py-4 text-2xl bg-orange-500 text-black font-bold rounded-lg shadow-md hover:bg-orange-600 transition">
      Get a Quote
    </button>

    <a 
      href="ookiwe1@yahoo.com?subject=Inquiry&body=Hello, I would like to inquire about your logistics services."
      className="px-8 py-4 text-2xl bg-orange-500 text-black font-bold rounded-lg shadow-md hover:bg-orange-600 transition flex justify-center items-center"
    >
      Email Us
    </a>

    <a 
      href="https://wa.me/2349014729697" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="px-6 py-4 bg-orange-500 text-black font-bold rounded-lg shadow-md hover:bg-orange-600 transition flex justify-center items-center text-2xl"
    >
      <FaWhatsapp className="text-3xl mr-2" /> WhatsApp
    </a>
  </div>
</motion.section>

<motion.section
  className="py-16 px-6 md:px-20 bg-gray-100 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
    What Our <span className="text-orange-500">Clients Say</span>
  </h2>

  <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-8">
    {/* ✅ Testimonial 1 */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <FaQuoteLeft className="text-3xl text-orange-500 mb-4" />
      <p className="text-lg text-gray-700 leading-relaxed">
        "Exceptional service! My shipments always arrive on time, and their support team is fantastic."
      </p>
    </motion.div>

    {/* ✅ Testimonial 2 */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <FaQuoteLeft className="text-3xl text-orange-500 mb-4" />
      <p className="text-lg text-gray-700 leading-relaxed">
        "Reliable and efficient logistics! They handle my international shipping with great care."
      </p>
    </motion.div>

    {/* ✅ Testimonial 3 */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <FaQuoteLeft className="text-3xl text-orange-500 mb-4" />
      <p className="text-lg text-gray-700 leading-relaxed">
        "Top-notch e-commerce logistics! My customers love the fast deliveries."
      </p>
    </motion.div>
  </div>
</motion.section>




    </div>
  );
};

export default HomePage;
