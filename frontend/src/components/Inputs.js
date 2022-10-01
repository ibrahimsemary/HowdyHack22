import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Inputs = () => {
    const [comingFrom, setComingFrom] = useState("");
    const [goingTo, setGoingTo] = useState("");

    const [depDate, setDepDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    return (
        <div className='ui container'>
            <div className='input'>
                <h2>Location coming from:</h2>
                <TextField
                    onChange={(e) => setComingFrom(e.target.value)}
                    value={comingFrom}
                    placeholder= "From..."
                />
            </div>
            <div className='input'>
                <h2>Location traveling to:</h2>
                <TextField
                    onChange={(e) => setGoingTo(e.target.value)}
                    value={goingTo}
                    placeholder= "To..."

                />
            </div>
            <div className='input'>
                <h2>Departure and Return:</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Departure Date'
                        value={depDate}
                        onChange={(newValue) => {
                            setDepDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Return Date'
                        value={returnDate}
                        onChange={(newValue) => {
                            setReturnDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </div>
    );
};

export default Inputs;
