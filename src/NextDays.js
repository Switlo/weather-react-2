import React from "react";

import "./NextDays.css";

export default function NextDays() {
  return (
        <div className="card" id="weather-nextdays">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p className="week-day">Mon</p>
                <span className="nextdays">
                  <i className="fa-solid fa-cloud-sun icon2-cloudy"></i>
                  <br />
                  +16
                </span>
              </div>
              <div className="col">
                <p className="week-day">Tuh</p>
                <span className="nextdays">
                  <i className="fa-solid fa-cloud-sun icon2-cloudy"></i>
                  <br />
                  +18
                </span>
              </div>
              <div className="col">
                <p className="week-day">Wen</p>
                <span className="nextdays">
                  <i className="fa-solid fa-cloud-sun icon2-cloudy"></i>
                  <br />
                  +20
                </span>
              </div>
              <div className="col">
                <p className="week-day">Thu</p>
                <span className="nextdays">
                  <i className="fa-solid fa-cloud-sun icon2-cloudy"></i>
                  <br />
                  +18
                </span>
              </div>
              {/* <div className="col">
                <p className="week-day">Fr</p>
                <span className="nextdays">
                  <i className="fa-solid fa-cloud-sun icon2-cloudy"></i>
                  <br />
                  +19
                </span>
              </div> */}
            </div>
          </div>
        </div>
      
    
  );
}
