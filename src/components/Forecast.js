import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import ForecastCard from "./ForecastCard";
import styles from "./Forecast.module.css";
import { serverUrl } from "../configs";

const Forecast = () => {
    const selectedCityDetails = useSelector((state) => state.selectedCity.details);

    const [current, setCurrent] = useState();
    const [future, setFuture] = useState();
    const [favoriteCities, setFavoriteCities] = useState([]);

    let isFavorite = favoriteCities.find(city => city.key === selectedCityDetails.key);

    useEffect(() => {
        if (localStorage.favorites) {
            setFavoriteCities(JSON.parse(localStorage.favorites));
        }
    }, [])

    useEffect(() => {
        const getData = async () => {
            const body = {
                cityKey: selectedCityDetails?.key, cityName: selectedCityDetails?.name,
                country: selectedCityDetails?.country
            }
            const { data } = await axios.post(serverUrl + "/weather/home", body);

            setCurrent(data.current);
            // { iconUrl, metric, text, cityName}

            setFuture(data.forecast);
            // {date, min, max, dayText, nightText}
        }
        getData();
    }, [selectedCityDetails.key])

    const addFavoriteHandler = () => {
        const tempArr = [...favoriteCities, selectedCityDetails];
        setFavoriteCities(tempArr);
        localStorage.favorites = JSON.stringify(tempArr);
    }

    const removeFavoriteHandler = () => {
        const tempArr = favoriteCities.filter(item => item.key !== selectedCityDetails.key);
        setFavoriteCities(tempArr);
        localStorage.favorites = JSON.stringify(tempArr);
    }

    return (<div style={{ position: "relative" }}>
        {current &&
            <>
                {isFavorite ?
                    <StarIcon
                        className={styles.star}
                        sx={{ color: "gold" }}
                        onClick={removeFavoriteHandler} />
                    :
                    <StarBorderIcon
                        className={styles.star}
                        onClick={addFavoriteHandler} />
                }
                <div style={{ textAlign: "center" }}>
                    <h2>{current.cityName}</h2>
                    <h1>{current.metric}&#176; C</h1>
                    <h3>{current.text}</h3>
                    <div><img src={current.iconUrl} alt="icon" width="20%" /> </div>
                </div>
                <div className="cards-container">
                    {future?.map((day, i) => {
                        return <ForecastCard key={i} data={day} />
                    })}
                </div>
            </>
        }
    </div>)
}

export default Forecast;