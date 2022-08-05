import React from "react";

import "./Header.css";

export default function HeaderDate() {
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];
let weekDay = days[now.getDay()];
let currentMonth = now.getMonth();
let month = months[currentMonth];
let date = now.getDate();
let year = now.getFullYear();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

  return (
    <div className="today">
      <div>
        <span id="weekDay">{weekDay}</span>,{" "}
        <span id="currentTime">{hour}:{minute}</span>
      </div>
      <div>
        <span id="currentDate">{month} {date}, {year}</span>
      </div>
    </div>
  );
}