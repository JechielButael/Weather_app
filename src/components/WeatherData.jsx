import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import TimeAndLocation from "./TimeAndLocation";
import TempAndDetails from "./TempAndDetails";
import Forecast from "./Forecast";
import getFormattedWeatherData from "../services/WeatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherData = () => {
  const [query, setQuery] = useState({ q: "israel" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  function capitalizeFirstLetter(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
  }

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(
      `Tring to fetch weather data for ${capitalizeFirstLetter(cityName)}`
    );
    await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
        setWeather(data);
      })
      .catch((error) => {
        toast.error("City name does not exist, please try again.");
      });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div>
      <SearchBar setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default WeatherData;
