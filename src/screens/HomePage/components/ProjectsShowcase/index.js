import React, { Component } from "react";
import { Container } from "./styles";
import ProjectBox from "./../../../../components/ProjectBox";

class ProjectsShowcase extends Component {
  render() {
    const boxes = this.props.projects.map(project => (
      <ProjectBox
        key={project.key}
        pic={project.pic}
        title={project.title}
        description={project.description}
        background={project.background}
      />
    ));

    return <Container>{boxes}</Container>;
  }
}

export default ProjectsShowcase;
