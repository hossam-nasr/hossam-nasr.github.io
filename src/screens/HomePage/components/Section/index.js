import React, { Component } from "react";
import {
  Banner,
  Title,
  TitleContainer,
  SubtitleContainer,
  Dot,
  Dash,
  Subtitle
} from "./styles";

class Section extends Component {
  render() {
    return (
      <Banner background={this.props.background}>
        <TitleContainer>
          <Dot color={this.props.fontColor} />
          <Dash color={this.props.fontColor} />
          <Title fontColor={this.props.fontColor}>{this.props.title}</Title>
          <Dash color={this.props.fontColor} />
          <Dot color={this.props.fontColor} />
        </TitleContainer>
        <SubtitleContainer>
          <Subtitle fontColor={this.props.fontColor}>
            {this.props.subtitle}
          </Subtitle>
        </SubtitleContainer>
      </Banner>
    );
  }
}

export default Section;
