import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./../../../../components/Section";
import {
  TextContainer,
  SubtitleContainer,
  VideoContainer,
  Video,
  StyledLink,
  SectionContentContainer
} from "./styles";

class ProjectPage extends Component {
  renderContent = content => {
    switch (content.type) {
      case "text":
        return <TextContainer>{content.payload}</TextContainer>;
      case "subtitle":
        return <SubtitleContainer>{content.payload}</SubtitleContainer>;
      case "video":
        return (
          <VideoContainer>
            <Video
              src={content.payload}
              frameBorder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
              width="100%"
              height="100%"
            />
          </VideoContainer>
        );
      case "link":
        return (
          <StyledLink href={content.url}>
            <TextContainer>
              <FontAwesomeIcon icon={content.icon} fixedWidth />
              {` ${content.payload} `}
            </TextContainer>
          </StyledLink>
        );
      default:
        return <TextContainer>{content.payload}</TextContainer>;
    }
  };

  render() {
    const contents = this.props.content.map(this.renderContent);

    return (
      <Section
        title={this.props.title}
        subtitle={this.props.subtitle}
        background={this.props.background}
        fontColor={this.props.fontColor}
      >
        <SectionContentContainer
          background={this.props.background}
          fontcolor={this.props.fontColor}
        >
          {contents}
        </SectionContentContainer>
      </Section>
    );
  }
}

export default ProjectPage;
