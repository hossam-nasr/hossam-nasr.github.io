import React, { Component } from "react";
import { Container, ButtonContainer, Button } from "./styles";
import MoreButton from "./../../../../components/MoreButton";
import Section from "./../Section";

class AboutMeSection extends Component {
  render() {
    const { info } = this.props;
    return (
      <Container>
        <Section
          title={info.title}
          subtitle={info.subtitle}
          background={info.background}
          fontColor={info.fontColor}
          columns
        />
        <ButtonContainer>
          <Button>
            <MoreButton
              primary={info.fontColor}
              secondary={info.background}
              url="/about"
            >
              Learn more about me
            </MoreButton>
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

export default AboutMeSection;
