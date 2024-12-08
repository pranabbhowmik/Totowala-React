import React, { useState } from "react";
import girl from "../assets/girl.png";
const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const topics = [
    { id: 1, title: "Help with a trip", icon: "🚗" },
    { id: 2, title: "Account", icon: "👤" },
    { id: 3, title: "Membership", icon: "💳" },
    { id: 4, title: "Toto Pass", icon: "❓" },
    { id: 5, title: "Map issue", icon: "🗺️" },
    { id: 6, title: "Privacy", icon: "🔒" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left column: Search, Login, and Topics */}
          <div className="flex-1 space-y-6">
            {/* Search Section */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search Question"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button class="relative h-12 w-40 overflow-hidden rounded-xl border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-[#FFFF25] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                <span class="relative z-10">Search</span>
              </button>
            </div>

            {/* Login Section */}
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-lg font-semibold text-gray-900">
                  Log in for personalized support
                </p>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600">
                    Log in
                  </button>
                  <button className="rounded-lg bg-white px-6 py-2 text-gray-900 transition-colors hover:bg-gray-100">
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            {/* Topics Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">All Topics</h2>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{topic.icon}</span>
                      <span className="font-medium">{topic.title}</span>
                    </div>
                    <span className="text-gray-400">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="mt-6 flex-1 lg:mt-0">
            <img
              src={girl}
              alt="Person using a smartphone"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
