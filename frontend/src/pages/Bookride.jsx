import React, { useEffect, useState } from "react";
import { MapPin, Plus, Clock, User, Search } from "lucide-react";
import { FaCar, FaBox, FaSyncAlt, FaShuttleVan } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Bookride = () => {
  const suggestions = [
    { icon: <FaCar />, label: "Ride" },
    { icon: <FaBox />, label: "Package" },
  ];
  useEffect(() => {
    // Start at the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // Smoothly scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0); // Adjust the delay if needed
  }, []);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Panel */}
      <div className="p-6 lg:w-[30%] md:w-[40%] sm:w-full space-y-4 shadow-xl rounded-lg border-1 border-black max-h-[90%]">
        <h1 className="text-xl font-bold text-gray-800">Get a ride</h1>

        {/* Pickup Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Pickup location"
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Dropoff Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Dropoff location"
            className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="absolute right-3 top-2 p-1 rounded-full hover:bg-gray-200">
            <Plus className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Pickup Time */}
        <div className="flex gap-4">
          {/* Pickup Time */}
          <div className="relative flex-1">
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <NavLink to={"/pickup"}>
              <button className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none bg-white">
                Pickup time
              </button>
            </NavLink>
          </div>

          {/* For Who */}
          <div className="relative flex-1">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <select className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none bg-white text-sm md:text-base lg:text-lg">
              <option value="me">For me</option>
              <option value="someone">someone</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center">
          <Search className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>

      {/* Map Section */}
      <div className="flex-1 h-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.292653676705!2d88.36343!3d22.5477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a67ea130af%3A0xb6c09870b8172b56!2sGariahat%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1701856183183!5m2!1sen!2sus"
          className="w-full h-full border-0 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="pt-4 sm:hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Suggestions</h2>
        </div>

        <div className="grid grid-cols-2  gap-4 px-2">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-3 bg-gray-100 rounded-lg hover:bg-[#FFFF25] text-center"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-xs md:text-sm lg:text-base">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Bookride;
