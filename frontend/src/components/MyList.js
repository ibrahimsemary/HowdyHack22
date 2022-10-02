import React, { useState } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { deleteFromMyList, setMyList } from "../actions";
import TextField from "@mui/material/TextField";
import "./MyList.css";

const MyList = (props) => {
    const [addedItem, setAddedItem] = useState("");
    const displayList = () => {
        if (props.myListItems.length !== 0) {
            return props.myListItems.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemButton>
                            <ListItemText primary={item} />
                            <IconButton
                                edge='end'
                                aria-label='delete'
                                onClick={() => props.deleteFromMyList(item)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                );
            });
        }
    };

    return (
        <div className='ui container'>
            <br />
            <div className='to-center'>
                <div className='some-space'>
                    {" "}
                    <h2>My List:</h2>
                </div>
            </div>
            <div className='to-center'>
                <div className='mygrid'>
                    <div className='text-field'>
                        <TextField
                            value={addedItem}
                            onChange={(e) => setAddedItem(e.target.value)}
                            rows={2}
                            className='text-field-actual'
                        />
                    </div>
                    <div className='my-button'>
                        <button
                            className='ui black button'
                            onClick={() => {
                                props.setMyList(addedItem);
                            }}
                        >
                            Add Item
                        </button>
                    </div>
                </div>
            </div>
            <div className='to-center-list'>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {displayList()}
                    <br />
                </List>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        myListItems: state.myList,
    };
};
export default connect(mapStateToProps, {
    setMyList: setMyList,
    deleteFromMyList: deleteFromMyList,
})(MyList);
