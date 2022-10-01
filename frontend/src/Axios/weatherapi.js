import React from "react";
import axios from "axios";

const get_weathers = async(city, country) => {
    const axios = require("axios");
    // var city = readLine("What is the name of the city you are visiting");
    // var country = readLine("What is the country you are visiting (give it in abbv eg. Turkey is tr)") houston,
    var location = city+","+country;
    const options = {
        method: 'GET',
        url: 'https://aerisweather1.p.rapidapi.com/sunmoon/'+location,
        headers: {
            'X-RapidAPI-Key': '8ed802ceamsh9d0de496e83a68ep1c08d4jsnfbdb8fd865c3',
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
    };
    return await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


}