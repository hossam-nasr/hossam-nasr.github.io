import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 90%;
  font-family: ${themeGet("fonts.primary")};
  text-align: center;
  font-size: 130%;
  padding: 5%;
  border: 2px solid ${themeGet("colors.primary", "white")};
  transition: all 0.5s ease;

  :hover {
    transition: all 0.5s ease;
    background-color: ${themeGet("colors.primary", "white")};
  }

  :hover span {
    padding-right: 25px;
    color: ${themeGet("colors.secondary", "black")};
  }

  :hover span:after {
    opacity: 1;
    right: 0;
    color: ${themeGet("colors.secondary", "white")};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ButtonContent = styled.span`
  cursor: pointer;
  color: ${themeGet("colors.primary", "white")};
  display: inline-block;
  position: relative;
  transition: all 0.5s ease;

  :after {
    content: "\\2192";
    position: absolute;
    color: ${themeGet("colors.primary", "white")};
    opacity: 0;
    top: 0;
    right: -20px;
    transition: all 0.5s ease;
  }
`;
