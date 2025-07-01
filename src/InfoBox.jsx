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
import { toPng } from 'html-to-image';
import { WhatsappShareButton, TwitterShareButton, FacebookShareButton } from "react-share";
import { WhatsappIcon, TwitterIcon, FacebookIcon } from "react-share";
import { useState } from 'react';

export default function InfoBox({ info }) {

    const currentPageUrl = window.location.href;
    // To set dynaimc link to share buttons
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");

    // static card Images url
    const HOT_URl = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const MILD_URL = "https://images.unsplash.com/photo-1638905132201-532d10903ea1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // Cloudinary image uploadtion
    const uploadToCloudinary = async (dataUrl) => {
        const formData = new FormData();
        formData.append("file", dataUrl);
        formData.append("upload_preset", "weather_card_upload");

        const res = await fetch("https://api.cloudinary.com/v1_1/dr2tagfk8/image/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        return data.secure_url;

    }

    // For sharing actual card image 
    const shareCardImage = () => {
        const card = document.getElementById("weather-card");

        toPng(card).then(async (dataUrl) => {
            const uploadUrl = await uploadToCloudinary(dataUrl);
            setUploadedImageUrl(uploadUrl);
        }).catch((err) => {
            console.log(err);
        })
    }

    function convertUnixToTime(unixTime) {
        const date = new Date(unixTime * 1000);
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    }

    const downloadCard = () => {
        toPng(document.getElementById('weather-card'))
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'weather-card.png';
                link.href = dataUrl;
                link.click();
            });
    }


    return (
        <div className="infoBox">
            <div className="classContainer" id="weather-card">
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
                        {uploadedImageUrl ? (
                            <div className="socialMediaShareButton">
                                <WhatsappShareButton url={uploadedImageUrl}> <WhatsappIcon size={27} round={true}></WhatsappIcon> </WhatsappShareButton>
                                &nbsp;
                                <FacebookShareButton url={uploadedImageUrl}> <FacebookIcon size={27} round={true}></FacebookIcon> </FacebookShareButton>
                                &nbsp;
                                <TwitterShareButton url={uploadedImageUrl}> <TwitterIcon size={27} round={true} ></TwitterIcon> </TwitterShareButton>
                            </div>
                        ) : (
                            <button onClick={shareCardImage}>Share</button>
                        )}
                        <Button size="small" onClick={downloadCard} id='downloadButton'>Download card</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}