import React, { useState, useEffect } from "react";
import { getCurrentLocation, getWeatherByCoords } from "../utils/weatherApi";

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    getCurrentLocation()
      .then(({ lat, lon }) => getWeatherByCoords(lat, lon))
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.error("Error getting location or weather:", error);
        setLocationError(error.toString());
      });
  }, []);

  if (locationError) {
    return <div className="weather-display">Error: {locationError}</div>;
  }

  return (
    <div className="weather-display">
      <h3>Current Weather</h3>
      {weather ? (
        <div>
          <p>Temperature: {weather.temp}°C</p>
          <p>Description: {weather.description}</p>
          {weather.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
              alt={weather.description}
            />
          )}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
