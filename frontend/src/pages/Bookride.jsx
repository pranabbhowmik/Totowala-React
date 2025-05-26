import React, { useEffect, useRef, useState } from "react";
import { MapPin, Plus, Clock, User, Search } from "lucide-react";
import { FaCar, FaBox } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import {
  useLoadScript,
  Autocomplete,
  GoogleMap,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import LocationSearchPanel from "../components/LocationSearchPanel";
import WaitingForDriver from "../components/WaitingForDriver";

const libraries = ["places", "geometry"];

const Bookride = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const suggestionsRef = useRef(null);
  const pickupAutocompleteRef = useRef(null);
  const destinationAutocompleteRef = useRef(null);
  const mapRef = useRef(null);

  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  // Mock ride objects for multiple Toto wala drivers
  const totoWalaRides = [
    {
      captain: {
        fullname: { firstname: "Toto Driver 1", lastname: "Singh" },
        vehicle: { plate: "WB-1234" },
      },
      pickup: pickup || "562/11-A",
      destination: destination || "562/11-B",
      fare: fare || 150,
      otp: "1234",
    },
    {
      captain: {
        fullname: { firstname: "Toto Driver 2", lastname: "Sharma" },
        vehicle: { plate: "WB-5678" },
      },
      pickup: pickup || "562/11-A",
      destination: destination || "562/11-B",
      fare: fare || 120,
      otp: "5678",
    },
    {
      captain: {
        fullname: { firstname: "Toto Driver 3", lastname: "Verma" },
        vehicle: { plate: "WB-9012" },
      },
      pickup: pickup || "562/11-A",
      destination: destination || "562/11-B",
      fare: fare || 180,
      otp: "9012",
    },
    {
      captain: {
        fullname: { firstname: "Toto Driver 4", lastname: "Yadav" },
        vehicle: { plate: "WB-3456" },
      },
      pickup: pickup || "562/11-A",
      destination: destination || "562/11-B",
      fare: fare || 160,
      otp: "3456",
    },
  ];

  // Initial suggestions
  const initialSuggestions = [
    { icon: <FaCar />, label: "Toto Ride" },
    { icon: <FaBox />, label: "Toto Package" },
  ];

  // Geocode address to coordinates
  const geocodeAddress = (address, callback) => {
    if (!isLoaded) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        callback({ lat: location.lat(), lng: location.lng() });
      } else {
        callback(null);
      }
    });
  };

  // Calculate distance and fare
  useEffect(() => {
    if (pickupCoords && destinationCoords && isLoaded) {
      const distanceInMeters =
        window.google.maps.geometry.spherical.computeDistanceBetween(
          new window.google.maps.LatLng(pickupCoords),
          new window.google.maps.LatLng(destinationCoords)
        );
      const distanceInKm = distanceInMeters / 1000;
      setDistance(distanceInKm.toFixed(2));
      setFare((distanceInKm * 10).toFixed(2));
    }
  }, [pickupCoords, destinationCoords, isLoaded]);

  // Handle pickup autocomplete
  const onPickupPlaceChanged = () => {
    if (pickupAutocompleteRef.current) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place && place.formatted_address) {
        setPickup(place.formatted_address);
        setPickupSuggestions([]);
        setPanelOpen(false);
        geocodeAddress(place.formatted_address, setPickupCoords);
      }
    }
  };

  // Handle destination autocomplete
  const onDestinationPlaceChanged = () => {
    if (destinationAutocompleteRef.current) {
      const place = destinationAutocompleteRef.current.getPlace();
      if (place && place.formatted_address) {
        setDestination(place.formatted_address);
        setDestinationSuggestions([]);
        setPanelOpen(false);
        geocodeAddress(place.formatted_address, setDestinationCoords);
      }
    }
  };

  // Handle pickup input change
  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);
    setActiveField("pickup");
    if (!isLoaded || !value) {
      setPickupSuggestions([]);
      setPanelOpen(false);
      return;
    }

    const autocompleteService =
      new window.google.maps.places.AutocompleteService();
    autocompleteService.getPlacePredictions(
      { input: value, types: ["geocode"] },
      (predictions, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          const suggestions = predictions.map((prediction) => ({
            description: prediction.description,
            placeId: prediction.place_id,
          }));
          setPickupSuggestions(suggestions);
          setPanelOpen(suggestions.length > 0);
        } else {
          setPickupSuggestions([]);
          setPanelOpen(false);
        }
      }
    );
  };

  // Handle destination input change
  const handleDestinationChange = async (e) => {
    const value = e.target.value;
    setDestination(value);
    setActiveField("destination");
    if (!isLoaded || !value) {
      setDestinationSuggestions([]);
      setPanelOpen(false);
      return;
    }

    const autocompleteService =
      new window.google.maps.places.AutocompleteService();
    autocompleteService.getPlacePredictions(
      { input: value, types: ["geocode"] },
      (predictions, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          const suggestions = predictions.map((prediction) => ({
            description: prediction.description,
            placeId: prediction.place_id,
          }));
          setDestinationSuggestions(suggestions);
          setPanelOpen(suggestions.length > 0);
        } else {
          setDestinationSuggestions([]);
          setPanelOpen(false);
        }
      }
    );
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
      setPickupSuggestions([]);
      geocodeAddress(suggestion.description, setPickupCoords);
    } else {
      setDestination(suggestion.description);
      setDestinationSuggestions([]);
      geocodeAddress(suggestion.description, setDestinationCoords);
    }
    setPanelOpen(false);
  };

  // Form submission handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (pickup.trim() && destination.trim()) {
      setWaitingForDriver(true);
    } else {
      alert("Please enter both pickup and dropoff locations.");
    }
  };

  // GSAP animations
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(panelCloseRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [waitingForDriver]);

  useGSAP(() => {
    gsap.fromTo(
      suggestionsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  // Check for API key and loading errors
  if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
    return <div>Error: Google Maps API key is missing in .env file.</div>;
  }

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  // LiveTracking Component
  const LiveTracking = () => {
    const mapContainerStyle = {
      width: "100%",
      height: "100%",
      minHeight: "400px",
    };

    const center = pickupCoords ||
      destinationCoords || { lat: 22.5726, lng: 88.3639 };

    const path =
      pickupCoords && destinationCoords
        ? [pickupCoords, destinationCoords]
        : [];

    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={pickupCoords && destinationCoords ? 12 : 10}
        onLoad={(map) => (mapRef.current = map)}
      >
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

  return (
    <div className="flex flex-col h-screen relative overflow-hidden bg-gray-100">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="p-6 lg:w-[30%] md:w-[40%] sm:w-full space-y-4 shadow-xl rounded-lg border-1 border-black max-h-[90%] relative bg-white">
          <h1 className="text-xl font-bold text-gray-800">Get a Toto Ride</h1>

          <form className="relative py-3" onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[30%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>

            {/* Pickup Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Autocomplete
                onLoad={(autocomplete) =>
                  (pickupAutocompleteRef.current = autocomplete)
                }
                onPlaceChanged={onPickupPlaceChanged}
              >
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={handlePickupChange}
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </Autocomplete>
            </div>

            {/* Dropoff Location */}
            <div className="relative mt-3">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Autocomplete
                onLoad={(autocomplete) =>
                  (destinationAutocompleteRef.current = autocomplete)
                }
                onPlaceChanged={onDestinationPlaceChanged}
              >
                <input
                  type="text"
                  placeholder="Dropoff location"
                  value={destination}
                  onChange={handleDestinationChange}
                  className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </Autocomplete>
              <button className="absolute right-3 top-2 p-1 rounded-full hover:bg-gray-200">
                <Plus className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Pickup Time and For Who */}
            <div className="flex gap-4 mt-3">
              <div className="relative flex-1">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <NavLink to="/pickup">
                  <button className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none bg-white">
                    Pickup time
                  </button>
                </NavLink>
              </div>
              <div className="relative flex-1">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <select className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none bg-white text-sm md:text-base lg:text-lg">
                  <option value="me">For me</option>
                  <option value="someone">Someone</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center mt-3"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </form>
        </div>
        <div
          className="flex-1 h-full relative"
          style={{ minHeight: "400px", zIndex: 1 }}
        >
          <LiveTracking />
        </div>
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 max-h-[70vh] overflow-y-auto"
      >
        <h5
          onClick={() => setWaitingForDriver(false)}
          className="absolute right-6 top-6 text-2xl cursor-pointer"
        >
          <i className="ri-close-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
          Available Toto Wala Drivers
        </h3>
        <div className="space-y-4">
          {totoWalaRides.map((ride, index) => (
            <div
              key={index}
              className="border-2 border-yellow-400 rounded-lg p-3"
            >
              <WaitingForDriver
                ride={{ ...ride, fare: fare || ride.fare }}
                setVehicleFound={() => {}}
                setWaitingForDriver={setWaitingForDriver}
                waitingForDriver={waitingForDriver}
              />
              <button
                className="w-full mt-3 bg-green-600 text-white font-semibold p-2 rounded-lg"
                onClick={() =>
                  console.log(
                    `Selected Toto Driver: ${ride.captain.fullname.firstname}`
                  )
                }
              >
                Select This Toto Wala
              </button>
            </div>
          ))}
        </div>
      </div>
      <div ref={suggestionsRef} className="pt-4 sm:hidden">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold">Suggestions</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2">
          {initialSuggestions.map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-3 bg-gray-100 rounded-lg hover:bg-[#FFFF25] text-center"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-xs md:text-sm lg:text-base">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookride;
