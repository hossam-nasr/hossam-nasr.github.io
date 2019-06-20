import styled from "styled-components";
import { themeGet } from "styled-system";

export const Icon = styled.img`
  width: ${props => (props.smaller ? "60px" : "85px")};
  margin-left: 12px;
  background-color: ${themeGet("colors.navigation.background", "black")};
  transition: 0.2s;
  @media all and (max-width: 500px) {
    width: ${props => (props.smaller ? "40px" : "50px")};
  }
`;
