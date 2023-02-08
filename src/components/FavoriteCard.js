import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

import { change } from "../store/selectedCitySlice";

const FavoriteCard = ({ data }) => {
    const dispatch = useDispatch();
    const { iconUrl, metric, text, cityKey, cityName, country } = data;

    //clicking the card chooses it as the selectedCity, so the Home page will show it
    const handleClick = () => {
        dispatch(change({ key: cityKey, name: cityName, country }));
    }

    return (
        <Card raised className="card" >
            <CardActionArea component={Link} to="/weather-client" onClick={handleClick}>
                <h2>{cityName}, {country}</h2>
                <div><img src={iconUrl} alt="icon" width="20%" /> </div>
                <h1>{metric}&#176; C</h1>
                <h3>{text}</h3>
            </CardActionArea>
        </Card>
    )
}

export default FavoriteCard;