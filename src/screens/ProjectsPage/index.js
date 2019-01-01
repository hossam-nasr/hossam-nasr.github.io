import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import Section from "./../../components/Section";
import ProjectBox from "./../../components/ProjectBox";
import { projects } from "./../../constants.js";
import ProjectPage from "./components/ProjectPage";
import { BoxesContainer, BoxContainer } from "./styles";

class ProjectsPage extends Component {
  render() {
    const { page } = projects;
    const params = new URLSearchParams(document.location.search);
    const projectKey = params.get("project");

    const projectData = page.allProjects.find(
      project => project.key === projectKey
    );

    const boxes = page.allProjects.map(project => (
      <BoxContainer key={project.key}>
        <ProjectBox
          url={project.key}
          pic={project.pic}
          title={project.title}
          description={project.summary}
          background={project.background}
        />
      </BoxContainer>
    ));

    const projectsDisplay = (
      <Section
        title={page.subtitle}
        subtitle={page.subsubtitle}
        background={page.background}
        fontColor={page.fontColor}
      >
        <BoxesContainer background={page.background}>{boxes}</BoxesContainer>
      </Section>
    );

    const content = projectData ? (
      <ProjectPage
        title={projectData.title}
        subtitle={projectData.summary}
        background={page.projectBackground}
        fontColor={page.projectFontColor}
        content={projectData.content}
        description={projectData.description}
        role={projectData.role}
      />
    ) : (
      projectsDisplay
    );
    return (
      <div>
        <NavigationBar page="Projects" />
        <ContentContainer>
          <Title>{page.title}</Title>
          {content}
        </ContentContainer>
      </div>
    );
  }
}

export default ProjectsPage;
