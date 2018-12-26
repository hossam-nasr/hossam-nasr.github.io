import styled from "styled-components";
import { themeGet } from "styled-system";

export const Container = styled.div`
  display: flex;
  background-color: ${themeGet("colors.background.secondary")};
  height: 320px;
  width: 320px;
  background-image: url(${props => props.backgroundimage});
  background-color: ${props => props.backgroundcolor};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  flex-shrink: 1;
  border: 3px solid ${themeGet("colors.primary", "white")};
  border-radius: 7px;
  margin: 20px;

  :hover .ProjectBox_overlay {
    visibility: visible;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    background-color: ${themeGet(
      "colors.background.projectBox",
      "rgba(0, 0, 0, 0.5)"
    )};
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  visibility: hidden;
  background-color: transparent;
  opacity: 0;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
`;

export const Title = styled.div`
  width: 95%;
  text-align: center;
  font-family: ${themeGet("fonts.title")};
  font-size: 300%;
  color: ${themeGet("colors.primary", "white")};
  flex-shrink: 0;
`;

export const Description = styled.div`
  width: 95%;
  text-align: center;
  font-family: ${themeGet("fonts.primary")};
  font-size: 140%;
  color: ${themeGet("colors.primary", "white")};
  flex-shrink: 0;
`;
