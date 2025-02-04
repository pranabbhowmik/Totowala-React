import React from 'react'
import logo from "../../assets/logo.jpeg"
import { Nfc } from 'lucide-react';

function Totopass() {
  return (
    <div className="min-h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#FFFF00] h-60 rounded-xl p-6 shadow-2xl relative overflow-hidden font-robotoMono">
          <div className="flex justify-between items-start mb-6">
            {/* EMV Chip */}
            <div className="w-12 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-md ">
              <div className="h-full w-full grid grid-cols-3 gap-[1px] p-[2px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-[#FFD700]"></div>
                ))}
              </div> 
                  
            </div>
             

            {/* Logo */}
            <img 
              src={logo} 
              alt="Totowala Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Card Number */}
          <div className="text-2xl font-bold -mt-8 tracking-wider">
            TOTO PASS
          </div>

          {/* Card Holder Name */}
          <div className="text-sm uppercase mb-4">
            <div className="text-gray-700 text-xs mb-1 mt-2">Card Holder</div>
            <div className="font-semibold">John Doe</div>
          </div>

          <div className="flex justify-between items-end">
            {/* Add Money Button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 text-sm font-semibold">
              +ADD MONEY
            </button>

            {/* Balance */}
            <div className="text-right">
              <div className="text-gray-700 text-xs mb-1">Balance</div>
              <div className="text-xl font-bold">₹1,000.00</div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 rounded-full -ml-12 -mb-12 opacity-50"></div>
        </div>
      </div>
    </div>
  );
  
}

export default Totopass