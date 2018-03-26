import React from "react";
import moment from "moment";
import tz from "moment-timezone";

const DataDump = ({
  formattedAddress,
  time,
  timezone,
  temperature,
  apparentTemperature,
  precipProbability,
  icon,
  summary,
  hideData
}) => (
  <div className={`data ${hideData()}`}>
    <div className="data__result">
      <svg className="data__icon">
        <use xlinkHref="images/sprite.svg#icon-location-pin" />
      </svg>
      <p>{formattedAddress}</p>
    </div>
    <div className="data__result">
      <svg className="data__icon">
        <use xlinkHref="images/sprite.svg#icon-clock" />
      </svg>
      <p>
        {moment
          .unix(time)
          .tz(timezone)
          .format("MMMM Do YYYY, h:mm:ssA")}
      </p>
    </div>
    <div className="data__result">
      <svg className="data__icon">
        <use xlinkHref="images/sprite.svg#icon-thermometer" />
      </svg>
      <p>{`${temperature} \u{2109}, but feels like ${apparentTemperature}`}</p>
    </div>
    <div className="data__result">
      <svg className="data__icon">
        <use xlinkHref="images/sprite.svg#icon-precip" />
      </svg>
      <p>{`${precipProbability * 100}% chance of precipitation.`}</p>
    </div>
    <div className="data__summary">
      <svg className="data__icon--weather">
        <use xlinkHref={`images/sprite.svg#icon-${icon}`} />
      </svg>
      <p>{summary}</p>
    </div>
  </div>
  // <div className="data">
  //   <div className="data__result">
  //     <svg className="data__icon">
  //       <use xlinkHref="images/sprite.svg#icon-location-pin" />
  //     </svg>
  //     <p>6835 Littlemore Drive Madison, WI 53718</p>
  //   </div>
  //   <div className="data__result">
  //     <svg className="data__icon">
  //       <use xlinkHref="images/sprite.svg#icon-clock" />
  //     </svg>
  //     <p>Tuesday March 27th 2018, 3:46:55 PM</p>
  //   </div>
  //   <div className="data__result">
  //     <svg className="data__icon">
  //       <use xlinkHref="images/sprite.svg#icon-thermometer" />
  //     </svg>
  //     <p>38&#8457;, but feels like 27&#8457;</p>
  //   </div>
  //   <div className="data__result">
  //     <svg className="data__icon">
  //       <use xlinkHref="images/sprite.svg#icon-precip" />
  //     </svg>
  //     <p>There's a good chance it's precipitating.</p>
  //   </div>
  //   <div className="data__summary">
  //     <svg className="data__icon--weather">
  //       <use xlinkHref="images/sprite.svg#icon-partly-cloudy-night" />
  //     </svg>
  //     <p>
  //       Partly cloudy until this evening. Chances of thunderstorms starting
  //       Tuesday. Should not be cold for the next hour.
  //     </p>
  //   </div>
  // </div>
);

export default DataDump;
