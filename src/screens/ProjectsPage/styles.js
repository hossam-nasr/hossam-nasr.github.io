import styled from "styled-components";
import { themeGet } from "styled-system";
import { Flex } from "grid-styled";

export const BoxesContainer = styled(Flex)`
  flex-flow: row wrap;
  background-color: ${props => themeGet(`colors.${props.background}`, "black")};
  justify-content: center;
  padding-bottom: 35px;
`;

export const BoxContainer = styled.div`
    padding: 40px;
    @media all and (max-width: 500px) {
        padding: 0;
    }
`;