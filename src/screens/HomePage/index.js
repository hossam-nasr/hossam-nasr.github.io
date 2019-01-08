import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Section from "./../../components/Section";
import GreetingBanner from "./components/GreetingBanner";
import ProjectsShowcase from "./components/ProjectsShowcase";
import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import {
  SWE,
  projects,
  AboutMe,
  contactInfo,
  contactSection
} from "./../../constants.js";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Home" />
        <ContentContainer>
          <GreetingBanner />
          <Section
            title={SWE.title}
            subtitle={SWE.subtitle}
            background={SWE.background}
            fontColor={SWE.fontColor}
            columns
          />
          <Section
            title={projects.section.title}
            subtitle={projects.section.subtitle}
            background={projects.section.background}
            fontColor={projects.section.fontColor}
            columns={false}
          >
            <ProjectsShowcase projects={projects.allProjects.slice(0,3)} />
          </Section>

          <AboutMeSection info={AboutMe.section} />
          <ContactSection
            info={contactSection.section}
            contacts={contactInfo}
          />
        </ContentContainer>
      </div>
    );
  }
}

export default HomePage;
