const placesSelectedReducer = (state = [], action) => {
    switch (action.type) {
        case "PLACES_SELECTED":
            return action.payload;
        default:
            return state;
    }
};

export default placesSelectedReducer;
