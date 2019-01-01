import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title"

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="About" />
        <ContentContainer>
          <Title>This is the About Page!</Title>
        </ContentContainer>
      </div>
    );
  }
}

export default AboutPage;
