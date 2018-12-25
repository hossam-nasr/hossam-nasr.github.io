import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Projects" />
        <ContentContainer>
          <h1>this is the Projects Page!</h1>
        </ContentContainer>
      </div>
    );
  }
}

export default ProjectsPage;
