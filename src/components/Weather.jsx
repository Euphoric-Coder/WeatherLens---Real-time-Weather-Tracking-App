// // Importing necessary CSS and image assets for the Weather component
// import './Weather.css'
// import search_icon from "../assets/search.png"
// import clear from "../assets/clear.png"
// import cloud from "../assets/cloud.png"
// import drizzle from "../assets/drizzle.png"
// import humidity from "../assets/humidity.png"
// import rain from "../assets/rain.png"
// import snow from "../assets/snow.png"
// import wind from "../assets/wind.png"
// import appicon from '../assets/weather-app.png'

// // Defining the Weather component as a functional component
// const Weather = () => {
//     // Returns the result from the Search input element
//     const search = async (city) => { 
//         try {
//             const url = ``
//         } catch (error) {
            
//         }
//     }

//     // Stores the list of cities for displaying purpose
//     const cities = [
//         {
//             id: 1,
//             name: "Kolkata",
//         },
//         {
//             id: 2,
//             name: "London",
//         },
//         {
//             id: 3,
//             name: "Sydney",
//         },
//         {
//             id: 4,
//             name: "Paris",
//         },
//         {
//             id: 5,
//             name: "Toronto",
//         }
//     ];
//   return (
//     <div className='weather'>
//         {/* App icon and heading */}
//         <div className="app-icon-heading">
//             <img height={80} src={appicon} alt="WeatherLens Icon" />
//             <h1>WeatherLens</h1>
//         </div>
        
//         {/* Country selection buttons */}
//         <div className="country-buttons">
//             {cities.map((city) => (
//                 <button key={city.id} onClick={() => search(city.name)}>
//                     {city.name}
//                 </button>
//             ))}
//         </div>

//         {/* Search bar section where users can input the location to search for weather */}
//         <div className="search-bar">
//             <input type="text" placeholder='Search Weather for a State' />
//             <img src={search_icon} alt="Search Icon" />
//         </div>
        
//         {/* Displaying the current weather icon */}
//         <img src={clear} alt="clear icon" className='weather-icon'/>

//         {/* Displaying the current temperature */}
//         <p className="temperature">16°C</p>

//         {/* Displaying the current location */}
//         <p className="location">London</p>

//         {/* Displaying additional weather data such as humidity and wind speed */}
//         <div className="weather-data">
//             <div className="col">
//                 {/* Humidity data */}
//                 <div className="row">
//                     <img src={humidity} alt="Humidity Icon" />
//                     <p>91 %</p>
//                 </div>
//                 <span>Humidity</span>
//             </div>

//             <div className="col">
//                 {/* Wind speed data */}
//                 <div className="row">
//                     <img src={wind} alt="Wind Speed Icon" />
//                     <p>3.6 km/hr</p>
//                 </div>
//                 <span>Wind Speed</span>
//             </div>
//         </div>
//     </div>
//   )
// }

// // Exporting the Weather component so it can be used in other parts of the application
// export default Weather


import React, { useState, useEffect, useRef } from 'react';
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { TbTemperatureFahrenheit, TbTemperatureCelsius } from "react-icons/tb";
import './Weather.css';
import AnimatedCounter from './AnimatedCounter';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(false);
    const inputRef = useRef(null);

    const search = async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`
            );
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                location: data.name,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || '/src/assets/clear.png',
                name: data.sys.country,
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(false);
        }
    };

    useEffect(() => {
        search('Kolkata');
    }, []);

    return (
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder="Search" />
                <BiSearch
                    className='search-icon'
                    src="/src/assets/search.png"
                    alt="Search"
                    onClick={() => search(inputRef.current.value)}
                />
                <BiCurrentLocation 
                    className='search-icon'
                />
            </div>
            {weatherData && (
                <>
                    <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
                    <p className="temperature"><AnimatedCounter value={weatherData.temperature}/>°C</p>
                    <p className="location">{weatherData.location}, {weatherData.name}</p>
                    <div className="weather-data">
                        <div className="column">
                            <img src="/src/assets/humidity.png" alt="Humidity" />
                            <p><AnimatedCounter value={weatherData.humidity}/> % <span>Humidity</span></p>
                        </div>
                        <div className="column">
                            <img src="/src/assets/wind.png" alt="Wind" />
                            <p><AnimatedCounter value={weatherData.windSpeed}/> km/h Wind Speed</p>
                            
                        </div>
                        <div className="column">
                            <FaTemperatureThreeQuarters/>
                            <p>{weatherData.windSpeed} km/ <span>Wind Speed</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Weather;




//  height: 50px; /* Sets the height of the input field */
//     width: 500px; /* Sets the width of the input field */
//     border: none; /* Removes the default border */
//     outline: none; /* Removes the default outline on focus */
//     border-radius: 40px; /* Rounds the corners of the input field */
//     padding-left: 25px; /* Adds padding to the left for the text inside the input */
//     color: #626262; /* Sets the text color inside the input field */
//     background-color: #ebfffc; /* Sets the background color of the input field */
//     font-size: 18px; /* Sets the font size of the input text */


// /* Styles for each column within the weather data section */
// .weather-data .column {
//     display: flex; /* Enables flexbox layout for the column */
//     flex-direction: column; /* Aligns items vertically */
//     align-items: flex-start; /* Aligns items to the left */
//     gap: 8px; /* Adds space between the items */
//     font-size: 22px; /* Sets the font size for the data */
// }

// /* Styles for each row within the columns */
// .weather-data .column {
//     display: flex; /* Enables flexbox layout for the row */
//     align-items: center; /* Aligns items vertically centered */
//     gap: 8px; /* Adds space between the icon and the data */
// }

// /* Styles for the icons in the weather data columns */
// .weather-data .col img {
//     width: 26px; /* Sets the size of the weather data icons */
// }