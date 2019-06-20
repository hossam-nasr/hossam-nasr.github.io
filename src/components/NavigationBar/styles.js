import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: ${themeGet("colors.navigation.background", "black")};
  box-shadow: 0px 2px 20px 2px ${themeGet("colors.navigation.shadow", "gray")};
  position: fixed;
  z-index: 2;

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
    overflow-y: hidden;
    text-align: center;
    width: 100%;
    transition: all 0.5s ease;
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
    height: 230px;
    transition: all 0.5 ease;
  }

  :checked ~ label {
    .up {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
    .down {
      transform: rotate(180deg) scale(0.5);
      opacity: 0;
    }
  }
  display: none;
`;

export const Label = styled.label`
  display: none;
  background: transparent;
  color: ${themeGet("colors.navigation.menu", "white")};
  cursor: pointer;
  float: right;
  height: 35px;
  margin-top: ${props => props.smaller ? '0.4em' : '0.5em' };
  margin-right: ${props => props.smaller ? '0.7em' : '1em' };
  width: 35px;
  position: relative;
  transition: all 0.5s ease, margin 0.2s ease, font-size 0.2s ease;
  -moz-transition: all 0.5s ease, margin 0.2s ease, font-size 0.2s ease;
  -webkit-transition: all 0.5s ease, margin 0.2s ease, font-size 0.2s ease;
  font-size: ${props => props.smaller ? '0.9em' : '1em' };

  svg {
    position: absolute;
    left: 20%;
    display: block;
  }

  .down {
    transition: opacity 0.5s, transform 0.5s;
  }

  .up {
    transition: opacity 0.5s, transform 0.5s;
    transform: rotate(-180deg) scale(0.5);
    opacity: 0;
  }

  @media all and (max-width: 500px) {
    display: block;
  }
`;
