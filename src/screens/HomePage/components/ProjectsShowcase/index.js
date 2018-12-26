import React, { Component } from "react";
import { Container, BoxesContainer, ButtonContainer, Button } from "./styles";
import ProjectBox from "./../../../../components/ProjectBox";
import MoreButton from "./../../../../components/MoreButton";

class ProjectsShowcase extends Component {
  render() {
    const boxes = this.props.projects.map(project => (
      <ProjectBox
        key={project.key}
        url={project.key}
        pic={project.pic}
        title={project.title}
        description={project.description}
        background={project.background}
      />
    ));

    return (
      <Container>
        <BoxesContainer>{boxes}</BoxesContainer>
        <ButtonContainer>
          <Button>
            <MoreButton url="/projects">View more projects</MoreButton>
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

export default ProjectsShowcase;
