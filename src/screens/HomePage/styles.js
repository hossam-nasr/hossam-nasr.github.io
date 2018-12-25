import styled from "styled-components";
import { themeGet } from "styled-system";
import bannerImg from "./../../images/banner.jpg";

export const Banner = styled.div`
  background-image: url(${bannerImg});
  background-position: center center;
  background-repeat: no-repeat;
  height: 90vh;
`;
