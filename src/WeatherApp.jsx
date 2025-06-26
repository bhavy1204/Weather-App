import './WeatherApp.css'
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from 'react'

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "jaipur",
        feelsLike: 42.1,
        humidity: 70,
        sunrise: 1750896278,
        sunset: 1750946058,
        tempMax: 35.1,
        tempMin: 35.1,
        temperature: 35.1,
        weather: "broken clouds",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <div className="weatherApp">
            <h2>My first react project</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}