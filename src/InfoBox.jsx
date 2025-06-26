import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox() {

    let init_img_url = "https://images.unsplash.com/photo-1638905132201-532d10903ea1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let info = {
        city: "jaipur",
        feelsLike: 42.1,
        humidity: 70,
        sunrise: 1750896278,
        sunset: 1750946058,
        tempMax: 35.1,
        tempMin: 35.1,
        temperature: 35.1,
        weather: "broken clouds",
    }

    return (
        <div className="infoBox">
            <h1>Weather info</h1>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={init_img_url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>temperature: {info.temperature}&deg;C</p>
                        <p>humidity: {info.humidity} </p>
                        <p>Max. temperature {info.tempMax}&deg;C</p>
                        <p>Min. temperature {info.tempMin}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        <p>Sunrise: {info.sunrise} </p>
                        <p>Sunset: {info.sunset} </p>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}