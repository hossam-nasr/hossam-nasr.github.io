import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar"

class ProjectsPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar page="Projects"/>
                <h1>this is the Projects Page!</h1>
            </div>
        )
    }
}

export default ProjectsPage