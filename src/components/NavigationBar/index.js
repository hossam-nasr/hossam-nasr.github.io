import React, { Component } from "react";
import { Container, Menu, StyledLink, Toggle, Label } from "./styles";
import Logo from "./components/Logo";
import MenuItem from "./../MenuItem";

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Toggle id="menuToggle" type="checkbox" />
        <Label htmlFor="menuToggle" />
        <Menu>
          <StyledLink to="/">
            <MenuItem selected={this.props.page === "Home"} menu>
              Home
            </MenuItem>
          </StyledLink>
          <StyledLink to="/about">
            <MenuItem selected={this.props.page === "About"} menu>
              About
            </MenuItem>
          </StyledLink>
          <StyledLink to="/projects">
            <MenuItem selected={this.props.page === "Projects"} menu>
              Projects
            </MenuItem>
          </StyledLink>
          <StyledLink to="/resume">
            <MenuItem selected={this.props.page === "Resume"} menu>
              Resume
            </MenuItem>
          </StyledLink>
          <StyledLink to="/contact">
            <MenuItem selected={this.props.page === "Contact"} menu>
              Contact
            </MenuItem>
          </StyledLink>
        </Menu>
      </Container>
    );
  }
}

export default NavigationBar;
