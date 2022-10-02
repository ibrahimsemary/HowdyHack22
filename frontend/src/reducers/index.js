import { combineReducers } from "redux";
import durationReducer from "./durationReducer";
import myListReducer from "./myListReducer";
import placesSelectedReducer from "./placesSelectedReducer";
import recListReducer from "./recListReducer";

export default combineReducers({
    placesSelected: placesSelectedReducer,
    recList: recListReducer,
    myList: myListReducer,
    duration: durationReducer,
});
