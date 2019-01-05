import styled from "styled-components";
import { themeGet } from "styled-system";

export const Icon = styled.img`
  width: 70px;
  margin-left: 12px;
  background-color: ${themeGet("colors.navigation.background", "black")};
  @media all and (max-width: 500px) {
    width: 50px;
  }
`;
