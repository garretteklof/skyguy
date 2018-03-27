import React from "react";

export const seedDataDump = () => {
  return (
    <div className="data">
      <div className="data__result">
        <svg className="data__icon">
          <use xlinkHref="images/sprite.svg#icon-location-pin" />
        </svg>
        <p>6835 Littlemore Drive Madison, WI 53718</p>
      </div>
      <div className="data__result">
        <svg className="data__icon">
          <use xlinkHref="images/sprite.svg#icon-clock" />
        </svg>
        <p>Tuesday March 27th 2018, 3:46:55 PM</p>
      </div>
      <div className="data__result">
        <svg className="data__icon">
          <use xlinkHref="images/sprite.svg#icon-thermometer" />
        </svg>
        <p>38&#8457;, but feels like 27&#8457;</p>
      </div>
      <div className="data__result">
        <svg className="data__icon">
          <use xlinkHref="images/sprite.svg#icon-precip" />
        </svg>
        <p>There's a good chance it's precipitating.</p>
      </div>
      <div className="data__summary">
        <svg className="data__icon--weather">
          <use xlinkHref="images/sprite.svg#icon-partly-cloudy-night" />
        </svg>
        <p>
          Partly cloudy until this evening. Chances of thunderstorms starting
          Tuesday. Should not be HOT for the next hour.
        </p>
      </div>
    </div>
  );
};
