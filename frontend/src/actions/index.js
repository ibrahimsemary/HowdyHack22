import get_clothes from "../Axios/parsedata";
export const setPlacesSelected = (fromLoc, toLoc) => {
    return {
        type: "PLACES_SELECTED",
        payload: {
            fromLoc: fromLoc,
            toLoc: toLoc,
        },
    };
};

export const setRecList = (location) => async (dispatch) => {
    const list = [];
    const response = await get_clothes(location);
    response.forEach((element) => {
        if (element.count > 0) {
            list.push(element);
        }
    });
    dispatch({ type: "REC_LIST", payload: list });
};

export const setRecListChecked = (myIndex, items) => {
    const list = [];
    items.forEach((element, index) => {
        if (index !== myIndex) {
            list.push(element);
        } else {
            list.push({
                item: element.item,
                count: element.count,
                isChecked: !element.isChecked,
            });
        }
    });
    console.log(list);

    return {
        type: "REC_LIST_CHECKED",
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
