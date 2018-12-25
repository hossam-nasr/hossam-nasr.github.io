import styled from "styled-components";
import { themeGet } from "styled-system";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: ${themeGet("colors.navigation.background", "black")};
  

  @media all and (max-width: 800px) {
    justify-content: space-between;
  }

  @media all and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  background-color: ${themeGet("colors.navigation.background", "black")};

  @media all and (max-width: 800px) {
    justify-content: space-around;
  }

  @media all and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
