import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="About" />
        <ContentContainer>
          <h1>this is the About Page!</h1>
        </ContentContainer>
      </div>
    );
  }
}

export default AboutPage;
