import React from 'react'
import logo from "../assets/logo.jpeg"
import { Nfc } from 'lucide-react';
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Wallet = () => {
  const navigate = useNavigate();
  const handelnavigate = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(-1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');
  const [savedUpiIds, setSavedUpiIds] = useState([]);

  const handleWalletPayment = () => {
    console.log('Cash Payment Selected');
    setIsModalOpen(false);
    setPaymentMethod('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'upi') {
      console.log('UPI Payment:', { upiId });
      setSavedUpiIds([...savedUpiIds, upiId]);
    }
    setIsModalOpen(false);
    setPaymentMethod('');
    setUpiId('');
  };

  const handleVoucherSubmit = (e) => {
    e.preventDefault();
    console.log('Voucher submitted:', voucherCode);
    setIsVoucherModalOpen(false);
    setVoucherCode('');
  };

  const handleDeleteUpiId = (index) => {
    const newUpiIds = savedUpiIds.filter((_, i) => i !== index);
    setSavedUpiIds(newUpiIds);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start p-4 md:p-8 lg:p-12 bg-gradient-to-br from-yellow-50 to-white">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-8 transition-all duration-300 hover:translate-x-2">
          <button onClick={handelnavigate} className="flex items-center">
            <ChevronLeft className="w-8 h-8 mr-2 bg-yellow-200 rounded-full opacity-60 text-black hover:text-yellow-700" />
          </button>
          <h1 className="text-3xl text-black font-bold font-robotoMono">Toto Wallet</h1>
        </div>

        <div className="bg-[#FFFF00] rounded-xl h-60 p-6 shadow-2xl relative overflow-hidden font-robotoMono w-full max-w-[420px] mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-yellow-200">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-md transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700">
              <div className="h-full w-full grid grid-cols-3 gap-[1px] p-[2px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-[#FFD700]"></div>
                ))}
              </div>
            </div>
            <img src={logo || "/placeholder.svg"} alt="Totowala Logo" className="w-16 h-16 object-contain" />
          </div>
          <div className="text-2xl font-bold mb-4 tracking-wider font-robotoMono text-left -mt-10">TOTO PASS</div>
          <div className="text-sm uppercase mb-4 font-robotoMono text-left">
            <div className="text-gray-700 text-xs mb-1">Card Holder</div>
            <div className="font-semibold">John Doe</div>
          </div>
          <div className="flex justify-between items-end font-robotoMono">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 text-sm font-semibold transform hover:scale-105">
              +ADD MONEY
            </button>
            <div className="text-right font-robotoMono">
              <div className="text-gray-700 text-xs mb-1">Balance</div>
              <div className="text-xl font-bold">₹1,000.00</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -mr-16 -mt-16 opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 rounded-full -ml-12 -mb-12 opacity-50 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="mt-12 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-robotoMono font-bold mb-6 hover:text-yellow-600 transition-colors duration-300">
          Payment Methods
        </h2>

        <div onClick={() => setIsModalOpen(true)} className="flex items-center gap-4 text-lg font-robotoMono mb-6 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-yellow-100 p-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="group-hover:text-yellow-600 transition-colors duration-300">Add Payment Methods</span>
        </div>

        {savedUpiIds.map((upi, index) => (
          <div key={index} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg mb-4 transition-all duration-300 hover:bg-yellow-50 hover:border-yellow-500">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9.5 9.5h5M9.5 13.5h5" />
              </svg>
              <div className="text-left">
                <div className="font-medium text-gray-900 font-robotoMono">UPI Payment</div>
                <div className="text-sm text-gray-500 font-robotoMono">{upi}</div>
              </div>
            </div>
            <button onClick={() => handleDeleteUpiId(index)} className="text-yellow-500 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleWalletPayment}
          className="flex items-center p-4 border-2 w-[360px] md:w-[450px] border-gray-200 rounded-lg transition-all duration-300 hover:bg-yellow-50 hover:border-yellow-500 active:bg-yellow-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet text-yellow-500 mr-4">
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
          </svg>
          <div className="text-left">
            <div className="font-medium text-gray-900 font-robotoMono">Wallet Payment</div>
            <div className="text-sm text-gray-500 font-robotoMono">Pay with Wallet</div>
          </div>
        </button>

        <div className="w-full h-[2px] bg-gray-200 my-6"></div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 sm:mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 font-robotoMono">Select Payment Method</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-yellow-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`flex items-center p-4 border-2 rounded-lg transition-all duration-300 hover:bg-yellow-50 ${
                  paymentMethod === 'upi' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'
                }`}
              >
                <svg className="w-8 h-8 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9.5 9.5h5M9.5 13.5h5" />
                </svg>
                <div className="text-left">
                  <div className="font-medium text-gray-900 font-robotoMono">UPI Payment</div>
                  <div className="text-sm text-gray-500 font-robotoMono">Pay using UPI</div>
                </div>
              </button>
            </div>

            {paymentMethod === 'upi' && (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-robotoMono">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="username@upi"
                    className="w-full px-4 py-3 border font-robotoMono border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 hover:border-yellow-400"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-gray-700 font-robotoMono bg-gray-100 rounded-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-sm font-medium text-white font-robotoMono bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <div className="mt-12 w-full max-w-md mx-auto font-robotoMono">
        <h2 className="text-2xl font-bold mb-4 hover:text-yellow-600 transition-colors duration-300">Profiles</h2>
        <p className="mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300">Shared with you</p>

        <div className="flex items-center gap-4 group cursor-pointer hover:bg-yellow-50 p-4 rounded-lg transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-yellow-100 p-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          <div className="flex-grow">
            <p className="font-bold tracking-tighter group-hover:text-yellow-600 transition-colors duration-300">Manage business rides for others</p>
            <p className="opacity-60 tracking-tighter group-hover:opacity-100 transition-opacity duration-300">Request access to their business profile</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 opacity-70 group-hover:opacity-100 bg-yellow-100 p-1 rounded-full transition-all duration-300 group-hover:bg-yellow-200 group-hover:translate-x-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="w-full h-[2px] bg-gray-200 my-6"></div>
      </div>

      <div className="mt-12 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-robotoMono font-bold mb-6 hover:text-yellow-600 transition-colors duration-300">Vouchers</h2>

        <div onClick={() => setIsVoucherModalOpen(true)} className="flex items-center gap-4 text-lg font-robotoMono group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-yellow-100 p-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-yellow-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="group-hover:text-yellow-600 transition-colors duration-300">Add Vouchers</span>
        </div>

        {isVoucherModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-robotoMono">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 sm:mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Add Voucher</h3>
                <button onClick={() => setIsVoucherModalOpen(false)} className="text-gray-500 hover:text-yellow-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleVoucherSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter Voucher Code</label>
                  <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter your voucher code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 hover:border-yellow-400"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsVoucherModalOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300"
                  >
                    Apply Voucher
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
 


  );
  
}

export default Wallet