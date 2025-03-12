import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  // Close menu when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.id === "mobile-menu-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md w-full h-16 md:h-20 fixed top-0 left-0 flex items-center z-50">
      <div className="w-full flex justify-between items-center px-6 md:px-12">
        
        {/* ✅ Logo Fully Moved to the Left */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="OJS Swift Limited Logo"
            className="h-16 md:h-20 w-auto md:w-52 object-contain ml-0" // ✅ Moved fully to the left
          />
        </Link>

        {/* ✅ Desktop Menu with White Hover Effect */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>

        {/* ✅ Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden focus:outline-none text-white" aria-label="Open Menu">
          <Menu size={30} />
        </button>
      </div>

      {/* ✅ Mobile Menu (Overlay + Slide-in Menu) */}
      {isOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
          onClick={handleOverlayClick}
        >
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-blue-900 shadow-lg transform transition-transform duration-300 ease-out
            ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col pt-20 space-y-6`}
            aria-hidden={!isOpen}
          >
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-white" aria-label="Close Menu">
              <X size={32} />
            </button>

            {/* ✅ Mobile Menu Links with White Hover */}
            <Link to="/" className="text-xl py-3 px-6 hover:text-white transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="text-xl py-3 px-6 hover:text-white transition" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" className="text-xl py-3 px-6 hover:text-white transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-xl py-3 px-6 hover:text-white transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
