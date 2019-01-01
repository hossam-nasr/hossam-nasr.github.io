import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-flow: column nowrap;
  width: 100%;
  justify-content: flex-start;
  background-color: ${props => themeGet(`colors.${props.background}`, "gray")};
  color: ${props => themeGet(`colors.${props.fontcolor}`, "white")};
  padding-bottom: 35px;
`;

export const StyledLink = styled.a`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  color: ${props =>
    props.selected
      ? themeGet("colors.navigation.text-highlighted", "white")
      : themeGet("colors.navigation.text", "gray")};
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  :hover {
    color: ${themeGet("colors.navigation.text-highlighted", "white")};
  }
`;

export const Subtitle = styled.div`
  font-size: 3vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 4vmax;
  }
  margin: 1vh 5vw 2vh 5vw;
`;

export const ContactContent = styled.div`
  font-size: 1.5vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 2.5vmax;
  }
  margin: 0vh 5vw 1vh 5vw;
`;
