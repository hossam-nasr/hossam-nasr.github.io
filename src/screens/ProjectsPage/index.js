import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import Section from "./../../components/Section";
import ProjectBox from "./../../components/ProjectBox";
import { projects } from "./../../constants.js";
import { BoxesContainer, BoxContainer } from "./styles";

class ProjectsPage extends Component {
  render() {
    const { page } = projects;
    const boxes = page.allProjects.map(project => (
      <BoxContainer>
        <ProjectBox
          key={project.key}
          url={project.key}
          pic={project.pic}
          title={project.title}
          description={project.summary}
          background={project.background}
        />
      </BoxContainer>
    ));
    return (
      <div>
        <NavigationBar page="Projects" />
        <ContentContainer>
          <Title>{page.title}</Title>
          <Section
            title={page.subtitle}
            background={page.background}
            fontColor={page.fontColor}
          >
            <BoxesContainer background={page.background}>
              {boxes}
            </BoxesContainer>
          </Section>
        </ContentContainer>
      </div>
    );
  }
}

export default ProjectsPage;
