import React from "react";
import ride from "../assets/ride.jpg";
import { BsEmojiSmile } from "react-icons/bs";
import {
  Clock,
  Home,
  Shield,
  Headphones,
  CreditCard,
  Leaf,
} from "lucide-react";
import passlogo from "../assets/pass-logo.jpg";
import pass1 from "../assets/pass-15off23feb21.jpg";
import pass2 from "../assets/pass-15off24feb21.jpg";
import waitingimage from "../assets/waiting.jpg";
const Ride = () => {
  return (
    <div className="min-h-screen font-robotoMono bg-white">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row">
        {/* Yellow Header */}
        <div className="bg-[#FFFF25] px-4 py-12 text-center md:py-16 md:w-[40%] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-black mb-4 md:text-4xl lg:text-5xl">
            Welcome to The Toto World
          </h1>
          <h2 className="text-2xl font-bold text-black mb-4 md:text-3xl lg:text-4xl">
            Toto Wala
          </h2>
          <p className="text-lg md:text-xl font-medium mb-4">
            আপনার সাথে আপনার পাশে
          </p>
          {/* Responsive Smile Icon */}
          <BsEmojiSmile className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl mx-auto" />
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-[60%]">
          <img
            src={ride}
            alt="Toto Wala street scene with auto-rickshaw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Ride With <span className="text-green-600">Toto Wala!</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl">
          Toto Wala provides an app-based e-rickshaw booking facility to its
          users, helping them connect to drivers to move from one place to
          another.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
        {/* Hero Section */}
        <div className="mb-16">
          <img
            src={waitingimage}
            alt="Auto rickshaw service illustration"
            className="w-full max-w-3xl mx-auto h-auto"
          />
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Why ride with us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Support */}
            <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-[#FFFF25]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dedicated Customer Support
              </h3>
              <p className="text-gray-600">
                Reach out to us anytime.
                <br />
                Good service our top priority.
              </p>
            </div>

            {/* Door to Door */}
            <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-[#FFFF25]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Door to Door service
              </h3>
              <p className="text-gray-600">
                Book Private rides for point to
                <br />
                point commute.
              </p>
            </div>

            {/* Safe */}
            <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-[#FFFF25]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy and Safe</h3>
              <p className="text-gray-600">
                Verified drivers and SOS safety
                <br />
                feature for all our riders booking E-rickshaws.
              </p>
            </div>

            {/* Fast */}
            <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-[#FFFF25]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-600">
                Dedicated vehicles to serve
                <br />
                you with real-time tracking.
              </p>
            </div>

            {/* Cashless */}
            <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-[#FFFF25]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cashless</h3>
              <p className="text-gray-600">
                Pay from the multiple
                <br />
                payment methods available.
              </p>
            </div>

            {/* Eco Friendly */}
            <div className="group p-6 rounded-lg transition-all duration-300 hover:bg-[#FFFF25]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco Friendly</h3>
              <p className="text-gray-600">
                No pollution vehicles which
                <br />
                leads to a greener environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Content Wrapper */}
          <div className="flex flex-col md:flex-row items-center sm:space-x-52 space-x-0 space-y-5">
            {/* Logo and Text Section */}
            <div className="text-center md:text-left">
              <div className="rounded-full p-4 inline-block mb-4  ml-0 sm:ml-5">
                <img
                  src={passlogo}
                  alt="Toto Pass Logo"
                  className="h-24 sm:h-28 md:h-32 lg:h-36"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-2">
                TOTO PASS
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Ride More! Spend Less!
              </p>
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
              <img
                src={pass1}
                alt="Toto Pass Image 1"
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <img
                src={pass2}
                alt="Toto Pass Image 2"
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ride;
