import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: ${themeGet("colors.navigation.background", "black")};

  @media all and (max-width: 800px) {
    justify-content: space-between;
  }

  @media all and (max-width: 500px) {
    display: block;
    justify-content: column;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  background-color: ${themeGet("colors.navigation.background", "black")};

  @media all and (max-width: 800px) {
    justify-content: space-around;
  }

  @media all and (max-width: 500px) {
    display: block;
    list-style-type: none;
    flex-direction: column;
    align-items: center;
    height: 0;
    opacity: 0;
    text-align: center;
    width: 100%;
    visibility: hidden;
    transition: all 1s ease;
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

export const Toggle = styled.input`
  :checked ~ ul {
    opacity: 1;
    height: 50vh;
    visibility: visible;
    transition: all 1s ease;
  }
  display: none;
`;

export const Label = styled.label`
  display: none;

  background: linear-gradient(
    to bottom,
    ${themeGet("colors.navigation.menu", "gray")} 0%,
    ${themeGet("colors.navigation.menu", "gray")} 20%,
    transparent 20%,
    transparent 40%,
    ${themeGet("colors.navigation.menu", "gray")} 40%,
    ${themeGet("colors.navigation.menu", "gray")} 60%,
    transparent 60%,
    transparent 80%,
    ${themeGet("colors.navigation.menu", "gray")} 80%,
    ${themeGet("colors.navigation.menu", "gray")} 100%
  );
  cursor: pointer;
  float: right;
  height: 35px;
  margin-top: 1em;
  margin-right: 1em;
  width: 35px;

  @media all and (max-width: 500px) {
    display: block;
  }
`;
