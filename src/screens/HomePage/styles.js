import styled from "styled-components";
import { themeGet } from "styled-system";
import bannerImg from "./../../images/banner.jpg";

export const Banner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-image: url(${bannerImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 90vh;
  background-color: ${themeGet(
    "colors.bannerBackground",
    "rgba(0, 0, 0, 0.5)"
  )};
  background-blend-mode: overlay;
`;

export const GreetingText = styled.text`
  font-family: ${themeGet("fonts.greeting", '"Bickham Script", cursive')};
  color: ${themeGet("colors.primary", "white")};
  font-style: italic;
  font-size: 3em;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const NameDash = styled.div`
  background-color: ${themeGet("colors.primary", "white")};
  width: 20vw;
  height: 0.3em;
`;

export const NameDot = styled.div`
  background-color: ${themeGet("colors.primary", "white")};
  border-radius: 50%;
  behavior: url(PIE.htc);
  width: 0.7em;
  height: 0.7em;
`;

export const NameText = styled.text`
  font-family: ${themeGet("fonts.name", '"Bickham Script", cursive')};
  color: ${themeGet("colors.primary", "white")};
  font-weight: bold;
  letter-spacing: 0.1em;
  font-size: 6.5em;
  margin: 0.3em 0.7em 0.5em 0.7em;
`;

export const DescriptionText = styled.text`
  font-family: ${themeGet("fonts.primary", 'Arial, sans-serif')};
  color: ${themeGet("colors.primary", "white")};
  font-size: 3.4em;
  text-transform: capitalize;
  margin-right: 0.7em;
  margin-left: 0.7em;
`;

export const DescriptionDot = styled.div`
  background-color: ${themeGet("colors.primary", "white")};
  border-radius: 50%;
  behavior: url(PIE.htc);
  width: 1em;
  height: 1em;
`;
