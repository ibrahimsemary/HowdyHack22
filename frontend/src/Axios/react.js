import axios from "axios";

const get_flights = async() => {
    const response = await axios.get("https://skyscanner44.p.rapidapi.com/search", {
        params: {
            adults: '1',
            origin: 'MUC',
            destination: 'BER',
            departureDate: '2022-10-11',
            currency: 'EUR'
        },
        headers: {
            'X-RapidAPI-Key': '95ad4fcaefmsh292933141697dc7p10f964jsn1d3ba1fca364',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    })
}