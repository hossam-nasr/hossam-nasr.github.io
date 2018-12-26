import styled from "styled-components";
import { themeGet } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${themeGet("colors.background.secondary")};
  justify-content: space-evenly;
  padding-bottom: 35px;
`;
