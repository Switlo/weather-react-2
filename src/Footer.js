import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
      © This project was coded by&nbsp;
        <a
          href="https://www.linkedin.com/in/svitlana-rudyeva-19156a181/"
          target="_blank" rel="noopener noreferrer"
        >
          Svitlana Rudyeva
        </a>&nbsp;
        
        | Open-sourced code is on&nbsp;
        <a href="https://github.com/Switlo/weather-react" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
}
