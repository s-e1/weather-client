import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { serverUrl } from "../configs";
import { change } from "../store/selectedCitySlice";

const Search = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [citiesArray, setCitiesArray] = useState([]);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        if (!e.target.value) {
            setCitiesArray([]);
        } else {
            axios.get(serverUrl + "/search?q=" + e.target.value)
                .then(res => setCitiesArray(res.data))
        }
    }

    const handleSelect = (_, newValue) => {
        setSelectedValue(newValue);
        if (!newValue) return;
        dispatch(change(newValue));
    }

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={citiesArray}
            value={selectedValue}
            onChange={handleSelect}
            getOptionLabel={(option) => option ? option.name + ", " + option.country : ""}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            sx={{ width: 325, paddingTop: 0 }}
            renderInput={(params) => {
                return (
                    <TextField {...params} label="Search for City"
                        onChange={handleInput}
                    >
                    </TextField>
                )
            }}
        />
    );
}

export default Search;