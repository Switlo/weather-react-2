// import React, { useState } from "react";
// import axios from "axios";

// import "./Header.css";


// export default function HeaderForm({onChange}) {
//   // const [weatherData, setWeatherData] = useState({ ready: false });
//   // const [city, setCity] = useState();

//   // function handleResponse(response) {
//   //   console.log(response.data);
//   //   setWeatherData({
//   //     ready: true,
        
//   //   })
//   // }

//   // function handleSubmit(event) {
//   //   event.preventDefault();
//   //   search();
//   // }

//   // function updateCity(event) {
//   //   setCity(event.target.value);
//   //     }

//   // function search(){
//   //     const apiKey = "edb5073dfa06a01ce33233d517b9358c";
//   //     let unit = "metric";
//   //     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

//   //     axios.get(apiUrl).then(handleResponse);
//   //   } 
  
//     //  if (weatherData.ready) {
//   return (  
    
//     <div className="HeaderForm">
//       <form className="typeCity">
//         <input
//           className="form-control form-control-sm"
//           type="search"
//           placeholder="Type a city and press Enter"
//           autoFocus="on"
//           autoComplete="off"
//           onChange={onChange}
//         />
//     </form>
              
//     </div>
//   );
//   // } else {
//   //   search();
//   //   return "Please wait, App is loading...";

//   // }
// }
