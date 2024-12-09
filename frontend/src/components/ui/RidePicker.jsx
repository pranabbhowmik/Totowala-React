import React, { useState } from "react";
import {
  ChevronLeft,
  Clock,
  Calendar,
  Timer,
  AlertCircle,
  ChevronDown,
  ChevronLeftIcon,
  ChevronRight,
} from "lucide-react";

const timeSlots = [
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
];
import { useNavigate } from "react-router-dom";

const RidePicker = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("Now");
  const [dateExpanded, setDateExpanded] = useState(false);
  const [timeExpanded, setTimeExpanded] = useState(false);

  const formatDate = (date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const generateCalendar = () => {
    const calendar = [];
    const currentDate = new Date(selectedDate);
    currentDate.setDate(1);
    const firstDay = currentDate.getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 0; i < 42; i++) {
      if (i < firstDay || i >= firstDay + daysInMonth) {
        calendar.push(null);
      } else {
        const date = new Date(currentDate);
        date.setDate(i - firstDay + 1);
        calendar.push(date);
      }
    }

    return calendar;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" aria-label="Go back">
            <ChevronLeft className="w-6 h-6" onClick={() => navigate(-1)} />
          </button>
          <button
            className="text-black hover:text-gray-700"
            onClick={() => navigate(-1)}
          >
            Clear
          </button>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold mb-6">
          When do you want to be picked up?
        </h1>

        {/* Date Selector */}
        <div className="mb-4">
          <button
            className="w-full p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            onClick={() => setDateExpanded(!dateExpanded)}
          >
            <span>{formatDate(selectedDate)}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                dateExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          {dateExpanded && (
            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() - 1,
                        1
                      )
                    )
                  }
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <span>
                  {selectedDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() + 1,
                        1
                      )
                    )
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="text-center font-semibold">
                    {day}
                  </div>
                ))}
                {generateCalendar().map((date, index) => (
                  <button
                    key={index}
                    className={`p-2 rounded-full ${
                      date && date.getMonth() === selectedDate.getMonth()
                        ? "hover:bg-gray-200"
                        : "text-gray-400"
                    } ${
                      date &&
                      date.toDateString() === selectedDate.toDateString()
                        ? "bg-black text-white"
                        : ""
                    }`}
                    onClick={() => {
                      if (date) {
                        setSelectedDate(date);
                        setDateExpanded(false);
                      }
                    }}
                    disabled={
                      !date || date.getMonth() !== selectedDate.getMonth()
                    }
                  >
                    {date ? date.getDate() : ""}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Time Selector */}
        <div className="mb-6">
          <button
            className="w-full p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            onClick={() => setTimeExpanded(!timeExpanded)}
          >
            <span>{selectedTime}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                timeExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          {timeExpanded && (
            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <button
                className="w-full p-4 text-left hover:bg-gray-100"
                onClick={() => {
                  setSelectedTime("Now");
                  setTimeExpanded(false);
                }}
              >
                Now
              </button>
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className="w-full p-4 text-left hover:bg-gray-100"
                  onClick={() => {
                    setSelectedTime(time);
                    setTimeExpanded(false);
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Items */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <Calendar className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              Choose your pickup time up to 90 days in advance
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Timer className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              Extra wait time included to meet your ride
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              Cancel at no charge up to 60 minutes in advance
            </p>
          </div>
        </div>

        {/* Terms Link */}
        <button className="text-sm text-black hover:underline mb-8">
          See terms
        </button>

        {/* Next Button */}
        <button
          className="w-full bg-black text-white py-4 rounded-lg hover:bg-black/90 transition-colors"
          onClick={() => navigate("/book")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RidePicker;
