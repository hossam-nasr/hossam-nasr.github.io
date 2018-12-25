import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar"

class ResumePage extends Component {
    render() {
        return (
            <div>
                <NavigationBar page="Resume"/>
                <h1>this is the Resume Page!</h1>
            </div>
        )
    }
}

export default ResumePage