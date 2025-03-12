import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to <span className="text-orange-500 font-bold">OJS Swift Limited</span>, your trusted logistics partner.
          We specialize in fast, secure, and global shipping solutions to ensure your goods reach their destination safely.
        </p>
      </div>

      {/* ✅ About Us Content */}
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        {/* ✅ Image Section */}
        <div className="flex justify-center">
          <img src="/images/about-us.jpg" alt="About Us" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>

        {/* ✅ Text Section */}
        <div className="text-lg text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
          <p className="mt-3">
            At <span className="text-orange-500 font-bold">OJS Swift Limited</span>, our mission is to revolutionize the logistics
            industry by providing top-notch, reliable, and efficient transportation solutions worldwide.
          </p>

          <h2 className="mt-6 text-2xl font-bold text-blue-900">Why Choose Us?</h2>
          <ul className="mt-3 space-y-2">
            <li>✅ Fast & Secure Shipping</li>
            <li>✅ 24/7 Customer Support</li>
            <li>✅ Affordable & Transparent Pricing</li>
            <li>✅ Global Shipping Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
