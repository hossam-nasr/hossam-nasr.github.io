import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";
import Title from "./../../components/Title";
import Section from "./../../components/Section";
import { contactSection, contactInfo, socialLinks } from "./../../constants.js";
import { Container, ContactContent, StyledLink, Subtitle } from "./styles";

class ContactPage extends Component {
  render() {
    const { page } = contactSection;
    const contactLinks = contactInfo.map(contact => (
      <ContactContent key={contact.key}>
        <FontAwesomeIcon icon={contact.icon} fixedWidth />
        {` ${contact.name}: `}
        <StyledLink target="_blank" href={contact.url}>{contact.content}</StyledLink>
      </ContactContent>
    ));

    const socialLinksContent = socialLinks.map(social => (
      <ContactContent key={social.key}>
        <FontAwesomeIcon icon={social.icon} fixedWidth />
        {` ${social.name}: `}
        <StyledLink target="_blank" href={social.url}>{social.handle}</StyledLink>
      </ContactContent>
    ));
    return (
      <div>
        <NavigationBar page="Contact" />
        <ContentContainer>
          <Title>{page.title}</Title>
          <Section
            title={page.subtitle}
            background={page.background}
            fontColor={page.fontColor}
          >
            <Container>
              <Subtitle>Contact Information:</Subtitle>
              {contactLinks}
            </Container>
            <Container>
              <Subtitle>{page.socialIntro}</Subtitle>
              {socialLinksContent}
            </Container>
          </Section>
        </ContentContainer>
      </div>
    );
  }
}

export default ContactPage;
