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
  width: 340px;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 35px;
`;

export const Subtitle = styled.div`
  font-size: 2vmax;
  font-family: ${themeGet("fonts.primary", "sans-serif")};
  @media all and (max-width: 500px) {
    font-size: 4.5vmax;
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
    line-height: 3vmax;
  }
  width: 100%;
  margin-bottom: 10px;
`;

export const Details = styled.div`
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
  margin-bottom: 5px;
  @media all and (max-width: 500px) {
    text-align: left;
  }
`;

export const DetailsHidden = styled.div`
  display: none;
  font-weight: bold;
  flex-basis: 0px;
  @media all and (max-width: 500px) {
    display: inline;
  }
`;

export const InlineDetails = styled(Flex)`
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const DetailsTitle = styled(Details)`
  font-size: 1.5vmax;
  font-weight: bold;
  flex-shrink: 1;
  @media all and (max-width: 500px) {
    font-size: 2.8vmax;
  }
`;

export const DetailsMenu = styled.ul`
  margin-top: 5px;
  margin-bottom: 10px;

  @media all and (max-width: 500px) {
    padding-left: 15px;
  }
`;
