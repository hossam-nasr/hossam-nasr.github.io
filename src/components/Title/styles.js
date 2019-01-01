import styled from "styled-components";
import { themeGet } from "styled-system";

export const Banner = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-image: url(${props => props.backImg});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
  -webkit-background-position: center center;
  -moz-background-position: center center;
  -o-background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-repeat: no-repeat;
  -moz-background-repeat: no-repeat;
  -o-background-repeat: no-repeat;
  background-attachment: ${props => (props.ismobile ? "scroll" : "fixed")};
  height: 50vmin;
  background-color: ${themeGet(
    "colors.background.banner",
    "rgba(0, 0, 0, 0.5)"
  )};
  background-blend-mode: overlay;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${themeGet("fonts.name", '"Bickham Script", cursive')};
  color: ${themeGet("colors.primary", "white")};
  font-weight: bold;
  letter-spacing: 0.6vw;
  font-size: 5vw;
  margin: 1vh 3vw 4vh 3vw;
  text-align: center;
  @media all and (max-width: 500px) {
    font-size: 10vw;
  }
`;