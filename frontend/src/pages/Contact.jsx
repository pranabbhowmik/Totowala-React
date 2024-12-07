import React from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className=" flex flex-row items-center space-x-5">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center ">
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            You can find us here
          </h3>
          <p className="text-lg md:text-xl text-gray-700">
            Find help for your queries here
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={contact}
            alt="Get in Touch"
            className="w-[250px] sm:w-[400px] rounded-lg ml-0 sm:ml-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
