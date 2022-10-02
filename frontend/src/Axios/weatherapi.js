import axios from "axios";

const get_weathers = async (location) => {
    // var city = readLine("What is the name of the city you are visiting");
    // var country = readLine("What is the country you are visiting (give it in abbv eg. Turkey is tr)") houston,
    // let city = 'tokyo';
    // let country = 'jp'
    // let location = `${city}, ${country}`
    // location = "tokyo,jp";

    const HIGH_WEATHER_DAY_TEMP_MIN = 87
    const MEDIUM_WEATHER_DAY_TEMP_MIN = 55

    let weather = {
        highWeatherDays: 0,
        mediumWeatherDays: 0,
        lowWeatherDays: 0,
        rainDay: 0,
        highUV: 0
    }

    const options = {
        method: 'GET',
        url: 'https://aerisweather1.p.rapidapi.com/forecasts/'+location,
        headers: {
            'X-RapidAPI-Key': 'f8ed802ceamsh9d0de496e83a68ep1c08d4jsnfbdb8fd865c3',
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
    };

    const response =  await axios.request(options);
    const periods = response.data.response[0].periods;
    // min temp and max temp for that day, pecepitation, snowIN, uvi
    // high weather day: 87
    // medium weather day: 65 - 87
    // low weather day: < 65
    periods.map((period) => {
        if (period?.minTempF >= HIGH_WEATHER_DAY_TEMP_MIN) {
            weather.highWeatherDays += 1;
        } else if (period?.minTempF >= MEDIUM_WEATHER_DAY_TEMP_MIN) {
            weather.mediumWeatherDays += 1;
        } else {
            weather.lowWeatherDays += 1;
        }
        if (period?.precipIN > 0){
            weather.rainDayrainDay +=1;
        }
        if(period?.uvi >= 6){
            weather.highUV += 1;
        }
    })
    console.log(weather);
    return weather;
    
};

export default get_weathers;