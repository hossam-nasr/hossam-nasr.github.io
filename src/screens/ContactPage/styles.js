import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-flow: column nowrap;
  width: 100%;
  justify-content: flex-start;
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
    props.selected ? "inherit" : themeGet("colors.navigation.text", "gray")};
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  :hover {
    color: inherit;
  }
`;

export const Subtitle = styled.div`
  font-size: 2.5vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 4vmax;
  }
  margin: 2.5vh 5vw 2.5vh 5vw;
  text-align: center;
`;

export const ContactContent = styled.div`
  font-size: 1.5vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  text-align: center;
  @media all and (max-width: 500px) {
    font-size: 2.5vmax;
  }
  margin: 0vh 5vw 1vh 5vw;
`;
