import React from "react";

const TestSuggestions = () => {
  const suggestions = [
    {
      description: "Kolkata, West Bengal, India",
      placeId: "ChIJZ_YA0T9y5zsR1",
    },
    { description: "Kolkata Airport, India", placeId: "ChIJX8_123456789" },
  ];

  return (
    <ul>
      {suggestions.map((suggestion) => (
        <li key={suggestion.placeId}>{suggestion.description}</li>
      ))}
    </ul>
  );
};

export default TestSuggestions;
