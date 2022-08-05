import React from "react";

import "./Header.css";

export default function CentralAphorism() {
  let quotes = [
    `The weather is perfect. The gods are shining on us.`,
    `Bad weather always looks worse through a window.`,
    `I've never been one to bet on the weather.`,
    `Wherever you go, no matter what the weather, always bring your own sunshine.`,
    `There is no such thing as bad weather, only different kinds of good weather.`,
    `There's no such thing as bad weather, just soft people.`,
    `If you want to see the sunshine, you have to weather the storm.`,
  ];
  let quoter = getAphorism(quotes);
  function getAphorism(values) {
    const max = values.length - 1;
    const min = 0;
    const index = Math.round(Math.random() * (max - min) + min);
    const result = values[index];
    return result;
  }

  return (
    <div className="card" id="centralCard" >
      <div className="card-body" id="aphorism">
        <h2 className="aphorism">
          {quoter}
        </h2>
      </div>
    </div>
  );
}
