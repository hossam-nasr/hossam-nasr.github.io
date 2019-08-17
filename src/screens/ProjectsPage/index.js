import React, { Component } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import Section from "./../../components/Section";
import ProjectBox from "./../../components/ProjectBox";
import { projects } from "./../../constants.js";
import ProjectPage from "./components/ProjectPage";
import {
  BoxesContainer,
  BoxContainer,
  SelectContainer,
  Label,
  Select,
  Option
} from "./styles";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortby: "significance"
    };
  }

  render() {
    const { page, allProjects } = projects;
    const { sortby } = this.state;
    const params = new URLSearchParams(document.location.search);
    const projectKey = params.get("project");

    const projectData = allProjects.find(project => project.key === projectKey);

    const boxes = allProjects
      .sort((a, b) => {
        switch (sortby) {
          case "significance":
            if (a.significance === b.significance) {
              return b.contribution - a.contribution;
            } else {
              return b.significance - a.significance;
            }
          case "contribution":
            if (a.contribution === b.contribution) {
              return b.significance - a.significance;
            } else {
              return b.contribution - a.contribution;
            }
          case "oldest":
            if (a.end === b.end) {
              return b.significance - a.significance;
            } else {
              return a.end - b.end;
            }
          case "newest":
            if (a.end === b.end) {
              return b.significance - a.significance;
            } else {
              return b.end - a.end;
            }
          case "duration":
            if (a.end - a.start === b.end - b.start) {
              return b.significance - a.significance;
            } else {
              return b.end - b.start - (a.end - a.start);
            }
          case "alphabetical":
            if (a.title.toLowerCase() === b.title.toLowerCase()) {
              return b.significance - a.significance;
            } else {
              return b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1;
            }
          default:
            return b.significance - a.significance;
        }
      })
      .map(project => (
        <Flipped flipId={project.key} key={project.key}>
          <BoxContainer>
            <ProjectBox
              url={project.key}
              pic={project.pic}
              title={project.title}
              description={project.summary}
              background={project.background}
            />
          </BoxContainer>
        </Flipped>
      ));

    const projectsDisplay = (
      <Section
        title={page.subtitle}
        subtitle={page.subsubtitle}
        background={page.background}
        fontColor={page.fontColor}
      >
        <SelectContainer>
          <Label>
            Sort by:
            <Select
              onChange={event => {
                this.setState({ sortby: event.currentTarget.value });
              }}
            >
              <Option value="significance">Significance</Option>
              <Option value="contribution">Contribution</Option>
              <Option value="oldest">Oldest</Option>
              <Option value="newest">Newest</Option>
              <Option value="duration">Duration</Option>
              <Option value="alphabetical">Alphabetical</Option>
            </Select>
          </Label>
        </SelectContainer>
        <Flipper flipKey={sortby} spring="stiff">
          <BoxesContainer background={page.background}>{boxes}</BoxesContainer>
        </Flipper>
      </Section>
    );

    const content = projectData ? (
      <ProjectPage
        info={projectData}
        background={projectData.pageBackground || page.projectBackground}
        fontColor={projectData.fontColor || page.projectFontColor}
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
