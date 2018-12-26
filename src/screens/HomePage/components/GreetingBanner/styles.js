import styled from "styled-components";
import { themeGet } from "styled-system";
import bannerImg from "./../../../../images/banner.jpg";

export const Banner = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 90vh;
  background-color: ${themeGet(
    "colors.background.banner",
    "rgba(0, 0, 0, 0.5)"
  )};
  background-blend-mode: overlay;
`;

export const GreetingText = styled.div`
  font-family: ${themeGet("fonts.greeting", '"Bickham Script", cursive')};
  color: ${themeGet("colors.primary", "white")};
  font-style: italic;
  font-size: 2.5vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const NameDash = styled.div`
  background-color: ${themeGet("colors.primary", "white")};
  width: 13vw;
  height: 0.5vh;
`;

export const NameDot = styled.div`
  background-color: ${themeGet("colors.primary", "white")};
  border-radius: 50%;
  behavior: url(PIE.htc);
  width: 1.2vh;
  height: 1.2vh;
`;

export const NameText = styled.div`
  font-family: ${themeGet("fonts.name", '"Bickham Script", cursive')};
  color: ${themeGet("colors.primary", "white")};
  font-weight: bold;
  letter-spacing: 1vw;
  font-size: 6.7vw;
  margin: 1vh 3vw 4vh 3vw;
`;

export const DescriptionText = styled.div`
  font-family: ${themeGet("fonts.primary", 'Arial, sans-serif')};
  color: ${themeGet("colors.primary", "white")};
  font-size: 3vw;
  text-transform: capitalize;
  margin-right: 3vw;
  margin-left: 3vw;
  padding-bottom: 3vh;
`;

export const DescriptionDot = styled.div`
  background-color: ${themeGet("colors.primary", "white")};
  border-radius: 50%;
  behavior: url(PIE.htc);
  width: 0.8vw;
  height: 0.8vw;
  margin-bottom: 3vh;
`;
