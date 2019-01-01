import React, { Component } from "react";
import {
  Container,
  SubContainer,
  LinksMenu,
  StyledLink,
  CopyRightContainer
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./../MenuItem";
import { socialLinks, footerGreeting } from "./../../constants";

class Footer extends Component {
  render() {
    const links = socialLinks.map(link => (
      <StyledLink key={link.key} href={link.url} target="_blank">
        <MenuItem menu={false}>
          <FontAwesomeIcon icon={link.icon} fixedWidth />
        </MenuItem>
      </StyledLink>
    ));

    return (
      <Container>
        <SubContainer> {footerGreeting} </SubContainer>
        <SubContainer>
          <LinksMenu>{links}</LinksMenu>
        </SubContainer>
        <CopyRightContainer>
          Copyright &copy; 2019 Hossameldin Mabed. All rights reserved.
        </CopyRightContainer>
      </Container>
    );
  }
}

export default Footer;
