const durationReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_DURATION":
            return action.payload;
        default:
            return state;
    }
};

export default durationReducer;
