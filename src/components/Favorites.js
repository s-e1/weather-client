import { useEffect, useState } from "react";
import axios from "axios";

import FavoriteCard from "./FavoriteCard";
import { serverUrl } from "../configs";

const Favorites = () => {
    const [citiesData, setCitiesData] = useState([]);
    const favoriteCities = JSON.parse(localStorage.favorites);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.post(serverUrl + "/weather/favorites", favoriteCities);
            setCitiesData(data);
        }
        getData();
    }, [favoriteCities.length])

    return (!favoriteCities.length) ?
        <h2 style={{ paddingTop: "5%", textAlign: "center" }}>No cities were selected</h2> :
        <div className="cards-container" style={{ paddingTop: "5%" }}>
            {citiesData?.map((day, i) => {
                return <FavoriteCard key={i} data={day} />
            })}
        </div>
}

export default Favorites;