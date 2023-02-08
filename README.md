# Weather App - client

The frontend was made using React, Redux Toolkit and MUI.

The [backend](https://github.com/s-e1/weather-server) was made using Node and Express with a REST api.

The app is deployed [here](https://s-e1.github.io/weather-client). 

## Description

The app has 2 pages. 

**Home page**: Search for a city, see it's current weather and 5 day forecast. Save it as a favorite location.

**Favorites page**: Shows current weather at favorite locations. Click on one to see it's 5 day forecast.

## Data's Source

The weather data comes from [AccuWeather](https://developer.accuweather.com/). 

An api key needs to be provided in the server's process.env to be able to get the data.
