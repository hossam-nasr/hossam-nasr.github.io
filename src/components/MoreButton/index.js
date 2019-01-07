import React, { Component } from "react";
import { Button, ButtonContent, StyledLink, StyledA } from "./styles";

class MoreButton extends Component {
  render() {
    const primary = this.props.primary ? this.props.primary : "primary";
    const secondary = this.props.secondary ? this.props.secondary : "secondary";

    console.log(
      "primary",
      this.props.primary,
      "secondary",
      this.props.secondary
    );

    const content = (
      <Button primary={primary} secondary={secondary}>
        <ButtonContent primary={primary} secondary={secondary}>
          {this.props.children}
        </ButtonContent>
      </Button>
    );

    return this.props.href ? (
      <StyledA
        href={this.props.href}
        download={this.props.download}
        target={this.props.target}
      >
        {content}
      </StyledA>
    ) : (
      <StyledLink to={this.props.url}>{content}</StyledLink>
    );
  }
}

export default MoreButton;
