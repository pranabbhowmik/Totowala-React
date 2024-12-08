import React from "react";
import logo from "../assets/logo.jpeg";

const Signup = () => {
  return (
    <div className="flex flex-col font-robotoMono px-6 items-center justify-center sm:min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center bg-[#FFFF25] p-6 text-center">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Sign Up for Totowala
          </h1>
          <div className="mt-6 w-full max-w-xs">
            <button className="w-full flex items-center justify-center py-2 mb-4 bg-white hover:bg-black hover:text-white text-gray-800 font-medium shadow rounded-lg">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center py-2 bg-blue-600 text-white font-medium shadow rounded-lg ">
              <img
                src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Sign up with Facebook
            </button>
            <p className="text-sm text-gray-700 mt-4">Or sign up with email</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center bg-gray-50 p-6 md:p-10">
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Create a password"
              />
            </div>
            <button className="before:ease relative h-12 w-full mt-3 bg-blue-500 overflow-hidden border border-black text-white shadow-2xl transition-all rounded-xl before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#FFFF25] before:duration-300 hover:text-black hover:shadow-[#FFFF25] hover:before:h-64 hover:before:-translate-y-32">
              <span className="relative z-10">Sign Up</span>
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">
              By signing up, you agree to Totowala's{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Privacy Policy
              </span>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
