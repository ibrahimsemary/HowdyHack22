const placesSelectedReducer = (state = null, action) => {
    switch (action.type) {
        case "PLACES_SELECTED":
            return action.payload;
        default:
            return state;
    }
};

export default placesSelectedReducer;
