import React, { Component } from "react";
import MoreButton from "./../MoreButton";
import { Container, Overlay, Title, Description } from "./styles";

class ProjectBox extends Component {
  render() {
    return (
      <Container
        backgroundimage={this.props.pic}
        backgroundcolor={this.props.background}
      >
        <Overlay className="ProjectBox_overlay">
          <Title>
            {this.props.title}
          </Title>
          <Description>
            {this.props.description}
          </Description>
          <MoreButton />
        </Overlay>
      </Container>
    );
  }
}

export default ProjectBox;
