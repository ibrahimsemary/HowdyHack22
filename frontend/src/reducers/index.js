import { combineReducers } from "redux";
import myListReducer from "./myListReducer";
import placesSelectedReducer from "./placesSelectedReducer";
import recListReducer from "./recListReducer";

export default combineReducers({
    placesSelected: placesSelectedReducer,
    recList: recListReducer,
    myList: myListReducer,
});
