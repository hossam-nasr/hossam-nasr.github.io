import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-flow: column nowrap;
  justify-content: center;
  background-color: ${themeGet("colors.background.secondary", "black")};
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
  align-items: center;
  text-align: center;
  background-color: ${themeGet("colors.background.secondary", "black")};
  padding: 20px 20px 40px 20px;
`;

export const Button = styled.div`
  width: 320px;
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
