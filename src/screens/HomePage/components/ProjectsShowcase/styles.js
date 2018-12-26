import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-flow: column nowrap;
  justify-content: center;
`;

export const BoxesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${themeGet("colors.background.secondary", "black")};
  justify-content: space-between;
  justify-content: space-around;
  padding-bottom: 35px;
`;

export const ButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: center;  
  background-color: ${themeGet("colors.background.secondary", "black")};
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const Button = styled.div`
  width: 15%;
  text-align: center;
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
