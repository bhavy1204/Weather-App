import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
import { useState } from 'react';
import { WidthFull } from '@mui/icons-material';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    // Error handling state for places which are not in our API
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getWeatherInfo = async () => {
        try {
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
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handelChange = (event) => {
        setCity(event.target.value);
    }

    let handelSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }

    }

    return (
        <div className='searchBox'>
            <form onSubmit={handelSubmit} className='searchForm'>
                <TextField
                    className="textField"
                    id="city"
                    label="City Name"
                    variant="standard"
                    value={city}
                    required
                    onChange={handelChange}
                />
                <Button variant="contained" type='submit' className='searchButton'>Search</Button>
                {error && <Alert severity="error" sx={{ width: '30%', margin: 'auto' }}>No such place found in our API</Alert>}
            </form>
        </div>
    )
}