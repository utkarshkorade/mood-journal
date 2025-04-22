import React, { useState, useEffect } from "react";
import MoodSelector from "./MoodSelector";
import WeatherDisplay from "./WeatherDisplay";
import { getWeatherByCoords } from "../utils/weatherApi";

export default function EntryForm({ onSave }) {
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const data = await getWeatherByCoords(latitude, longitude);
        setWeather(data);
        setLoading(false);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setLoading(false);
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood || !note.trim()) {
      alert("Please select a mood and write a note.");
      return;
    }

    const entry = {
      date: today,
      mood,
      note,
      weather,
    };

    onSave(entry); 
    setNote("");
    setMood(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-lg mb-6"
    >
      <p className="mb-2 text-lg font-semibold">Today: {today}</p>

      <MoodSelector selectedMood={mood} onMoodSelect={setMood} />

      <textarea
        className="w-full mt-4 p-2 border rounded resize-none"
        placeholder="How are you feeling today?"
        rows="3"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required
      />

      {!loading && weather && (
        <div className="mt-4">
          <WeatherDisplay weather={weather} />
        </div>
      )}

      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
      >
        Save Entry
      </button>
    </form>
  );
}
