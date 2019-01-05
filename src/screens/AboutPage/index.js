import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import Section from "./../../components/Section";
import { AboutMe } from "./../../constants.js";
import {
  TextContainer,
  SubtitleContainer,
  VideoContainer,
  Video,
  SectionContentContainer,
  StyledLink
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutPage extends Component {
  renderContent = (content, id) => {
    switch (content.type) {
      case "text":
        return <TextContainer key={id}>{content.payload}</TextContainer>;
      case "subtitle":
        return (
          <SubtitleContainer key={id}>{content.payload}</SubtitleContainer>
        );
      case "video":
        return (
          <VideoContainer key={id}>
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
          <StyledLink key={id} href={content.url}>
            <TextContainer>
              <FontAwesomeIcon icon={content.icon} fixedWidth />
              {` ${content.payload} `}
            </TextContainer>
          </StyledLink>
        );
      default:
        return <TextContainer key={id}>{content.payload}</TextContainer>;
    }
  };

  renderSection = (section, id) => {
    const contents = section.content.map(this.renderContent);
    return (
      <Section
        key={id}
        title={section.title}
        subtitle={section.subtitle}
        background={section.background}
        fontColor={section.fontColor}
      >
        <SectionContentContainer
          background={section.background}
          fontcolor={section.fontColor}
        >
          {contents}
        </SectionContentContainer>
      </Section>
    );
  };

  render() {
    const { page } = AboutMe;
    const { title, sections } = page;
    const renderedSections = sections.map(this.renderSection);
    return (
      <div>
        <NavigationBar page="About" />
        <ContentContainer>
          <Title>{title}</Title>
          {renderedSections}
        </ContentContainer>
      </div>
    );
  }
}

export default AboutPage;
