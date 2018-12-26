import React, { Component } from "react";
import { Button, ButtonContent, StyledLink } from "./styles";

class MoreButton extends Component {
  render() {
    return (
      <StyledLink to={this.props.url}>
        <Button>
          <ButtonContent>{this.props.content}</ButtonContent>
        </Button>
      </StyledLink>
    );
  }
}

export default MoreButton;
