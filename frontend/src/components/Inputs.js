import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { connect } from "react-redux";
import { setPlacesSelected } from "../actions";

const Inputs = (props) => {
    const [comingFrom, setComingFrom] = useState("");
    const [goingTo, setGoingTo] = useState("");

    const [depDate, setDepDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const submit = () => {
        props.setPlacesSelected(comingFrom, goingTo);
    };

    return (
        <div>
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
    };
};

export default connect(mapStateToProps, {
    setPlacesSelected: setPlacesSelected,
})(Inputs);
