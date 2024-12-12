import React from "react";
import "../styles/Forecast.css";
import allIcons from "../utils/IconMappings";

const Forecast = ({ title, data }) => {
  return (
    <div className="forecast">
      <div className="forecast-title">
        <p>{title}</p>
        <hr />
      </div>
      <div className="forecast-tickets">
        {data.map((d, index) => (
          <div key={index} className="forecast-ticket">
            <p>{d.title}</p>
            <img src={allIcons[d.icon]} alt="clear-icon" />
            <p> {`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
