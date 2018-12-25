import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import { Banner } from "./styles";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Home" />
        <ContentContainer>
          <Banner />
        </ContentContainer>
      </div>
    );
  }
}

export default HomePage;
