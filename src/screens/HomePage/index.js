import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import GreetingBanner from "./components/GreetingBanner";
import Section from "./components/Section";
import { SWE } from "./../../constants.js";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Home" />
        <ContentContainer>
          <GreetingBanner />
          <div style={{ height: "500px" }} />
          <Section
            title={SWE.title}
            subtitle={SWE.subtitle}
            background={SWE.background}
            fontColor={SWE.fontColor}
          />
        </ContentContainer>
      </div>
    );
  }
}

export default HomePage;
