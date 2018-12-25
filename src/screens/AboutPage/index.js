import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar"

class AboutPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar page="About"/>
                <h1>this is the About Page!</h1>
            </div>
        )
    }
}

export default AboutPage