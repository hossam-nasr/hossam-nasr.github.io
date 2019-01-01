import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.navigation.background", "black")};
`;

export const SubContainer = styled(Flex)`
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-family: ${themeGet("fonts.secondary")};
  font-size: 40px;
  @media all and (max-width: 500px) {
      font-size: 24px
  }
  color: ${props => themeGet("colors.primary", "white")};
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

export const CopyRightContainer = styled(Flex)`
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-family: ${themeGet("fonts.primary")};
  font-size: 0.9vmax;
  color: ${props => themeGet("colors.primary", "white")};
  margin: 4vh 0vw 1vh 0vw;
`;

export const LinksMenu = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  font-size: 22px; 
  @media all and (max-width: 500px) {
      font-size: 13px;
  }
  background-color: ${themeGet("colors.navigation.background", "black")};
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
`;
