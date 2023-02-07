import Card from '@mui/material/Card';

import { convertToCelsius, convertToDayName } from "../utils/convertData";

const ForecastCard = ({ data }) => {
    const { date, min, max, iconUrl, dayText, nightText } = data;

    return (
        <Card raised className='card'
            style={{
                minwidth: "300px",
                maxwidth: "15%"
            }}
        >
            <h2>{convertToDayName(date)}</h2>
            <div><img src={iconUrl} alt="icon" width="25%" /> </div>
            <h1>H: {convertToCelsius(max)}&#176; &nbsp;&nbsp;&nbsp; L: {convertToCelsius(min)}&#176;</h1>
            <div style={{ padding: "25px", textAlign: "left" }}>
                <h3>Day: {dayText}</h3>
                <h3>Night: {nightText}</h3>
            </div>
        </Card>
    )
}

export default ForecastCard;