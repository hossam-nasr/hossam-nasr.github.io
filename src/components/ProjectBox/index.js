import React, { Component } from "react";
import MoreButton from "./../MoreButton";
import {
  Container,
  Overlay,
  Title,
  Description,
  ButtonContainer
} from "./styles";

import { isMobile } from "react-device-detect";

class ProjectBox extends Component {
  render() {
    return (
      <Container
        backgroundimage={this.props.pic}
        backgroundcolor={this.props.background}
        ismobile={isMobile}
      >
        <Overlay className="ProjectBox_overlay">
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
          <ButtonContainer>
            <MoreButton url={`/projects?project=${this.props.url}`}>
              Learn more
            </MoreButton>
          </ButtonContainer>
        </Overlay>
      </Container>
    );
  }
}

export default ProjectBox;
