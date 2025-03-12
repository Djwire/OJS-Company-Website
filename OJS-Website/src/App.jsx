import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Services from "./components/Services"; 
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
