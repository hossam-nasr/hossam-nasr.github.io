import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "./styles";
import Logo from "./components/Logo";
import MenuItem from "./components/MenuItem";

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <Logo />
        </Menu>
        <Menu>
          <Link to="/">
            <MenuItem selected={this.props.page==='Home'}>Home</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem selected={this.props.page==='About'}>About</MenuItem>
          </Link>
          <Link to="/projects">
            <MenuItem selected={this.props.page==='Projects'}>Projects</MenuItem>
          </Link>
          <Link to="/resume">
            <MenuItem selected={this.props.page==='Resume'}>Resume</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem selected={this.props.page==='Contact'}>Contact</MenuItem>
          </Link>
        </Menu>
      </Container>
    );
  }
}

export default NavigationBar;
