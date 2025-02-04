import { ChevronLeft, Plus } from "lucide-react"
import logo from "../assets/logo.jpeg"
import { useNavigate } from "react-router-dom"

const Wallet = () => {
  const navigate = useNavigate();
  const handelnavigate = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(-1);
};
  
  return (
    <div className="min-h-screen flex flex-col justify-start p-4 md:p-8 lg:p-12 bg-gradient-to-br from-yellow-50 to-white">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-8  transition-all duration-300 hover:translate-x-2">
        <button onClick={handelnavigate} className="flex items-center">
  <ChevronLeft className="w-8 h-8 mr-2 bg-yellow-200 rounded-full opacity-60 text-black hover:text-yellow-700" />
</button>

          <h1 className="text-3xl text-black font-bold font-robotoMono">Toto Wallet</h1>
        </div>

        <div className="bg-[#FFFF00] rounded-xl h-60 p-6 shadow-2xl relative overflow-hidden font-robotoMono w-full max-w-[420px] mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-yellow-200">
          <div className="flex justify-between items-start mb-6">
            {/* EMV Chip */}
            <div className="w-12 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-md transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700">
              <div className="h-full w-full grid grid-cols-3 gap-[1px] p-[2px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-[#FFD700]"></div>
                ))}
              </div>
            </div>

            {/* Logo */}
            <img
              src={logo || "/placeholder.svg"}
              alt="Totowala Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Card Number */}
          <div className="text-2xl font-bold mb-4 tracking-wider font-robotoMono text-left -mt-10">TOTO PASS</div>

          {/* Card Holder Name */}
          <div className="text-sm uppercase mb-4 font-robotoMono text-left">
            <div className="text-gray-700 text-xs mb-1">Card Holder</div>
            <div className="font-semibold">John Doe</div>
          </div>

          <div className="flex justify-between items-end font-robotoMono">
            {/* Add Money Button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 text-sm font-semibold transform hover:scale-105">
              +ADD MONEY
            </button>

            {/* Balance */}
            <div className="text-right font-robotoMono">
              <div className="text-gray-700 text-xs mb-1">Balance</div>
              <div className="text-xl font-bold">₹1,000.00</div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -mr-16 -mt-16 opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 rounded-full -ml-12 -mb-12 opacity-50 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="mt-12 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-robotoMono font-bold mb-6 hover:text-yellow-600 transition-colors duration-300">
          Payment Methods
        </h2>

        <div className="flex items-center gap-4 text-lg font-robotoMono mb-6 group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 bg-yellow-100 p-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <button className="group-hover:text-yellow-600 transition-colors duration-300">Add Payment Methods</button>
        </div>
        <div className="w-full h-[2px] bg-gray-200 my-6"></div>
      </div>

      <div className="mt-12 w-full max-w-md mx-auto font-robotoMono">
        <h2 className="text-2xl font-bold mb-4 hover:text-yellow-600 transition-colors duration-300">Profiles</h2>
        <p className="mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300">Shared with you</p>

        <div className="flex items-center gap-4 group cursor-pointer hover:bg-yellow-50 p-4 rounded-lg transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 bg-yellow-100 p-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          <div className="flex-grow">
            <p className="font-bold tracking-tighter group-hover:text-yellow-600 transition-colors duration-300">
              Manage business rides for others
            </p>
            <p className="opacity-60 tracking-tighter group-hover:opacity-100 transition-opacity duration-300">
              Request access to their business profile
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 opacity-70 group-hover:opacity-100 bg-yellow-100 p-1 rounded-full transition-all duration-300 group-hover:bg-yellow-200 group-hover:translate-x-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="w-full h-[2px] bg-gray-200 my-6"></div>
      </div>

      <div className="mt-12 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-robotoMono font-bold mb-6 hover:text-yellow-600 transition-colors duration-300">
          Vouchers
        </h2>

        <div className="flex items-center gap-4 text-lg font-robotoMono group cursor-pointer">
        <Plus className="w-8 h-8 bg-yellow-100 p-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-200"/>
          <button className="group-hover:text-yellow-600 transition-colors duration-300">Add Vouchers</button>
        </div>
      </div>
    </div>
  )
}

export default Wallet

