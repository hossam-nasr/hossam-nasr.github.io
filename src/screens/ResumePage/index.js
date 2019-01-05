import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import MoreButton from "./../../components/MoreButton";
import Section from "./../../components/Section";
import { resume } from "./../../constants.js";
import {
  SectionContentContainer,
  ButtonContainer,
  Subtitle,
  DetailsContainer,
  Details,
  DetailsTitle,
  InlineDetails,
  DetailsRight
} from "./styles";

class ResumePage extends Component {
  render() {
    const educationDetails = resume.data.education.map(education => (
      <DetailsContainer key={education.key}>
        <InlineDetails>
          <DetailsTitle>{education.title}</DetailsTitle>
          <DetailsRight>{education.location}</DetailsRight>
        </InlineDetails>
        <InlineDetails>
          <Details>{education.description}</Details>
          <DetailsRight>{education.end}</DetailsRight>
        </InlineDetails>
        {education.gpa && (
          <Details>
            <b>GPA</b>: {education.gpa}
          </Details>
        )}
        {education.relevant && (
          <Details>
            <b>Relevant Coursework</b>: {education.relevant}
          </Details>
        )}
        {education.abroad && (
          <InlineDetails>
            <Details>
              <b>Study Abroad</b>: {education.abroad.description}
            </Details>
            <DetailsRight>
              {education.abroad.start} - {education.abroad.end}
            </DetailsRight>
          </InlineDetails>
        )}
      </DetailsContainer>
    ));

    const techDetails = (
      <DetailsContainer>
        <Details>
          <b>Programming</b>: {resume.data.tech.programming.join(", ")}
        </Details>
        <Details>
          <b>Operating Systems</b>: {resume.data.tech.os.join(", ")}
        </Details>
        <Details>
          <b>Web Development/Design</b>: {resume.data.tech.web.join(", ")}
        </Details>
      </DetailsContainer>
    );

    const leaderDetails = resume.data.leadership.map(leader => (
      <DetailsContainer key={leader.key}>
        <InlineDetails>
          <DetailsTitle>{leader.title}</DetailsTitle>
          <DetailsRight>{leader.location}</DetailsRight>
        </InlineDetails>
        <InlineDetails>
          <Details>
            <b>{leader.position}</b>
          </Details>
          <DetailsRight>
            {leader.start} - {leader.current ? "Present" : leader.end}
          </DetailsRight>
        </InlineDetails>
        <Details>
          <ul>
            {leader.description.map((content, id) => (
              <li key={id}>{content}</li>
            ))}
          </ul>
        </Details>
      </DetailsContainer>
    ));

    const skillsDetails = (
      <DetailsContainer>
        <Details>
          <b>Languages</b>:{" "}
          {resume.data.skills.languages
            .map(l => `${l.name} (${l.level})`)
            .join(", ")}
        </Details>
        <Details>
          <b>Interests</b>: {resume.data.skills.interests.join(", ")}
        </Details>
      </DetailsContainer>
    );
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
          >
            <SectionContentContainer
              background={resume.background}
              fontcolor={resume.fontColor}
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
              <Subtitle>Education</Subtitle>
              {educationDetails}
              <Subtitle>Technical Skills</Subtitle>
              {techDetails}
              <Subtitle>Leadership and Experience</Subtitle>
              {leaderDetails}
              <Subtitle>Skills and Interests</Subtitle>
              {skillsDetails}
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
          </Section>
        </ContentContainer>
      </div>
    );
  }
}

export default ResumePage;
