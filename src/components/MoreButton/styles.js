import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  font-family: ${themeGet("fonts.primary")};
  text-align: center;
  font-size: 130%;
  padding: 5%;
  border: 2px solid ${props => themeGet(`colors.${props.primary}`, "white")};
  transition: all 0.5s ease;
  display: inline-block;

  :hover,
  :active,
  :focus {
    transition: all 0.5s ease;
    background-color: ${props => themeGet(`colors.${props.primary}`, "white")};
  }

  :hover span,
  :active span,
  :focus span {
    padding-right: 25px;
    color: ${props => themeGet(`colors.${props.secondary}`, "black")};
  }

  :hover span:after,
  :active span:after,
  :focus span:after {
    opacity: 1;
    right: 0;
    color: ${props => themeGet(`colors.${props.secondary}`, "black")};
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

export const StyledA = styled.a`
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
  color: ${props => themeGet(`colors.${props.primary}`, "white")};
  display: inline-block;
  position: relative;
  transition: all 0.5s ease;

  :after {
    content: "\\2192";
    position: absolute;
    color: ${props => themeGet(`colors.${props.primary}`, "white")};
    opacity: 0;
    top: 0;
    right: -20px;
    transition: all 0.5s ease;
  }
`;
