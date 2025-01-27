import React from "react";
import toto from "../assets/TOTO.jpg";
import { Link, NavLink } from "react-router-dom";
import Totovideo from "../assets/Totowala.mp4";
import {
  FaHome,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUserPlus,
  FaUserFriends,
  FaCheckCircle,
  FaGooglePay,
} from "react-icons/fa";
import kolkat from "../assets/Kolkata.png";
import mumbai from "../assets/mumbai.png";
import delhi from "../assets/delhi.png";
import bangalore from "../assets/bangalore.png";
import chennai from "../assets/chennai.png";
import hyderabad from "../assets/hyderabad.png";
import passlogo from "../assets/pass-logo.jpg";
import pass1 from "../assets/pass-15off23feb21.jpg";
import pass2 from "../assets/pass-15off24feb21.jpg";
import ride1 from "../assets/rider screen-2.jpg";
const cities = [
  { name: "Kolkata", icon: kolkat },
  { name: "Mumbai", icon: mumbai },
  { name: "Delhi", icon: delhi },
  { name: "Bangalore", icon: bangalore },
  { name: "Chennai", icon: chennai },
  { name: "Hyderabad", icon: hyderabad },
];

const Home = () => {
  return (
    <>
      <div className="bg-white min-h-screen w-full px-4 font-robotoMono scroll-smooth">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                ও দাদা যাবেন না কী?
              </h1>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                Affordable Toto rides at your Doorstep
              </h2>
              <NavLink to={"/book"}>
                <button class="before:ease relative h-12 w-40 mt-3 bg-blue-500 overflow-hidden border border-black text-white shadow-2xl transition-all rounded-xl before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#FFFF25] before:duration-300 hover:text-black hover:shadow-[#FFFF25] hover:before:h-64 hover:before:-translate-y-32">
                  <span class="relative z-10">Request a Ride</span>
                </button>
              </NavLink>
            </div>

            {/* Image with animation */}
            <div className="w-full md:w-1/2 max-w-sm mx-auto">
              <img
                src={toto}
                alt="Toto Ride Illustration"
                className="w-full h-auto max-w-[300px] mx-auto animate-trans-right"
              />
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-5">
          <video
            src={Totovideo}
            autoPlay
            loop
            muted
            className="w-full max-h-[250px] md:max-h-[400px] lg:max-h-[600px] object-cover"
          ></video>
        </div>
        <div className="bg-white mt-5 flex flex-col items-center justify-center px-4">
          <div className="max-w-3xl w-full text-center space-y-6">
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Go get it with Toto Wala
            </h1>

            {/* Description */}
            <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed">
              Looking for an affordable and quick ride? Conveniently request a
              ride with Toto Wala from your doorstep at just the tap of a
              button. Prices start at Rs 6 for 1 kilometer.
            </p>

            {/* Horizontal Line */}
            <hr className="border-gray-300 my-4" />

            {/* Promo Code */}
            <p className="text-sm md:text-base lg:text-lg font-semibold">
              Use promo code{" "}
              <span className="text-black font-bold">WELCOMETOTO50</span>.
            </p>

            {/* Button */}
            <Link to={"/book"}>
              <button class="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 mt-3 py-3 font-bold bg-blue-500">
                <span class="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-[#FFFF25] opacity-[3%]"></span>
                <span class="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-[#FFFF25] opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
                  Book Now
                </span>
                <span class="absolute inset-0 rounded-full border-2 border-black"></span>
              </button>
            </Link>
          </div>
        </div>
        {/*  Why Ride With Toto Wala */}
        <div className="mt-5">
          <div className="bg-yellow-50 py-12 px-4 md:px-8">
            <h2 className="text-3xl font-bold text-olive-800 text-center mb-12">
              Why Ride With Toto Wala
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Feature
                icon={<FaHome className="w-6 h-6" />}
                title="Get doorstep pickup"
                description="No need to go looking for an Toto on the streets. Find a ride at your doorstep at the tap of a button"
              />

              <Feature
                icon={<FaMapMarkerAlt className="w-6 h-6" />}
                title="Go where you need to"
                description="Tired of Toto drivers refusing to go to your destination? Request Toto Wala to go anywhere around your city."
              />

              <Feature
                icon={<FaMoneyBillWave className="w-6 h-6" />}
                title="Skip the bargaining"
                description="Get low-cost Toto rides with estimated prices displayed upfront."
              />

              <Feature
                icon={<FaShieldAlt className="w-6 h-6" />}
                title="Ride safer at all times"
                description="With industry-leading safety features like live GPS tracking and 24/7 safety support, you can now ride safer"
              />
            </div>
          </div>
        </div>
        {/* Toto pass */}
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
        {/*!!!!! How to use the Toto Wala!!!! */}
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900">
                How to use the Toto Wala
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-full max-w-[320px]">
                <div className="rounded-[2.5rem] overflow-hidden">
                  <img
                    src={ride1}
                    alt="Toto Wala App Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full">
                      <FaUserPlus className="w-6 h-6 " />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      1. Create an account
                    </h2>
                    <p className="text-gray-600">
                      All you need is an email address and phone number. You can
                      request a ride from your browser or from the Toto Wala. To
                      download the app, go to the App Store or Google Play Store
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6 " />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      2. Enter your destination
                    </h2>
                    <p className="text-gray-600">
                      Open the app and enter where you're going in the Where to?
                      box. Tap to confirm your pickup location and tap Confirm
                      again to be matched to a driver nearby.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full">
                      <FaUserFriends className="w-6 h-6 " />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      3. Meet your Toto wala
                    </h2>
                    <p className="text-gray-600">
                      You can track their arrival on the map. When they're a few
                      minutes away, wait for them at your pickup location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full">
                      <FaCheckCircle className="w-6 h-6 " />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      4. Check your ride
                    </h2>
                    <p className="text-gray-600">
                      Every time you take a trip with Toto Wala, please make
                      sure you're getting into the right toto with the right
                      driver by matching the license plate, Toto make and model,
                      and driver photo with what's provided in your app.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Toto Wala trips can only be requested through the app, so
                      never get in a Toto where the vehicle or driver identity
                      doesn't match what's displayed in your app.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary rounded-full">
                      <FaGooglePay className="w-6 h-6 " />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      5. Pay online & rate your ride
                    </h2>
                    <p className="text-gray-600">
                      When you arrive, payment is easy. Depending on your
                      region, you have options. Use cash or a payment method
                      like a credit card or Toto Walet balance.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Let us know how your trip went. You can also give your
                      driver a compliment or add a tip in the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Availbel */}
        <div className="w-full bg-gray-50 py-8">
          <div className="w-full py-3 mb-8">
            <h2 className="text-center text-2xl md:text-3xl font-bold">
              Now Available At
            </h2>
          </div>

          <div className="px-4">
            <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="bg-white rounded-lg shadow-md p-4 transform transition-transform hover:scale-110 duration-300 hover:bg-[#FFFF25]"
                >
                  <div className=" w-24 mx-auto mb-3 ">
                    {/* Render City Image */}
                    <img
                      src={city.icon}
                      alt={`${city.name} Icon`}
                      className="w-full h-full "
                    />
                  </div>
                  <p className="text-center font-medium text-gray-800">
                    {city.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Feature({ icon, title, description }) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
      <div className="text-olive-800">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-olive-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Home;
