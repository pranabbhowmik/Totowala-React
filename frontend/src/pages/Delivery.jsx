import React, { useEffect } from "react";
import {
  FaTruck,
  FaBolt,
  FaMoneyBillWave,
  FaCity,
  FaUsers,
  FaRoute,
} from "react-icons/fa";
import {
  Users,
  Headphones,
  Cpu,
  Leaf,
  CreditCard,
  TrendingUp,
  DollarSign,
  GraduationCap,
} from "lucide-react";
import india from "../assets/india.png";
import market from "../assets/market.png";
import deliveryboy from "../assets/deliveryboy.png";
import shop from "../assets/shop.png";
import social from "../assets/social-sprite.5c46da9.png";
import small from "../assets/small.png";
import { BsEmojiSmile } from "react-icons/bs";
import dele from "../assets/dele1.png";

import delivery from "../assets/delivery.jpg";
const Delivery = () => {
  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: "Huge Supply Pool" },
    { icon: <Headphones className="w-6 h-6" />, title: "Dedicated support" },
    { icon: <Cpu className="w-6 h-6" />, title: "Technology First" },
    { icon: <Leaf className="w-6 h-6" />, title: "Environment Friendly" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Flexible rate card" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Quick development" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Cost Reduction" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Trained manpower" },
  ];
  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".numbers");
    const interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute("data-val"));
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    // Start at the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // Smoothly scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-robotoMono">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Yellow Section */}
        <div className="w-full md:w-1/2 bg-[#FFFF25] p-8 md:p-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Delivery with
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Toto Wala</h2>
          <p className="text-xl md:text-2xl mb-6 font-bengali">
            আপনার সাথে আপনার পাশে
          </p>
          <BsEmojiSmile className="text-6xl md:text-8xl" />
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src={delivery}
            alt="Delivery vehicles in warehouse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Delivery With <span className="text-yellow-500">Toto Wala!</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
            Toto Wala delivery leverages the largest fleet of vehicles combined
            with trained delivery professionals and a tech first approach making
            us the India's most reliable, affordable, & largest electric last
            mile delivery partner
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-50">
              <FaTruck className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Largest Fleet</h3>
              <p className="text-gray-600">
                Extensive network of delivery vehicles
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <FaBolt className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Tech First</h3>
              <p className="text-gray-600">Advanced technology integration</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <FaMoneyBillWave className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Affordable</h3>
              <p className="text-gray-600">
                Competitive pricing for all services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-64 sm:h-72 md:h-96 mb-16">
          <div className="absolute inset-0  rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-4xl mx-auto">
                <img
                  src={dele}
                  alt="TotoWala Delivery"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Benefits of working with TotoWala
          </h2>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white rounded-lg hover:bg-[#FFFF25] hover:scale-110 duration-500 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Segments */}
      <div className="bg-slate-900 px-4 py-16 mt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Segments
            </h2>
            <p className="mt-2 text-xl text-gray-400">we serve</p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* D2C Brands */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={india}
                  alt="D2C Brands"
                  className="h-16 w-16 mx-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                D2C brands
              </h3>
            </div>

            {/* Small & medium enterprises */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={small}
                  alt="Small & Medium Enterprises"
                  className="h-16 w-16 mx-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Small & medium enterprises
              </h3>
            </div>

            {/* Market Place */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={market}
                  alt="Market Place"
                  className="h-16 w-16 mx-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Market Place
              </h3>
            </div>

            {/* Shop keepers */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={shop}
                  alt="Shop Keepers"
                  className="h-16 w-16 mx-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Shop keepers
              </h3>
            </div>

            {/* Personal Shipping */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={deliveryboy}
                  alt="Personal Shipping"
                  className="h-16 w-16 mx-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Personal Shipping
              </h3>
            </div>

            {/* Social media support */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={social}
                  alt="Social Media Support"
                  className=" w-full h-10 mx-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Social media support
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Milestones */}
      <div className="w-full bg-slate-800 py-10 ">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-500 mb-6">
          Delivery Milestones Achieved
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-2">
            <FaCity className="text-yellow-500 text-5xl" />
            <p className="text-xl sm:text-2xl font-bold text-white">
              <span className="numbers" data-val="6">
                00
              </span>{" "}
              Cities
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <FaUsers className="text-yellow-500 text-5xl" />
            <p className="text-xl sm:text-2xl font-bold text-white">
              <span className="numbers" data-val="527">
                000+
              </span>{" "}
              Clients
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <FaTruck className="text-yellow-500 text-5xl" />
            <p className="text-xl sm:text-2xl font-bold text-white">
              <span className="numbers" data-val="873">
                0000
              </span>{" "}
              Deliveries
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <FaRoute className="text-yellow-500 text-5xl" />
            <p className="text-xl sm:text-2xl font-bold text-white">
              <span className="numbers" data-val="1659">
                0000
              </span>{" "}
              Kms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
