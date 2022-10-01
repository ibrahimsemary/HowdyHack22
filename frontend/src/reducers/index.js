import { combineReducers } from "redux";
import placesSelectedReducer from "./placesSelectedReducer";

export default combineReducers({
    placesSelected: placesSelectedReducer,
});
