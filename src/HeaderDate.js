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

let seasonBackground = document.querySelector("#container");
changeBackground();

function changeBackground() {
  if (currentMonth === 11 || currentMonth === 0 || currentMonth === 1) {
    seasonBackground.style.background = `linear-gradient(#64c4ed, #f7f7f7)`;
    // nextDaysBackground.style.background = `linear-gradient(#e1f2fb, #f7f7f7)`;
  }
  if (currentMonth === 2 || currentMonth === 3 || currentMonth === 4) {
    seasonBackground.style.background = `linear-gradient(#4ef037, #f7f7f7)`;
    // nextDaysBackground.style.background = `linear-gradient(#4ef037, #f7f7f7)`;
  }
  if (currentMonth === 5 || currentMonth === 6 || currentMonth === 7) {
    seasonBackground.style.background = `linear-gradient(#ffe700, #f7f7f7)`;
    // nextDaysBackground.style.background = `linear-gradient(#fcff82, #f7f7f7)`;
  }
  if (currentMonth === 8 || currentMonth === 9 || currentMonth === 10) {
    seasonBackground.style.background = `linear-gradient(#ffc93c, #f7f7f7)`;
    // nextDaysBackground.style.background = `linear-gradient(#ffc93c, #f7f7f7)`;
  }
}

  return (
    <div className="HeaderDate">
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