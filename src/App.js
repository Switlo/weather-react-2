import React, { useState } from 'react';
import axios from 'axios';

import HeaderDate from "./HeaderDate";
import CentralCity from './CentralCity';
import CentralAphorism from './CentralAphorism';
import NextDays from './NextDays';
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Kyiv");

function handleResponse(response) {
      setWeatherData({
      ready: true,
      coord:response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon          
    })
  }

function handleSubmit(event) {
    event.preventDefault();
    search();
  }  
 

  function updateCity(event) {
    setCity(event.target.value);     
  }
    

  function search(){
      const apiKey = "edb5073dfa06a01ce33233d517b9358c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    } 
    
    if (weatherData.ready) {
   return (
    <div className="App">
      <div className="container" id="container">
        <div className="card" id="card">
          <div className="card-body">
             <div className="row">
                <div className="col">
                  <HeaderDate />
                </div>
                  <div className="col">
                    <div className="HeaderForm">
                      <form onSubmit={handleSubmit} id="formaCity">
                      <input
                        className="form-control form-control-sm"
                        id="city-input"
                        type="search"
                        placeholder="Type a city and press Enter"
                        autoFocus="on"
                        autoComplete="off"
                        onChange={updateCity}
                      />
                      </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
          <div className="row g-0">
            <div className="col">
              <CentralCity data={weatherData} /> 
            </div>
             <div className="col">
              <CentralAphorism />
            </div>
          </div>
          <div>
            <NextDays coord={weatherData.coord}/>
          </div>
      </div>
      <div>
          <Footer />
      </div>
    </div>    
  );  
} else {
    search();
    return null;
  }
     
}