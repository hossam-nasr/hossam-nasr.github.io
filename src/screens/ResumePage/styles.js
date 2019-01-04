import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const SectionContentContainer = styled(Flex)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => themeGet(`colors.${props.background}`, "black")};
  color: ${props => themeGet(`colors.${props.fontcolor}`, "white")};
  padding-bottom: 35px;
`;

export const ButtonContainer = styled.div`
  width: 20%;
  text-align: center;
`;
