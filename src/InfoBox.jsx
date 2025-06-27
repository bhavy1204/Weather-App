import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import BedtimeIcon from '@mui/icons-material/Bedtime';

export default function InfoBox({ info }) {

    let init_img_url = "";

    const HOT_URl = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const MILD_URL = "https://images.unsplash.com/photo-1638905132201-532d10903ea1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    function convertUnixToTime(unixTime) {
        const date = new Date(unixTime * 1000);
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    }


    return (
        <div className="infoBox">
            <div className="classContainer">
                <Card sx={{ maxWidth: 345 }} >
                    <CardMedia
                        sx={{ height: 120 }}
                        image={
                            info.humidity > 80 ? RAIN_URL :
                                (info.temperature > 30 ? HOT_URl :
                                    (info.temperature < 15 ? COLD_URL : MILD_URL))
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div className="weatherDetails">

                                <p>temperature: {info.temperature}&deg;C
                                    {(info.humidity) > 80 ? <WbCloudyIcon fontSize="small" /> :
                                        (info.temperature > 30 ? <SunnyIcon fontSize="small" /> :
                                            (info.temperature < 15 ? <AcUnitIcon fontSize="small" /> : <WbSunnyIcon fontSize="small" />))}
                                </p>
                                <p>humidity: {info.humidity} </p>
                                <p>Max. temperature {info.tempMax}&deg;C</p>
                                <p>Min. temperature {info.tempMin}&deg;C</p>
                                <p> <i>" The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C "</i> </p>
                                <p>Sunrise: {convertUnixToTime(info.sunrise)} <WbTwilightIcon fontSize="small" /> </p>
                                <p>Sunset: {convertUnixToTime(info.sunset)} <BedtimeIcon fontSize="small" /> </p>
                            </div>
                        </Typography>
                    </CardContent>
                    <hr />
                    <CardActions className='cardActions'>
                        <Button size="small">Share</Button>
                        <Button size="small">Download card</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}