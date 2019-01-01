import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Banner, TextContainer } from "./styles";
import bannerImg from "./../../images/banner.jpg";

class GreetingBanner extends Component {
  render() {
    const backImg = this.props.backgroundImg
      ? this.props.backgroundImg
      : bannerImg;
    return (
      <Banner backImg={backImg} ismobile={isMobile}>
        <TextContainer>{this.props.children}</TextContainer>
      </Banner>
    );
  }
}

export default GreetingBanner;
