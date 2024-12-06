import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import footerlogo from "../../assets/logo.jpeg";
import playstore from "../../assets/playstore.jpg";
import appstore from "../../assets/app-store-apple-f1f919205b.jpg";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#FFFF25] px-4 py-8 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-center md:flex-row md:items-center cursor-pointer md:gap-4">
            <Link to="/">
              <img
                src={footerlogo}
                alt="footerLogo"
                className="h-16 w-20 mb-4 md:mb-0"
              />
            </Link>

            <h2 className="text-xl font-semibold text-center md:text-left">
              আপনার সাথে আপনার পাশে
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* Company Column */}
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Toto Pass
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="mb-4 font-semibold">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Ride
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Drive
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery
                  </a>
                </li>
              </ul>
            </div>

            {/* Global Citizenship Column */}
            <div>
              <h3 className="mb-4 font-semibold">Global citizenship</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Diversity and Inclusion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>

            {/* Travel Column */}
            <div>
              <h3 className="mb-4 font-semibold">Travel</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Airports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cities
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-8 border-t border-black/10 pt-8 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <p className="text-center md:text-left">Download Now</p>
              <div className="flex gap-4">
                <a href="#" className="h-10">
                  <img
                    src={playstore}
                    alt="Get it on Google Play"
                    className="h-full"
                  />
                </a>
                <a href="#" className="h-10">
                  <img
                    src={appstore}
                    alt="Download on the App Store"
                    className="h-full"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <p className="font-semibold">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="text-black hover:text-black/70">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="#" className="text-black hover:text-black/70">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-black hover:text-black/70">
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a href="#" className="text-black hover:text-black/70">
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <Link to={"/contact"}>
              <button className="rounded-full bg-yellow-400 px-8 py-3 font-semibold shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm">© 2023 Toto Wala Technologies Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
