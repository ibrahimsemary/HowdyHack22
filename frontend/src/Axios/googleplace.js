import axios from 'axios'
import { setPlacesSelected } from '../actions';

const get_place= async() => {
    let term = "tokyo";
    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+term+'&types=geocode&key=AIzaSyCSEC5-168OtlGts0HZTIs2iiS08YSFz4Q',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default get_place