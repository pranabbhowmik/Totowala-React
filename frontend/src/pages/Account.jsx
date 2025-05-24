import { useState } from "react";
import { NavLink } from "react-router-dom";

const Account = () => {
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="min-h-[55rem] bg-gradient-to-br from-amber-50 to-white py-8 px-4 font-robotoMono">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Profile Section */}
        <div className="p-6 bg-amber-50">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 hover:text-yellow-600 transition-colors duration-300 font-mono">
            Welcome, Pranab
          </h1>

          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="group relative">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-100 overflow-hidden group-hover:ring-4 ring-yellow-200 transition-all duration-300">
                <img
                  src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                  alt="Toto Wala - Affordable Rides & Delivery|| Profile"
                  className="w-16 h-16 md:w-20 md:h-20 object-cover mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-800 font-mono">
              Pranab Bhowmik
            </h3>
            <button className="mt-3 px-3 py-2 bg-blue-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 font-mono">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            {/* Phone Number */}
            <div className="group">
              <label className="text-sm font-medium text-gray-500 font-mono">
                Phone Number
              </label>
              <div className="flex items-center justify-between p-3 mt-1 rounded-lg group-hover:bg-yellow-50 transition-all duration-300">
                <span className="text-gray-800 font-medium font-mono">
                  +91 86XXXXXXXX
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="text-sm font-medium text-gray-500 font-mono">
                Email
              </label>
              <div className="flex items-center justify-between p-3 mt-1 rounded-lg group-hover:bg-yellow-50 transition-all duration-300">
                <span className="text-gray-800 font-medium font-mono text-sm md:text-base">
                  example@gmail.com
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mt-6 md:mt-8">
            <h4 className="text-sm font-medium text-gray-500 mb-4 font-mono">
              Preferences
            </h4>

            {/* Push Notifications */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition-all duration-300">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="ml-3 font-medium text-gray-700 font-mono">
                  Push Notifications
                </span>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-5 md:h-6 w-10 md:w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
                  notifications ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <span className="sr-only">Toggle notifications</span>
                <span
                  className={`inline-block h-3 md:h-4 w-3 md:w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    notifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Help Section */}
            <NavLink to={"/help"}>
              <div className="flex items-center justify-between p-3 mt-2 rounded-lg hover:bg-yellow-50 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3 font-medium text-gray-700 group-hover:text-gray-900 font-mono">
                    Help
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </NavLink>
          </div>

          {/* Logout Button */}
          <div className="mt-6 md:mt-8 pb-4">
            <button className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-300 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 group-hover:text-red-600 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="ml-2 font-bold text-lg group-hover:text-red-600 font-mono">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
