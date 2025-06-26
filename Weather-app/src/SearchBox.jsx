import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b2f28224a62b89d0625ad5d08fc6cd33";

    const getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            temperature: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity
        }
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