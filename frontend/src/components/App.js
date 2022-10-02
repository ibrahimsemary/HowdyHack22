import React from "react";
import Inputs from "./Inputs";
import { connect } from "react-redux";
import Output from "./Output";

const App = (props) => {
    const displayOutput = () => {
        if (props.selected) {
            return (
                <div>
                    {" "}
                    <Output />
                </div>
            );
        }
    };
    return (
        <div className='ui container'>
            <div className="header"><h1>Ultimate Packer:</h1></div>
            <div>
                <Inputs />
            </div>
            {displayOutput()}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selected: state.placesSelected === null ? false : true,
    };
};
export default connect(mapStateToProps)(App);
