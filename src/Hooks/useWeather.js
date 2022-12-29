import { useEffect, useState } from "react";

const useWeather = (city, unit) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        const coords = await res.json();
        const { lat, lon } = await coords[0];
        const newRes = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&units=${unit}`
        );
        const data = await newRes.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error.message);
      }
    };

    getWeatherData();
  }, [city, unit]);

  return { weather, loading, error };
};

export default useWeather;
