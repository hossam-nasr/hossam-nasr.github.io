import styled from "styled-components";
import { themeGet } from "styled-system";

export const Item = styled.li`
  flex: 1;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: ${themeGet("fonts.menu", "Arial")};
  font-size: 1.5em;
  font-weight: none;
  background-color: ${themeGet("colors.navigation.background", "black")};
  color: ${props =>
    props.selected
      ? themeGet("colors.navigation.text-highlighted", "white")
      : themeGet("colors.navigation.text", "gray")};
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  :hover {
    color: ${themeGet("colors.navigation.text-highlighted", "white")};
  }

  @media all and (max-width: 500px) {
    display: block;
    text-align: center;
    padding: ${props => (props.menu ? "0px 10px 10px 10px" : "0")};
    border-top: ${props =>
      props.menu
        ? `1px solid ${themeGet("colors.navigation.border", "gray")}`
        : "0px"};
  }
`;
