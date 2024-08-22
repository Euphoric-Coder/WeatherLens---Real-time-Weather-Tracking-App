// Importing necessary CSS and image assets for the Weather component
import './Weather.css'
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"

// Defining the Weather component as a functional component
const Weather = () => {
  return (
    <div className='weather'>
        {/* Search bar section where users can input the location to search for weather */}
        <div className="search-bar">
            <input type="text" placeholder='Search Weather for a State' />
            <img src={search_icon} alt="Search Icon" />
        </div>
        
        {/* Displaying the current weather icon */}
        <img src={clear} alt="clear icon" className='weather-icon'/>

        {/* Displaying the current temperature */}
        <p className="temperature">16C</p>

        {/* Displaying the current location */}
        <p className="location">London</p>

        {/* Displaying additional weather data such as humidity and wind speed */}
        <div className="weather-data">
            <div className="col">
                {/* Humidity data */}
                <div className="row">
                    <img src={humidity} alt="Humidity Icon" />
                    <p>91 %</p>
                </div>
                <span>Humidity</span>
            </div>

            <div className="col">
                {/* Wind speed data */}
                <div className="row">
                    <img src={wind} alt="Wind Speed Icon" />
                    <p>3.6 km/hr</p>
                </div>
                <span>Wind Speed</span>
            </div>
        </div>
    </div>
  )
}

// Exporting the Weather component so it can be used in other parts of the application
export default Weather
