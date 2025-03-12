import { 
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, 
    FaEnvelope, FaPhoneAlt, FaMapMarkerAlt 
  } from "react-icons/fa"; 
  import { Link } from "react-router-dom";
  
  const Footer = () => {
    return (
      <footer 
        className="relative text-white py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer-bg.jpg')" }} // ✅ Background image without overlay
      >
        {/* ✅ Content Wrapper */}
        <div className="relative container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* ✅ Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-orange-400">OJS Swift Limited</h2>
            <p className="mt-4 text-gray-300 text-lg">
              Your trusted logistics partner, providing fast, secure, and global shipping solutions.
            </p>
          </div>
  
          {/* ✅ Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li><Link to="/" className="text-orange-400 hover:underline transition">Home</Link></li>
              <li><Link to="/services" className="text-orange-400 hover:underline transition">Services</Link></li>
              <li><Link to="/about" className="text-orange-400 hover:underline transition">About</Link></li>
              <li><Link to="/contact" className="text-orange-400 hover:underline transition">Contact</Link></li>
            </ul>
          </div>
  
          {/* ✅ Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" /> {/* ✅ Blue Icon */}
                <span className="text-gray-300">7 House, Muritala Int'l Airport Road, Ajao, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
  
          {/* ✅ More Contacts */}
          <div>
            <h3 className="text-2xl font-bold mb-4">More Contacts</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-orange-400" /> {/* ✅ Blue Icon */}
                <a href="tel:+2349014729697" className="text-orange-400 hover:underline transition"><span className="text-white">+234 901 472 9697</span></a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-orange-400" /> {/* ✅ Blue Icon */}
                <a href="tel:+2349013462174" className="text-orange-400 hover:underline transition"><span className="text-white">+234 901 346 2174</span></a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-400" /> {/* ✅ Blue Icon */}
                <a href="mailto:doris30dey@yahoo.com" className="text-orange-400 hover:underline transition"><span className="text-white">doris30dey@yahoo.com</span></a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-400" /> {/* ✅ Blue Icon */}
                <a href="mailto:ookiwe1@yahoo.com" className="text-orange-400 hover:underline transition"><span className="text-white">ookiwe1@yahoo.com</span></a>
              </li>
            </ul>
          </div>
  
        </div>
  
        {/* ✅ Social Media & Copyright */}
        <div className="relative mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
          
          {/* ✅ Social Media Icons */}
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-orange-400 transition transform hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-400 transition transform hover:scale-110"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-400 transition transform hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400 transition transform hover:scale-110"><FaLinkedin /></a>
          </div>
  
          {/* ✅ Copyright Text */}
          <p className="mt-4 md:mt-0 text-gray-300 text-lg">
            &copy; {new Date().getFullYear()} OJS Swift Limited. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  