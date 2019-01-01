import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Subtitle, StyledLink, ContactContent } from "./styles";
import Section from "./../../../../components/Section";

class AboutMeSection extends Component {
  render() {
    const { info, contacts } = this.props;
    const contactLinks = contacts.map(contact => (
      <ContactContent key={contact.key}>
        <FontAwesomeIcon icon={contact.icon} fixedWidth />
        {` ${contact.name}: `}
        <StyledLink href={contact.url}>{contact.content}</StyledLink>
      </ContactContent>
    ));
    return (
      <Section
        title={info.title}
        subtitle={info.subtitle}
        background={info.background}
        fontColor={info.fontColor}
        columns={false}
      >
        <Container background={info.background} fontcolor={info.fontColor}>
          <Subtitle>Contact Information:</Subtitle>
          {contactLinks}
        </Container>
      </Section>
    );
  }
}

export default AboutMeSection;
