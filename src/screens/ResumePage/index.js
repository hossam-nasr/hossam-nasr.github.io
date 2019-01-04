import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import MoreButton from "./../../components/MoreButton";
import Section from "./../../components/Section";
import { resume } from "./../../constants.js";
import { SectionContentContainer, ButtonContainer } from "./styles";

class ResumePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Projects" />
        <ContentContainer>
          <Title>{resume.title}</Title>
          <Section
            title={resume.sectionTitle}
            subtitle={resume.subtitle}
            background={resume.background}
            fontColor={resume.fontColor}
          />
          <SectionContentContainer
            background={resume.background}
            fontColor={resume.fontColor}
          >
            <ButtonContainer>
              <MoreButton
                primary={resume.fontColor}
                secondary={resume.background}
                href="/Resume.pdf"
                target="_blank"
              >
                Download Resume PDF
              </MoreButton>
            </ButtonContainer>
          </SectionContentContainer>
        </ContentContainer>
      </div>
    );
  }
}

export default ResumePage;
