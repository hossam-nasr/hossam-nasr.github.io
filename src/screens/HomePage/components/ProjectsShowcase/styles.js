import styled from "styled-components";
import { Flex } from "grid-styled";
import { themeGet } from "styled-system";

export const Container = styled(Flex)`
  flex-flow: row wrap;
  background-color: ${themeGet("colors.background.secondary")};
  justify-content: space-evenly;
  padding-bottom: 35px;
`;
