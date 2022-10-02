import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import get_clothes from "../Axios/parsedata";
import { setDuration, setRecList } from "../actions";

import { connect } from "react-redux";
import { setPlacesSelected } from "../actions";

const Inputs = (props) => {
    const [comingFrom, setComingFrom] = useState("");
    const [goingTo, setGoingTo] = useState("");

    const [depDate, setDepDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const submit = async () => {
        await props.setPlacesSelected(comingFrom, goingTo);
        await props.setRecList(comingFrom, goingTo);
        if (depDate !== null && returnDate !== null) {
            let days = (returnDate.valueOf() - depDate.valueOf()) / 86400000;
            let big = 0;
            let small = 0;
            while (days > 0) {
                if (days >= 15) {
                    big += 1;
                    days -= 15;
                } else {
                    small += 1;
                    days -= 10;
                }
            }
            props.setDuration(big, small);
        }
    };

    return (
        <div className='input-container'>
            <div className='header'>
                <h1>Ultimate Packer:</h1>
            </div>
            <div className='two-grid'>
                <div>
                    <div className='to-center'>
                        <h2>Locations:</h2>
                    </div>
                    <div className='to-center'>
                        <div className='input'>
                            <TextField
                                onChange={(e) => setComingFrom(e.target.value)}
                                value={comingFrom}
                                placeholder='From...'
                            />
                        </div>
                    </div>
                    <div className='to-center'>
                        <div className='input'>
                            <TextField
                                onChange={(e) => setGoingTo(e.target.value)}
                                value={goingTo}
                                placeholder='To...'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='to-center'>
                        <h2>Departure and Return:</h2>
                    </div>
                    <div>
                        <div className='input'>
                            <div className='to-center'>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label='Departure Date'
                                        value={depDate}
                                        onChange={(newValue) => {
                                            setDepDate(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>

                        <div className='input'>
                            <div className='to-center'>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label='Return Date'
                                        value={returnDate}
                                        onChange={(newValue) => {
                                            setReturnDate(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='search-button'>
                <button
                    className='ui primary button actual-button'
                    onClick={submit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        placesSelected: state.placesSelected,
        recList: state.recList,
        duration: state.duration,
    };
};

export default connect(mapStateToProps, {
    setPlacesSelected: setPlacesSelected,
    setRecList: setRecList,
    setDuration: setDuration,
})(Inputs);
