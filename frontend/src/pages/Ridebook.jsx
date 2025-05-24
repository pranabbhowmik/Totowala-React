import React from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const RideBook = () => {
  const location = useLocation();

  const navigate = useNavigate();

  // socket.on("ride-ended", () => {
  //   navigate("/home");
  // });

  return (
    <div className="h-screen">
      <div className="h-1/2">
        <LiveTracking />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">
              {/* {ride?.captain.fullname.firstname} */} Pranab Bhowmik
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {/* {ride?.captain.vehicle.plate} */} WB-R7891
            </h4>
            <p className="text-sm text-gray-600">Ether Toto</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  {/* {ride?.destination} */} KOlkata - Newtown
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹500 </h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default RideBook;
