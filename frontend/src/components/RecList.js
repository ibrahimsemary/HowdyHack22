import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import { setMyList, setRecList, setRecListChecked } from "../actions";

const RecList = (props) => {
    const removeChecked = () => {
        //add to new list
        //remove from old list
        const temp = [];
        props.recList.forEach((item) => {
            if (item.isChecked === true) {
                temp.push(item.item);
            }
        });
        props.setMyList(temp);
    };
    const displayList = () => {
        if (props.recList.length !== 0) {
            return props.recList.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemButton>
                            <Checkbox
                                edge='start'
                                tabIndex={-1}
                                checked={item.isChecked}
                                onClick={() => {
                                    props.setRecListChecked(
                                        index,
                                        props.recList
                                    );
                                }}
                            />
                            <ListItemText primary={item.item} />
                        </ListItemButton>
                    </ListItem>
                );
            });
        }
    };

    return (
        <div className='ui container'>
            <div className='to-center'>
                <div className='header'>
                    {" "}
                    <h2>Reccomended List:</h2>
                </div>
            </div>
            <div className='to-center'>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {displayList()}
                    <br />
                    <div className='to-center'>
                        <button
                            className='ui primary button'
                            onClick={removeChecked}
                        >
                            Add to my list
                        </button>
                    </div>
                </List>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { recList: state.recList, myList: state.myList };
};
export default connect(mapStateToProps, {
    setRecList: setRecList,
    setMyList: setMyList,
    setRecListChecked: setRecListChecked,
})(RecList);
