const recListReducer = (state = [1], action) => {
    switch (action.type) {
        case "REC_LIST":
            return action.payload;
        case "REC_LIST_CHECKED":
            return action.payload;
        default:
            return state;
    }
};

export default recListReducer;
