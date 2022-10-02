import React from "react";
import MyList from "./RecList";

const Output = () => {
    return (
        <div className='ui grid'>
            <div className='eight wide column'><MyList /></div>
            <div className='eight wide column'>recommended list</div>
        </div>
    );
};

export default Output;
