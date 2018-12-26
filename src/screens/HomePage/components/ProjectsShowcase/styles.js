import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${themeGet("colors.background.secondary")};
  justify-content: space-between;
  justify-content: space-around;
  padding-bottom: 35px;
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
