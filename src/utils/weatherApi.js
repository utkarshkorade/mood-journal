

const API_KEY = "f002bfce174020aafeba5d2cd48fe072";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      return {
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        location: data.name,
      };
    } else {
      throw new Error(data.message || "Failed to fetch weather.");
    }
  } catch (error) {
    console.error("Weather fetch error:", error);
    return {
      temp: "N/A",
      description: "Unable to fetch",
    };
  }
};


export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject("Unable to retrieve your location.");
        }
      );
    }
  });
};
