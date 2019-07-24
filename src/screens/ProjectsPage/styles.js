import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const BoxesContainer = styled(Flex)`
  flex-flow: row wrap;
  background-color: ${props => themeGet(`colors.${props.background}`, "black")};
  justify-content: center;
  padding-bottom: 35px;
  width: 100%;
`;

export const BoxContainer = styled.div`
  padding: 40px;
  @media all and (max-width: 500px) {
    padding: 0;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const Label = styled.label`
  font-family: ${themeGet("fonts.primary")};
  font-size: 24px;
  color: ${themeGet("colors.primary")};
  position: relative;

  :after {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-size: 20px;
    color: ${themeGet("colors.primary")};
    position: relative;
    right: 22px;    
    font-weight: 900;
  }
`;

export const Select = styled.select`
  background-color: transparent;
  color: ${themeGet("colors.primary")};
  font-size: 24px;
  font-family: ${themeGet("fonts.primary")};
  border: 2px solid ${themeGet("colors.primary")};
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 20px;
  padding-right: 30px;
  text-decoration: none;
  margin-left: 10px;

  appearance: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    outline: none;
  }
`;

export const Option = styled.option`
  font-size: 20px;
  background-color: ${themeGet("colors.secondary")};
  outline: none;
  border: none;
  text-decoration: none;
  box-shadow: none;
  border: 2px solid white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    outline: none;
    background-color: transparent;
  }
`;
