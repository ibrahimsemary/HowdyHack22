const myListReducer = (state = [], action) => {
    switch (action.type) {
        case "MY_LIST":
            const new_list = state.concat(action.payload);
            return new_list;
        case "REMOVE_FROM_MY_LIST":
            const new_array = [];
            state.forEach(element => {
                if(element !== action.payload){
                    new_array.push(element)
                }
            });
            return new_array
        default:
            return state;
    }
};

export default myListReducer;
