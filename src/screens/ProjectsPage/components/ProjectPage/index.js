import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "grid-styled";
import Section from "./../../../../components/Section";
import MoreButton from "./../../../../components/MoreButton";
import {
  TextContainer,
  SubtitleContainer,
  VideoContainer,
  Video,
  StyledLink,
  SilentLink,
  ImageContainer,
  Image,
  ButtonContainer,
  SectionContentContainer
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class ProjectPage extends Component {
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
      case "array":
        return (
          <Flex
            flexWrap="wrap"
            key={id}
            justifyContent={content.justifyContent}
            alignItems={content.alignItems}
            alignContent={content.alignContent}
          >
            {content.payload.map(this.renderContent)}
          </Flex>
        );
      case "button":
        return (
          <ButtonContainer key={id}>
            <MoreButton
              primary={this.props.fontColor}
              secondary={this.props.background}
              href={content.href}
              url={content.url}
              target={content.target}
              download={content.download}
            >
              {content.payload}
            </MoreButton>
          </ButtonContainer>
        );
      default:
        return <TextContainer key={id}>{content.payload}</TextContainer>;
    }
  };

  render() {
    const { info, background, fontColor } = this.props;
    const contents = info.content.map(this.renderContent);

    return (
      <Section
        title={info.title}
        subtitle={info.subtitle}
        background={background}
        fontColor={fontColor}
      >
        <SectionContentContainer background={background} fontcolor={fontColor}>
          <SubtitleContainer>{`About ${info.title}`}</SubtitleContainer>
          <ImageContainer>
            <SilentLink href={info.url} target="_blank">
              <Image src={info.pic} />
            </SilentLink>
          </ImageContainer>
          <TextContainer>{info.description}</TextContainer>
          {info.role ? (
            <div>
              <SubtitleContainer>{`About my role in ${
                info.title
              }`}</SubtitleContainer>
              <TextContainer>{info.role}</TextContainer>
            </div>
          ) : (
            <div />
          )}
          {contents}
          {(info.url || info.github) && (
            <div>
              <SubtitleContainer>Links</SubtitleContainer>
              <Flex flexWrap="wrap">
                {info.url && (
                  <ButtonContainer>
                    <MoreButton
                      primary={fontColor}
                      secondary={background}
                      href={info.url}
                      target="_blank"
                    >
                      {info.title}
                    </MoreButton>
                  </ButtonContainer>
                )}
                {info.github && (
                  <ButtonContainer>
                    <MoreButton
                      primary={fontColor}
                      secondary={background}
                      href={info.github}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub Repo
                    </MoreButton>
                  </ButtonContainer>
                )}
              </Flex>
            </div>
          )}
        </SectionContentContainer>
      </Section>
    );
  }
}

export default ProjectPage;
