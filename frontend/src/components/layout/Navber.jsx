import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

import BottomNav from "../ui/BottomNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFF00] px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-12" />
          <span className="text-xl invisible sm:visible font-semibold font-robotoMono">
            Toto Wala
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {[
            { name: "Home", path: "/" },
            { name: "Delivery", path: "/delivery" },
            { name: "About Us", path: "/about" },
            { name: "Ride", path: "/ride" },
            { name: "Book Now", path: "/book" },
            { name: "Contact", path: "/contact" },
            { name: "Help", path: "/help" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-xl font-medium text-black hover:underline font-robotoMono"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile menu */}
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-14 z-50 bg-[#FFFF00] p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Delivery", path: "/delivery" },
                { name: "About Us", path: "/about" },
                { name: "Ride", path: "/ride" },
                { name: "Book Ride", path: "/book" },
                { name: "Contact", path: "/contact" },
                { name: "Help", path: "/help" },
              ].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-xl font-medium text-black hover:underline font-robotoMono"
                  onClick={() => setIsOpen(false)} // Close the menu when clicked
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2">
                <Link to="/login">
                  <button
                    className="w-full rounded-md bg-white px-3 py-2 text-xl font-medium text-black hover:bg-gray-100"
                    onClick={() => setIsOpen(false)} // Close the menu when clicked
                  >
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    className="w-full rounded-md bg-black px-3 py-2 text-xl font-medium text-white hover:bg-gray-800"
                    onClick={() => setIsOpen(false)} // Close the menu when clicked
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar for Mobile View */}
      <BottomNav />
    </nav>
  );
};

export default Navbar;
