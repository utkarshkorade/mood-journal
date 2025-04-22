import React, { useState, useEffect } from "react";
import MoodSelector from "./components/MoodSelector";
import WeatherDisplay from "./components/WeatherDisplay";
import EntryForm from "./components/EntryForm";
import CalendarView from "./components/CalendarView";
import { saveEntry, getEntries } from "./utils/storage";
import "./styles.css"; 

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = getEntries();
    setEntries(savedEntries);
  }, []);

  const handleSaveEntry = (entry) => {
    saveEntry(entry);
    setEntries([entry, ...entries]);
  };

  return (
    <div className="container">
      <h1 className="heading">Mood Journal</h1>
      <WeatherDisplay />
      <EntryForm onSave={handleSaveEntry} />
      <CalendarView entries={entries} />
    </div>
  );
};

export default App;
