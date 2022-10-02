import React from "react";
import RecList from "./RecList";
import MyList from "./MyList";

const Output = () => {
    return (
        <div className='margin-bot'>
            <div className='ui grid'>
                <div className='eight wide column'>
                    <div className='add-border'>
                        {" "}
                        <RecList />
                    </div>
                </div>
                <div className='eight wide column'>
                    <div className='add-border'>
                        <MyList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Output;
