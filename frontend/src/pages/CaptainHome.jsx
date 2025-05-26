import { useEffect, useRef, useState } from "react";
import { MapPin, Bell, Circle, ArrowLeft, Navigation } from "lucide-react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const libraries = ["places", "geometry"];

function CaptainHome() {
  const [showNewBooking, setShowNewBooking] = useState(false);
  const [rideState, setRideState] = useState("waiting"); // waiting, accepted, otp-entered, confirmed
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [bookingData, setBookingData] = useState(null);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  const newBookingRef = useRef(null);
  const otpSectionRef = useRef(null);
  const mapRef = useRef(null);

  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDhMFX1TjTY2BSYCM3EIuvFFmCEFnIuqPI",
    libraries,
  });

  // Geocode addresses to coordinates
  const geocodeAddress = (address, callback) => {
    if (!isLoaded) {
      console.error("Google Maps not loaded for geocoding");
      return;
    }
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        console.log(`Geocoded ${address}:`, {
          lat: location.lat(),
          lng: location.lng(),
        });
        callback({ lat: location.lat(), lng: location.lng() });
      } else {
        console.error(
          `Geocoding failed for address: ${address}, status: ${status}`
        );
        callback(null);
      }
    });
  };

  // Track current position
  useEffect(() => {
    if (!isLoaded || rideState !== "confirmed") return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Current position:", { lat: latitude, lng: longitude });
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Geolocation error:", error);
        setCurrentPosition({ lat: 20.2961, lng: 85.8245 }); // Fallback to Bhubaneswar
      }
    );

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Geolocation watch error:", error);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [isLoaded, rideState]);

  // Set coordinates when booking data is available
  useEffect(() => {
    if (bookingData && isLoaded) {
      geocodeAddress(bookingData.pickup, setPickupCoords);
      geocodeAddress(bookingData.dropoff, setDestinationCoords);
    }
  }, [bookingData, isLoaded]);

  // Adjust map bounds when coordinates are set
  useEffect(() => {
    if (isLoaded && mapRef.current && pickupCoords && destinationCoords) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(pickupCoords);
      bounds.extend(destinationCoords);
      if (currentPosition) bounds.extend(currentPosition);
      mapRef.current.fitBounds(bounds);
    }
  }, [pickupCoords, destinationCoords, currentPosition, isLoaded]);

  // Simulate new booking
  useEffect(() => {
    import("gsap").then((gsap) => {
      const { default: gsapCore } = gsap;

      const timer = setTimeout(() => {
        if (rideState === "waiting") {
          setShowNewBooking(true);
          setBookingData({
            pickup: "Nimtouri, West Bengal 721648, India",
            dropoff: "Simulia, West Bengal 721649, India",
            time: "Now",
            distance: "3.1 km",
            passenger: "Pranab Bhowmik",
            otp: "1234",
          });

          if (newBookingRef.current) {
            gsapCore.fromTo(
              newBookingRef.current,
              { scale: 0, opacity: 0, rotation: -10 },
              {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
              }
            );
          }
        }
      }, 2000);

      return () => clearTimeout(timer);
    });
  }, [rideState]);

  const handleAccept = () => {
    import("gsap").then((gsap) => {
      const { default: gsapCore } = gsap;

      gsapCore.to(newBookingRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowNewBooking(false);
          setRideState("accepted");

          setTimeout(() => {
            if (otpSectionRef.current) {
              gsapCore.fromTo(
                otpSectionRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
              );
            }
          }, 100);
        },
      });
    });
  };

  const handleReject = () => {
    import("gsap").then((gsap) => {
      const { default: gsapCore } = gsap;

      gsapCore.to(newBookingRef.current, {
        x: 300,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setShowNewBooking(false);
          setRideState("waiting");
        },
      });
    });
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleConfirmRide = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === bookingData.otp) {
      import("gsap").then((gsap) => {
        const { default: gsapCore } = gsap;

        gsapCore.to(otpSectionRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setRideState("confirmed");
          },
        });
      });
    } else {
      import("gsap").then((gsap) => {
        const { default: gsapCore } = gsap;
        gsapCore.to(otpSectionRef.current, {
          x: [-10, 10, -10, 10, 0],
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }
  };

  const handleBackToWaiting = () => {
    setRideState("waiting");
    setOtp(["", "", "", ""]);
    setShowNewBooking(false);
    setBookingData(null);
    setPickupCoords(null);
    setDestinationCoords(null);
    setCurrentPosition(null);
  };

  // Map Component
  const LiveTracking = () => {
    const mapContainerStyle = {
      width: "100%",
      height: "100%",
      minHeight: "400px",
    };

    const center = currentPosition ||
      pickupCoords ||
      destinationCoords || { lat: 20.2961, lng: 85.8245 };

    const path =
      pickupCoords && destinationCoords
        ? [pickupCoords, destinationCoords]
        : [];

    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={pickupCoords && destinationCoords ? 12 : 15}
        onLoad={(map) => (mapRef.current = map)}
        options={{
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {currentPosition && (
          <Marker
            position={currentPosition}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            title="Current Location"
          />
        )}
        {pickupCoords && (
          <Marker
            position={pickupCoords}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            title="Pickup Location"
          />
        )}
        {destinationCoords && (
          <Marker
            position={destinationCoords}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            title="Dropoff Location"
          />
        )}
        {path.length === 2 && (
          <Polyline
            path={path}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />
        )}
      </GoogleMap>
    );
  };

  if (loadError) {
    return (
      <div className="bg-red-100 rounded-2xl p-4 h-64 md:h-80 lg:h-96 flex items-center justify-center">
        <p className="text-red-600">
          Error loading Google Maps: {loadError.message}
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="bg-gray-100 rounded-2xl p-4 h-64 md:h-80 lg:h-96 flex items-center justify-center">
        <p className="text-gray-600">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[60rem] sm:min-h-screen bg-[#FFFF00] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-4 mb-4">
            {rideState !== "waiting" && (
              <button
                onClick={handleBackToWaiting}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-900" />
              </button>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {rideState === "waiting" && "Welcome, Captain"}
              {rideState === "accepted" && "Enter OTP"}
              {rideState === "confirmed" && "Ride in Progress"}
            </h1>
          </div>

          {rideState === "waiting" && (
            <div className="flex items-center gap-2 text-gray-800">
              <Circle className="w-3 h-3 fill-green-500 text-green-500" />
              <span className="text-lg md:text-xl font-medium">
                You are Online
              </span>
            </div>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Map and Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Container */}
            <div className="bg-gray-100 rounded-2xl p-4 h-64 md:h-80 lg:h-96 relative overflow-hidden shadow-lg">
              {rideState === "confirmed" ? (
                pickupCoords && destinationCoords ? (
                  <LiveTracking />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-600">
                      Geocoding locations, please wait...
                    </p>
                  </div>
                )
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50 opacity-60"></div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-gray-300"></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-300 opacity-40"></div>
                  <div className="absolute top-2/3 left-0 w-full h-1 bg-gray-300 opacity-40"></div>
                  <div className="absolute left-1/4 top-0 w-1 h-full bg-gray-300 opacity-40"></div>
                  <div className="absolute left-3/4 top-0 w-1 h-full bg-gray-300 opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <MapPin className="w-8 h-8 md:w-10 md:h-10 text-gray-900 drop-shadow-lg" />
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full opacity-30"></div>
                    </div>
                  </div>
                  <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-green-300 rounded opacity-60"></div>
                  <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-300 rounded opacity-60"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-green-400 rounded opacity-60"></div>
                </>
              )}
            </div>

            {/* Status Message */}
            {rideState === "waiting" && (
              <div className="bg-yellow-200 rounded-2xl p-6 md:p-8 shadow-lg">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
                  No bookings yet. Waiting...
                </p>
              </div>
            )}

            {rideState === "confirmed" && (
              <div className="bg-green-100 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center justify-center gap-3">
                  <Navigation className="w-6 h-6 text-green-600" />
                  <p className="text-xl md:text-2xl font-semibold text-green-800 text-center">
                    Ride Confirmed - Navigate to pickup location
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Notifications and OTP */}
          <div className="lg:col-span-1">
            {/* New Booking Notification */}
            {showNewBooking && (
              <div
                ref={newBookingRef}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-yellow-300 mb-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FFFF00] rounded-full p-2">
                    <Bell className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    New Booking!
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Pickup:</span>
                    <span className="text-gray-900">{bookingData?.pickup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">
                      Drop-off:
                    </span>
                    <span className="text-gray-900">
                      {bookingData?.dropoff}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Time:</span>
                    <span className="text-gray-900">{bookingData?.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">
                      Distance:
                    </span>
                    <span className="text-gray-900">
                      {bookingData?.distance}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">
                      Passenger:
                    </span>
                    <span className="text-gray-900">
                      {bookingData?.passenger}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-[#FFFF00] hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>
            )}

            {/* OTP Entry Section */}
            {rideState === "accepted" && (
              <div
                ref={otpSectionRef}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Enter Passenger OTP
                </h3>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Ask the passenger for their 4-digit OTP to confirm the ride
                  </p>

                  <div className="flex gap-3 justify-center mb-6">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        maxLength={1}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleConfirmRide}
                  disabled={otp.some((digit) => !digit)}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Confirm Ride
                </button>

                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Passenger:</strong> {bookingData?.passenger}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Route:</strong> {bookingData?.pickup} →{" "}
                    {bookingData?.dropoff}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainHome;
