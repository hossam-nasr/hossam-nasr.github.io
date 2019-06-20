import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./styles";
import logoImg from "./../../../../images/logo.png";
import { throws } from "assert";

class Logo extends Component {

  render() {
    return (
      <Link to="/">
        <Icon smaller={this.props.smaller} src={logoImg} alt="Icon" />
      </Link>
    );
  }
}

export default Logo;
