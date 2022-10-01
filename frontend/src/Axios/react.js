import axios from "axios";

const get_flights = async(numOfAdults, from, to, date, money) => {
    const response = await axios.get("https://skyscanner44.p.rapidapi.com/search", {
        params: {
            adults: numOfAdults,
            origin: from,
            destination: to,
            departureDate: date,
            currency: money
        },
        headers: {
            'X-RapidAPI-Key': '95ad4fcaefmsh292933141697dc7p10f964jsn1d3ba1fca364',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    })
}