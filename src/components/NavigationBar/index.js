import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Menu, StyledLink, Toggle, Label } from "./styles";
import Logo from "./components/Logo";
import MenuItem from "./../MenuItem";
import { MenuIcon } from "./../../constants";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smaller: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200;
      if (distanceY > shrinkOn) {
        this.setState({ smaller: true });
      } else {
        this.setState({ smaller: false });
      }
    });
  }

  render() {
    const { smaller } = this.state;
    return (
      <Container>
        <Logo id="Logo" smaller={smaller} />
        <Toggle type="checkbox" />
        <Label smaller={smaller}>
          <FontAwesomeIcon icon={MenuIcon.down} className="down" size="2x" />
          <FontAwesomeIcon icon={MenuIcon.up} className="up" size="2x" />
        </Label>
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
