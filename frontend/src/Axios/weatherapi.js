//import React from "react";
import axios from "axios";

const get_weathers = async (location) => {
    // var city = readLine("What is the name of the city you are visiting");
    // var country = readLine("What is the country you are visiting (give it in abbv eg. Turkey is tr)") houston,
    // let city = 'tokyo';
    // let country = 'jp'
    // let location = `${city}, ${country}`

    const HIGH_WEATHER_DAY_TEMP_MIN = 87
    const MEDIUM_WEATHER_DAY_TEMP_MIN = 65

    let weather = {
        highWeatherDays: 0,
        mediumWeatherDays: 0,
        lowWeatherDays: 0,
        rainDay: 0

    }

    const options = {
        method: 'GET',
        url: 'https://aerisweather1.p.rapidapi.com/forecasts/'+location,
        headers: {
            'X-RapidAPI-Key': 'f8ed802ceamsh9d0de496e83a68ep1c08d4jsnfbdb8fd865c3',
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
    };

    const response = await axios.request(options).then(function (response) {
        const periods = response.data.response[0].periods;
        // min temp and max temp for that day, pecepitation, snowIN, uvi
        // high weather day: 87
        // medium weather day: 65 - 87
        // low weather day: < 65
        periods.map((period) => {
            if (period?.maxTempF >= HIGH_WEATHER_DAY_TEMP_MIN) {
                weather.highWeatherDays += 1;
            } else if (period?.maxTempF >= MEDIUM_WEATHER_DAY_TEMP_MIN) {
                weather.mediumWeatherDays += 1;
            } else {
                weather.lowWeatherDays += 1;
            }
            if (period?.precipIN > 0){
                weather.rainDayrainDay +=1;
            }

        })

    }).catch(function (error) {
        console.error(error);
    });

    console.log(weather);
    
};

export default get_weathers;