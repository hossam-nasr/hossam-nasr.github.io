import React, { Component } from "react";
import { Container } from "./styles";
import Footer from "./../Footer";

class ContentContainer extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
        <Footer />
      </Container>
    );
  }
}

export default ContentContainer;
