import React, { Component } from "react";
import {
  Banner,
  GreetingText,
  TextContainer,
  NameDash,
  NameDot,
  NameText,
  DescriptionDot,
  DescriptionText
} from "./styles";
import { greeting, descriptions } from "./../../../../constants";

class GreetingBanner extends Component {
  render() {
    const descriptionTexts = descriptions.slice(0, -1).map(description => (
      <TextContainer key={description}>
        <DescriptionText>{description}</DescriptionText>
        <DescriptionDot />
      </TextContainer>
    ));

    descriptionTexts.push(
      <TextContainer key={descriptions[descriptions.length - 1]}>
        <DescriptionText>
          {descriptions[descriptions.length - 1]}
        </DescriptionText>
      </TextContainer>
    );
    return (
      <Banner>
        <GreetingText>{greeting}</GreetingText>
        <TextContainer>
          <NameDot />
          <NameDash />
          <NameText>Hossam Mabed</NameText>
          <NameDash />
          <NameDot />
        </TextContainer>
        <TextContainer>{descriptionTexts}</TextContainer>
      </Banner>
    );
  }
}

export default GreetingBanner;
