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
  margin: 0vh 10vw 0vh 10vw;
`;

export const ButtonContainer = styled.div`
  width: 30%;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 35px;
`;

export const Subtitle = styled.div`
  font-size: 2vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 4vmax;
  }
  margin: 1vh 5vw 2.5vh 5vw;
  text-align: center;
`;

export const DetailsContainer = styled(Flex)`
  flex-flow: column nowrap;
  font-size: 1.1vmax;
  align-self: flex-start;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 2.2vmax;
  }
  width: 100%;
  margin-bottom: 10px;
`;

export const Details = styled(Flex)`
  flex-grow: 10;
  flex-basis: 80%;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
`;

export const DetailsRight = styled.div`
  text-align: right;
      flex-basis: 15%;
  flex-shrink: 1;
`;

export const InlineDetails = styled(Flex)`
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
`;

export const DetailsTitle=styled(Details)`
  font-size: 1.2vmax;
  font-weight: bold;
  @media all and (max-width: 500px) {
      font-size: 1.4vmax;
  }
`;