import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigator = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigator("/signup&signin");
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 sm:px-10 py-5 bg-teal-600 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        Fem<span className="text-cyan-300">Care</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navigation Links and Buttons */}
      <div
        className={`${
    isMenuOpen ? "block" : "hidden"
  } w-full lg:w-auto lg:flex lg:items-center lg:mt-0 mt-4`}
      >
        <nav>
          <ul className="flex flex-col lg:flex-row gap-6 text-white font-semibold lg:items-center lg:ml-auto">
            <li><a href="/" className="hover:text-cyan-300">Home</a></li>
            <li><a href="/" className="hover:text-cyan-300">Services</a></li>
            <li><a href="/" className="hover:text-cyan-300">About Us</a></li>
            <li><a href="/" className="hover:text-cyan-300">Doctors</a></li>
            <li><a href="/" className="hover:text-cyan-300">Contact Us</a></li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
          <button
            className="bg-cyan-400 text-white font-semibold px-5 py-2 ml-2 rounded-full shadow-md hover:bg-cyan-300 transition-all transform hover:scale-105"
            onClick={handleAuthClick}
          >
            {isLoggedIn ? "Log Out" : "Sign In"}
          </button>
          <button className="bg-teal-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-teal-400 transition-all transform hover:scale-105">
            Community
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;