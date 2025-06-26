import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temperature: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            sunrise: jsonResponse.sys.sunrise,
            sunset: jsonResponse.sys.sunset,
            weather: jsonResponse.weather[0].description
        }
        console.log(result);
    }

    let handelChange = (event) => {
        setCity(event.target.value);
    }

    let handelSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo()
    }

    return (
        <div className='searchBox'>
            <h2>Search city</h2>
            <form onSubmit={handelSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    required
                    onChange={handelChange}
                />
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}