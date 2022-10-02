import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import { setMyList, setRecList } from "../actions";

const MyList = (props) => {
    useEffect(() => {
        const list = [
            {
                item: "shoes",
                isChecked: false,
            },
            {
                item: "underwear",
                isChecked: false,
            },
            {
                item: "hats",
                isChecked: false,
            },
            {
                item: "jacket",
                isChecked: false,
            },
        ];
        props.setRecList(list);
    }, []);
    const removeChecked = () => {
        //add to new list
        //remove from old list
        const temp = [];
        const newRecList = [];
        props.recList.forEach((item) => {
            if (item.isChecked === false) {
                newRecList.push(item);
            }
            temp.push(item.item);
        });
        props.setMyList(temp);
        props.setRecList(newRecList);
    };
    const displayList = () => {
        return props.recList.map((item, index) => {
            return (
                <ListItem key={index}>
                    <ListItemButton>
                        <Checkbox
                            edge='start'
                            tabIndex={-1}
                            checked={item.isChecked}
                            onClick={() => {
                                let objIndex = props.recList.findIndex(
                                    (obj) => obj === item
                                );
                                const new_obj = props.recList;
                                new_obj[objIndex].isChecked =
                                    !new_obj[objIndex].isChecked;
                                props.setRecList(new_obj);
                            }}
                        />
                        <ListItemText primary={item.item} />
                    </ListItemButton>
                </ListItem>
            );
        });
    };

    return (
        <div className='ui container'>
            <br />
            <h3>Reccomended List:</h3>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                {displayList()}
                <br />
                <button className='ui primary button' onClick={removeChecked}>
                    Add to my list
                </button>
            </List>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { recList: state.recList, myList: state.myList };
};
export default connect(mapStateToProps, {
    setRecList: setRecList,
    setMyList: setMyList,
})(MyList);
