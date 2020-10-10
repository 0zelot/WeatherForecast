import React from "react";

import lang from "../../utils/getLanguage.js";


const ForecastCard = (props) => {
    const forecast = props.id._attributes;
    
    return (
        <div className="darkness forecast-card">
            <img src={`https://blob.weather.microsoft.com/static/weather4/en-us/law/${forecast.skycodeday}.gif`} alt={forecast.skycodeday} /><br />
            <span>
                <span className="card-day">{lang("result.day." + forecast.day.toLowerCase())}</span><br />
                {lang("result.skytext.temperature")}<span className="card-temperature">{forecast.low}°C - {forecast.high}°C</span>
            </span>
        </div>
    );
}
  
export default ForecastCard;