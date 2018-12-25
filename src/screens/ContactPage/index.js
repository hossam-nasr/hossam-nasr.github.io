import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar"

class ContactPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar page="Contact"/>
                <h1>this is the Contact Page!</h1>
            </div>
        )
    }
}

export default ContactPage