import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "../styles/TempAndDetails.css";
import allIcons from "../utils/IconMappings.js";

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];
  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];
  return (
    <div className="temp-and-details">
      <div className="climate">
        <p>{details}</p>
      </div>

      <div className="vertical">
        <img className="weather-icon" src={allIcons[icon]} alt="clear-icon" />

        <p className="current-weather">{`${temp.toFixed()}°`}</p>

        <div className="vertical-details">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="vertical-detail">
              <Icon className="detail-icon" />
              {`${title}: `}
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="horizontal-details">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id}>
            <Icon className="detail-icon" />
            {`${title}: `}
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
