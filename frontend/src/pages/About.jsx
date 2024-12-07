import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import aboutimg from "../assets/about.jpg";
import visionImage from "../assets/vision1.jpg";
import missionImage from "../assets/vision2.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-robotoMono">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Yellow Section */}
        <div className="w-full md:w-1/2 bg-[#FFFF25] p-8 md:p-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">About Us</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Toto Wala</h2>
          <p className="text-xl md:text-2xl mb-6 font-bengali">
            আপনার সাথে আপনার পাশে
          </p>
          <BsEmojiSmile className="text-6xl md:text-8xl" />
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src={aboutimg}
            alt="Delivery vehicles in warehouse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-28">
          <h1 className="text-3xl font-bold text-center mb-8">
            About Toto Wala!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Toto Wala is a shared, electric, micro-mobility marketplace
            redefining how India commutes. Our tech-based EV ecosystem empowers
            driver-partners to fulfill first and last-mile rides and hyperlocal
            deliveries while minimizing downtime through our Energy service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Toto Wala is currently active in Delhi, Kolkata, Digha, Siliguri,
            Durgapur, Bolpur, Bardhaman,Murshidabad, Darjeeling, Hyderabad,
            Mumbai and plans to expand aggressively in the coming time
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-4 sm:px-16 grid gap-8 grid-cols-1 sm:grid-cols-2">
          {/* Vision Section */}
          <div className="text-center">
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-full max-w-[400px] mx-auto object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">Our Vision</h2>
            <p className="text-lg text-gray-700 mt-2">
              Toto Wala aims to build a mobility platform for a billion Indians,
              offering affordable, reliable, and seamless experiences. Our
              technology integrates vehicle/accessory sellers, charging
              providers, and demand hubs into one ecosystem.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full max-w-[400px] mx-auto object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mt-2">
              Toto Wala is transforming Indian mobility with a tech-based EV
              ecosystem, providing seamless service and hassle-free
              transportation to our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
