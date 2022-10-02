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
        if(element.count > 0){
            list.push(element)
        }
    });
    return {
        type: "REC_LIST",
        payload: list,
    };
};

export const setMyList = (items) => {
    return {
        type: "MY_LIST",
        payload: items,
    };
};

export const deleteFromMyList = (item) => {
    return {
        type: "REMOVE_FROM_MY_LIST",
        payload: item,
    };
};
