import styled from "styled-components";
import imgDesktop from "../../assets/images/index-image.jpg";
import imgMobile from "../../assets/images/index-image-mobile.jpg";
import { constants } from "../../assets/styles/constants";
import { colors } from "../../assets/styles/colors";

export const StyledMain = styled.section`
  width: 100%;
  aspect-ratio: 2.04;
  background-image: url(${imgDesktop});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 28vw;
    margin-bottom: 18vh;
  }

  h1 {
    color: ${colors.primaryFontColor};
    font-family: ${constants.primaryFont};
    font-weight: 300;
    font-size: 6vw;
    text-align: center;
  }

  h2 {
    color: ${colors.primaryFontColor};
    font-family: ${constants.primaryFont};
    font-weight: 300;
    font-size: 2.57vw;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    aspect-ratio: 1.64;
    background-size: cover;
    background-position: -12vw;

    div {
      margin-bottom: 10vh;
    }
  }

  @media screen and (max-width: 767px) {
    background-image: url(${imgMobile});
    aspect-ratio: 0.66;
    align-items: flex-start;

    div {
      margin: 0;
      margin-top: 12vh;
    }

    h1 {
      font-size: 7.5vh;
    }

    h2 {
      font-size: 3.1vh;
    }
  }
`;
