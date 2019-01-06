import styled from "styled-components";
import { Flex } from "grid-styled";
import { themeGet } from "styled-system";

export const Banner = styled(Flex)`
  background-color: ${props => themeGet(`colors.${props.background}`, "white")};
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
`;

export const Title = styled.div`
  font-family: ${themeGet("fonts.title")};
  font-size: 4vmax;
  color: ${props => themeGet(`colors.${props.fontColor}`, "black")};
  margin: 1vh 4vw 0vh 4vw;
  flex-shrink: 0;
  @media all and (max-width: 500px) {
    font-size: 5vmax;
  }
`;

export const Subtitle = styled.div`
  font-family: ${themeGet("fonts.primary")};
  text-align: left;
  font-size: 1.4vmax;
  line-height: 5vmin;
  color: ${props => themeGet(`colors.${props.fontColor}`, "black")};
  margin: 4vh 5vw 5vh 5vw;
  -webkit-column-count: ${props => (props.columns ? 2 : 1)};
  -moz-column-count: ${props => (props.columns ? 2 : 1)};
  column-count: ${props => (props.columns ? 2 : 1)};
  -webkit-column-gap: 4%;
  -moz-column-gap: 4%;
  column-gap: 4%;
  @media all and (max-width: 500px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    font-size: 2.4vmax;
    line-height: 6vmin;
  }
`;

export const DashContainer = styled(Flex)`
  align-items: center;
  width: 100%;
`;

export const DashContainerLeft = styled(DashContainer)`
  justify-content: flex-end;
`;

export const DashContainerRight = styled(DashContainer)`
  justify-content: flex-start;
`;

export const Dash = styled.div`
  background-color: ${props => themeGet(`colors.${props.color}`, "white")};
  width: 80%;
  height: 0.5vh;
  position: block;
  flex-shrink: 1;
  @media all and (max-width: 500px) {
    display: none;
  }
`;

export const Dot = styled.div`
  background-color: ${props => themeGet(`colors.${props.color}`, "white")};
  border-radius: 50%;
  behavior: url(PIE.htc);
  width: 1.2vmin;
  height: 1.2vmin;
  @media all and (max-width: 500px) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
`;

export const SubtitleContainer = styled(Flex)`
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  position: block;
`;

export const ChildrenCotainer = styled.div`
  width: 100%;
`;
