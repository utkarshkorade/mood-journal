import React from "react";

export default function CalendarView({ entries }) {
  if (!entries || entries.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Past Entries</h2>
        <p className="text-gray-500">No entries yet. Start journaling today!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Past Entries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="border rounded p-3 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-2">
              <p className="text-sm text-gray-500">{entry.date}</p>
              <p className="text-lg font-bold">
                {entry.mood?.emoji} {entry.mood?.label}
              </p>
            </div>
            <p className="text-sm text-gray-700 italic mb-2">"{entry.note}"</p>
            {entry.weather && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <img
                  src={`https://openweathermap.org/img/wn/${entry.weather.icon}.png`}
                  alt="weather"
                  className="w-6 h-6"
                />
                <span>{entry.weather.temp}°C</span>
                <span className="capitalize">- {entry.weather.description}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
