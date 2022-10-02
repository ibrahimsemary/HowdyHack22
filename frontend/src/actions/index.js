export const setPlacesSelected = (fromLoc, toLoc) => {
    return {
        type: "PLACES_SELECTED",
        payload: {
            fromLoc: fromLoc,
            toLoc: toLoc,
        },
    };
};

export const setRecList = (items) => {
    const list = [];
    items.forEach((element) => {
        list.push({ item: element.item, isChecked: element.isChecked });
    });
    return {
        type: "REC_LIST",
        payload: list,
    };
};


export const setMyList = (items) => {
    return {
        type: "REC_LIST",
        payload: items,
    };
};



