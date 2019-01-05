import React, { Component } from "react";
import {
  Banner,
  Title,
  TitleContainer,
  SubtitleContainer,
  DashContainerLeft,
  DashContainerRight,
  Dot,
  Dash,
  Subtitle,
  ChildrenCotainer
} from "./styles";

class Section extends Component {
  render() {
    return (
      <Banner background={this.props.background}>
        <TitleContainer>
          <DashContainerLeft>
            <Dot color={this.props.fontColor} />
            <Dash color={this.props.fontColor} />
          </DashContainerLeft>
          <Title fontColor={this.props.fontColor}>{this.props.title}</Title>
          <DashContainerRight>
            <Dash color={this.props.fontColor} />
            <Dot color={this.props.fontColor} />
          </DashContainerRight>
        </TitleContainer>
        <SubtitleContainer>
          <Subtitle
            columns={this.props.columns}
            fontColor={this.props.fontColor}
          >
            {this.props.subtitle}
          </Subtitle>
        </SubtitleContainer>
        <ChildrenCotainer>{this.props.children}</ChildrenCotainer>
      </Banner>
    );
  }
}

export default Section;
