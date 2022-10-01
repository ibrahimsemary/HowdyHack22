import { combineReducers } from "redux";
import { placesSelected } from "../actions";

export default combineReducers({
    placesSelected: placesSelected,
});
