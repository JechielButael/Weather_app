import React from "react";
import "../styles/TimeAndLocation.css";

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="time-and-location">
      <div>
        <p>{formattedLocalTime}</p>
      </div>
      <div className="location">
        <p>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
