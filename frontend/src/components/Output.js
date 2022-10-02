import React from "react";
import RecList from "./RecList";
import MyList from "./MyList";

const Output = () => {
    return (
        <div className='ui grid'>
            <div className='eight wide column'>
                <RecList />
            </div>
            <div className='eight wide column'>
                <MyList />
            </div>
        </div>
    );
};

export default Output;
