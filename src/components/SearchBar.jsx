import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import "../styles/SearchBar.css";

export const SearchBar = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (!city) {
      alert("Please Enter City Name");
    } else {
      setQuery({ q: city.trim() });
    }
    setCity("");
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        placeholder="Search"
        onChange={(e) => setCity(e.target.value)}
      />
      <BiSearch
        className="search-bar-icons icon-one"
        onClick={handleSearchClick}
      />
      <BiCurrentLocation
        className="search-bar-icons icon-two"
        onClick={handleLocationClick}
      />

      <div className="temp-units">
        <button className="unit-one" onClick={() => setUnits("metric")}>
          °C
        </button>
        <p>|</p>
        <button className="unit-two" onClick={() => setUnits("imperial")}>
          °F
        </button>
      </div>
    </div>
  );
};
