export const placesSelected = (fromLoc, toLoc) => {
    return {
        type: "PLACES_SELECTED",
        payload: {
            fromLoc: fromLoc,
            toLoc: toLoc,
        },
    };
};
