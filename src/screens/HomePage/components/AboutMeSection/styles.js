import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-flow: column nowrap;
  justify-content: center;
  background-color: ${themeGet("colors.background.tertiary", "gray")};
`;

export const ButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${themeGet("colors.background.tertiary", "gray")};
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
