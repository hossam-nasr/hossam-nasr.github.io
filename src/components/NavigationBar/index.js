import React, { Component } from "react";
import { Container, Menu, StyledLink } from "./styles";
import Logo from "./components/Logo";
import MenuItem from "./components/MenuItem";

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Menu>
          <StyledLink to="/">
            <MenuItem selected={this.props.page === "Home"}>Home</MenuItem>
          </StyledLink>
          <StyledLink to="/about">
            <MenuItem selected={this.props.page === "About"}>About</MenuItem>
          </StyledLink>
          <StyledLink to="/projects">
            <MenuItem selected={this.props.page === "Projects"}>
              Projects
            </MenuItem>
          </StyledLink>
          <StyledLink to="/resume">
            <MenuItem selected={this.props.page === "Resume"}>Resume</MenuItem>
          </StyledLink>
          <StyledLink to="/contact">
            <MenuItem selected={this.props.page === "Contact"}>
              Contact
            </MenuItem>
          </StyledLink>
        </Menu>
      </Container>
    );
  }
}

export default NavigationBar;
