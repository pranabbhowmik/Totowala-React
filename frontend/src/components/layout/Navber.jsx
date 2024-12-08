import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFF00] px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold font-robotoMono">
            Toto Wala
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <NavLink
            to="/"
            className="text-xl font-medium text-black hover:underline font-robotoMono"
          >
            Home
          </NavLink>
          <NavLink
            to="/delivery"
            className="text-xl font-medium text-black hover:underline font-robotoMono"
          >
            Delivery
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl font-medium text-black hover:underline font-robotoMono"
          >
            About Us
          </NavLink>
          <NavLink
            to="/ride"
            className="text-xl font-medium text-black hover:underline font-robotoMono"
          >
            Ride
          </NavLink>

          <NavLink
            to="/book"
            className="text-xl font-medium text-black hover:underline font-robotoMono"
          >
            Book Now
          </NavLink>
          <NavLink
            to="/contact"
            className="text-xl font-medium text-black hover:underline font-robotoMono "
          >
            Contact
          </NavLink>
          <NavLink
            to="/help"
            className="text-xl font-medium text-black hover:underline font-robotoMono"
          >
            Help
          </NavLink>
        </div>

        {/* Auth buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link to={"/login"}>
            <button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Log In
            </button>
          </Link>
          <button className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Sign Up
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-14  z-50 bg-[#FFFF00] p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className="text-xl font-medium text-black  hover:underline font-robotoMono"
              >
                Home
              </NavLink>
              <NavLink
                to="/delivery"
                className="text-xl font-medium text-black hover:underline font-robotoMono"
              >
                Delivery
              </NavLink>
              <NavLink
                to="/about"
                className="text-xl font-medium text-black hover:underline font-robotoMono"
              >
                About Us
              </NavLink>
              <NavLink
                to="/ride"
                className="text-xl font-medium text-black hover:underline font-robotoMono"
              >
                Ride
              </NavLink>

              <NavLink
                to="/book"
                className="text-xl font-medium text-black hover:underline font-robotoMono"
              >
                Book Ride
              </NavLink>
              <NavLink
                to="/contact"
                className="text-xl font-medium text-black hover:underline font-robotoMono"
              >
                Contact
              </NavLink>
              <NavLink
                to="/help"
                className="text-xl font-medium text-black hover:underline font-robotoMono"
              >
                Help
              </NavLink>
              <div className="flex flex-col space-y-2">
                <Link to={"/login"}>
                  <button className="w-full rounded-md bg-white px-3 py-2 text-xl font-medium text-black hover:bg-gray-100">
                    Log In
                  </button>
                </Link>
                <button className="w-full rounded-md bg-black px-3 py-2 text-xl font-medium text-white hover:bg-gray-800">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
