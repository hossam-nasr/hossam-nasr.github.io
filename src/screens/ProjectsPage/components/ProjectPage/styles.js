import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const BoxesContainer = styled(Flex)`
  flex-flow: row wrap;
  background-color: ${props => themeGet(`colors.${props.background}`, "black")};
  justify-content: center;
  padding-bottom: 35px;
`;

export const BoxContainer = styled.div`
    padding: 40px;
    @media all and (max-width: 500px) {
        padding: 0;
    }
`;

export const TextContainer = styled.div`
  font-family: ${themeGet("fonts.primary")};
  text-align: left;
  font-size: 1.4vmax;
  line-height: 5vmin;
  color: inherit;
  margin: 1vh 5vw 2vh 5vw;
  @media all and (max-width: 500px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    font-size: 2.4vmax;
    line-height: 6vmin;
  }
`;

export const SubtitleContainer = styled.div`
  font-size: 2.3vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 4vmax;
  }
  margin: 1vh 5vw 2vh 5vw;
  text-align: center;
`;

export const VideoContainer = styled(Flex)`
  justify-content: center;
  width: 100%;
  flex-shrink: 1;
`
export const Video = styled.iframe`
  width: 50vmax;
  height: 28.125vmax;
`;

export const SectionContentContainer = styled(Flex)`
  flex-flow: column nowrap;
  background-color: ${props => themeGet(`colors.${props.background}`, "black")};
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