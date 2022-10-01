export const setPlacesSelected = (fromLoc, toLoc) => {
    return {
        type: "PLACES_SELECTED",
        payload: {
            fromLoc: fromLoc,
            toLoc: toLoc,
        },
    };
};
