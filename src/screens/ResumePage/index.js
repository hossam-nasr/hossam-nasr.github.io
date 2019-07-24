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
  DetailsHidden,
  InlineDetails,
  DetailsMenu,
  DetailsRight
} from "./styles";

const renderDetail = leader => (
  <DetailsContainer key={leader.key}>
    <InlineDetails>
      <DetailsTitle>{leader.title}</DetailsTitle>
      <DetailsRight>
        <DetailsHidden>Location: </DetailsHidden>
        {leader.location}
      </DetailsRight>
    </InlineDetails>
    <InlineDetails>
      <Details>
        <DetailsHidden>Position: </DetailsHidden>
        {leader.position}
      </Details>
      <DetailsRight>
        <DetailsHidden>Duration: </DetailsHidden>
        {leader.start} - {leader.current ? "Present" : leader.end}
      </DetailsRight>
    </InlineDetails>
    <Details>
      <DetailsMenu>
        {leader.description.map((content, id) => (
          <li key={id} dangerouslySetInnerHTML={{ __html: content }} />
        ))}
      </DetailsMenu>
    </Details>
  </DetailsContainer>
);

class ResumePage extends Component {
  render() {
    const educationDetails = resume.data.education.map(education => (
      <DetailsContainer key={education.key}>
        <InlineDetails>
          <DetailsTitle>{education.title}</DetailsTitle>
          <DetailsRight>
            <DetailsHidden>Location: </DetailsHidden>
            {education.location}
          </DetailsRight>
        </InlineDetails>
        <InlineDetails>
          <Details>{education.description}</Details>
          <DetailsRight>
            <DetailsHidden>Graduation: </DetailsHidden>
            {education.end}
          </DetailsRight>
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
              <DetailsHidden>Duration: </DetailsHidden>
              {education.abroad.start} - {education.abroad.end}
            </DetailsRight>
          </InlineDetails>
        )}
        {education.other &&
          education.other.map((item, index) => (
            <Details key={index}>{item.content}</Details>
          ))}
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
          <b>Web/App Development</b>: {resume.data.tech.web.join(", ")}
        </Details>
      </DetailsContainer>
    );

    const leaderDetails = resume.data.leadership.map(renderDetail);

    const experienceDetails = resume.data.experience.map(renderDetail)

    const skillsDetails = (
      <DetailsContainer style={{ marginBottom: "35px" }}>
        <Details>
          <b>Languages</b>:{" "}
          {resume.data.skills.languages
            .map(l => `${l.level} ${l.name}`)
            .join(", ")}
        </Details>
        <Details>
          <b>Interests</b>: {resume.data.skills.interests.join(", ")}
        </Details>
      </DetailsContainer>
    );
    return (
      <div>
        <NavigationBar page="Resume" />
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
                  Resume PDF
                </MoreButton>
              </ButtonContainer>
              <Subtitle>Education</Subtitle>
              {educationDetails}
              <Subtitle>Technical Skills</Subtitle>
              {techDetails}
              <Subtitle>Technical Experience</Subtitle>
              {experienceDetails}
              <Subtitle>Leadership and Activities</Subtitle>
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
                  Resume PDF
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
