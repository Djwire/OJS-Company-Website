import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Need help? Have a question? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* ✅ Contact Details */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* ✅ Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ✅ Contact Info & Map */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Contact Details</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>7 House, Muritala Int'l Airport Road, Ajao, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <a href="tel:+2349014729697" className="hover:text-orange-500 transition">+234 901 472 9697</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:doris30dey@yahoo.com" className="hover:text-orange-500 transition">doris30dey@yahoo.com</a>
            </li>
          </ul>

          {/* ✅ Google Maps Embed */}
          <div className="mt-6">
            <iframe
              title="OJS Swift Limited Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.846074186891!2d3.331563273932852!3d6.5396153934574525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f54a2aa2091%3A0x74d819b5d563c95a!2sMurtala%20Muhammed%20International%20Airport!5e0!3m2!1sen!2sng!4v1710023456789"
              className="w-full h-64 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
