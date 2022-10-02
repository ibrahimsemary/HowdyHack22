import React from "react";
import RecList from "./RecList";
import MyList from "./MyList";
import { connect } from "react-redux";

const Output = (props) => {
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
            <br />
            <div className='ui container'>
                <div className='ui grid'>
                    <div className='four wide column'>
                        <div className='to-center'>
                            <h2>Expected Bags:</h2>
                        </div>
                    </div>
                    <div className='five wide column'>
                        <div className='to-center'>
                            <h3>Number of Large bags: {props.duration[0]}</h3>
                        </div>
                    </div>
                    <div className='five wide column'>
                        <div className='to-center'>
                            <h3>Number of Small bags: {props.duration[1]}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        duration: state.duration,
    };
};
export default connect(mapStateToProps)(Output);
