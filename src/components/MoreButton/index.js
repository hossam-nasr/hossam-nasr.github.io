import React, { Component } from "react";
import { Button, ButtonContent, StyledLink } from "./styles";

class MoreButton extends Component {
  render() {
    const primary = this.props.primary ? this.props.primary : "primary";
    const secondary = this.props.secondary ? this.props.secondary : "secondary";
    return (
      <StyledLink to={this.props.url}>
        <Button primary={primary} secondary={secondary}>
          <ButtonContent primary={primary} secondary={secondary}>
            {this.props.children}
          </ButtonContent>
        </Button>
      </StyledLink>
    );
  }
}

export default MoreButton;
