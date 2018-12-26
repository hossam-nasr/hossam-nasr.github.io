import styled from "styled-components";
import { themeGet } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${themeGet("colors.background.secondary")};
  justify-content: space-between;
  justify-content: space-around;
  padding-bottom: 35px;
`;
