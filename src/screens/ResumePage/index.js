import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";

class ResumePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Resume" />
        <ContentContainer>
          <h1>this is the Resume Page!</h1>
        </ContentContainer>
      </div>
    );
  }
}

export default ResumePage;
