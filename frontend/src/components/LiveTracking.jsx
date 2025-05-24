import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "400px",
};

const defaultCenter = {
  lat: 22.5726, // Kolkata, India (consistent with Bookride.jsx)
  lng: 88.3639,
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);

  useEffect(() => {
    // Get initial position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Initial position:", latitude, longitude);
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );

    // Watch for position updates
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Position updated:", latitude, longitude);
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Geolocation watch error:", error);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={15}
    >
      <Marker position={currentPosition} />
    </GoogleMap>
  );
};

export default LiveTracking;
