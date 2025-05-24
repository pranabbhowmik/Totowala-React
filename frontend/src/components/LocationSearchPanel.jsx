import React from "react";

const LocationSearchPanel = React.forwardRef(
  (
    { suggestions, setPickup, setDestination, activeField, setPanelOpen },
    ref
  ) => {
    const handleSuggestionClick = (suggestion) => {
      if (activeField === "pickup") {
        setPickup(suggestion.description);
      } else if (activeField === "destination") {
        setDestination(suggestion.description);
      }
      setPanelOpen(false);
    };

    return (
      <div ref={ref} className="absolute w-full bg-white p-4 shadow-lg z-20">
        {suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem.description}</h4>
          </div>
        ))}
      </div>
    );
  }
);

export default LocationSearchPanel;
