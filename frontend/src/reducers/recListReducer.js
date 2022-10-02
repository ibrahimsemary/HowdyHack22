const recListReducer = (
    state = [
        { item: "underwear", isChecked: false },
        { item: "hats", isChecked: false },
        { item: "shirt", isChecked: false },
    ],
    action
) => {
    switch (action.type) {
        case "REC_LIST":
            return action.payload;
        default:
            return state;
    }
};

export default recListReducer;
