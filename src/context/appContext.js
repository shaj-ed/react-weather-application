import { createContext, useState } from "react";
import useWeather from "../Hooks/useWeather";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("chittagong");
  const [unit, setUnit] = useState("metric");
  const { weather, loading, error } = useWeather(city, unit);

  const value = { city, setCity, unit, setUnit, weather, loading, error };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
