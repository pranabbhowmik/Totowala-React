import React, { useEffect, useState } from "react";
import contact from "../assets/contact.jpg";
import world from "../assets/world.jpg";

const Contact = () => {
  const [fromData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
  };
  useEffect(() => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  }, []);
  return (
    <div className="min-h-screen font-robotoMono bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            You can find us here
          </h1>
          <p className="text-lg text-black">
            Book your ride effortlessly with our e-rickshaw app! Convenient,
            eco-friendly, and reliable transportation. Contact us for support or
            queries anytime!
          </p>
        </div>
        <div className="w-full max-w-sm md:max-w-md">
          <img src={contact} alt="Contact Support" className="w-full h-auto" />
        </div>
      </div>

      {/* Contact Options Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Customer Support */}
        <div className="bg-white hover:bg-[#FFFF25] hover:text-black rounded-lg shadow-md hover:shadow-[#FFFF25] p-6 flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              CUSTOMER SUPPORT
            </h2>
            <p className="text-gray-600">
              For support with your bookings and other queries, click here or
              visit the Support section in the Totowala app.
            </p>
          </div>
        </div>

        {/* Media Related Queries */}
        <div className="bg-white rounded-lg  hover:bg-[#FFFF25] hover:text-black shadow-md hover:shadow-[#FFFF25] p-6 flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              MEDIA RELATED QUERIES
            </h2>
            <p className="text-gray-600">
              For press and media-related queries, please reach out to
            </p>
          </div>
        </div>

        {/* Customer Security */}
        <div className="bg-white rounded-lg  hover:bg-[#FFFF25] hover:text-black shadow-md hover:shadow-[#FFFF25] p-6 flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              CUSTOMER SECURITY
            </h2>
            <p className="text-gray-600">
              If you have security concerns, please report your issues with
              Totowala at security@Totowala.com
            </p>
          </div>
        </div>

        {/* Drive for Totowala */}
        <div className="bg-white  hover:bg-[#FFFF25] hover:text-black rounded-lg shadow-md hover:shadow-[#FFFF25] p-6 flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              DRIVE FOR TOTOWALA
            </h2>
            <p className="text-gray-600">
              If you are a driver or a fleet manager and want to attach your
              vehicle with Totowala, click here
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold">Contact us</h1>
              <p className="text-lg">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center space-x-2 text-gray-700">
                  <span>contact@totowala.com</span>
                  <span>•</span>
                  <span>+91 98703 XXX21</span>
                  <span>•</span>
                  <span>Kolkata, New Town, 700060</span>
                </div>
              </div>
              <div className="relative">
                {/* Marker on the Map */}
                <div
                  className="absolute bg-blue-500 w-2 h-2 text-white text-xs font-bold  rounded-full shadow-md"
                  style={{
                    top: "41%", // Adjust based on India's position on your map image
                    left: "74%", // Adjust based on India's position on your map image
                    transform: "translate(-50%, -50%)", // Centers the marker
                  }}
                ></div>

                {/* Caption for the Map */}
                <div className="text-sm bg-gray-900 text-white px-3 py-1 rounded-md inline-block absolute top-2/4 left-2/3">
                  We are here
                </div>

                {/* World Map Image */}
                <img
                  src={world}
                  alt="World Map"
                  className="w-full opacity-30 bg-black rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <form className="space-y-6" onSubmit={handelsubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm text-gray-600"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    value={fromData.fullName}
                    onChange={(e) =>
                      setFormData({ ...fromData, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="totowala@gmail.com"
                    value={fromData.email}
                    onChange={(e) =>
                      setFormData({ ...fromData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="  Phone Number"
                    className="block text-sm text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 ##### #####"
                    value={fromData.phone}
                    onChange={(e) =>
                      setFormData({ ...fromData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message here"
                    value={fromData.message}
                    onChange={(e) =>
                      setFormData({ ...fromData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-[#FFFF25] text-white py-3 px-6 rounded-lg  hover:text-black transition-colors duration-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
