import styled from "styled-components";
import { constants } from "../../assets/styles/constants";
import { colors } from "../../assets/styles/colors";
import imgDesktop from "../../assets/images/rodape-desktop.jpg";
import imgMobile from "../../assets/images/rodape-mobile.jpg";

export const StyledFooter = styled.section`
  width: 100%;
  aspect-ratio: 5.74;
  background-image: url(${imgDesktop});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5vw;

  p {
    font-family: ${constants.secondaryFont};
    font-weight: lighter;
    color: ${colors.primaryFontColor};
    font-size: 1.2vw;
  }

  @media screen and (max-width: 991px) and (min-width: 767px) {
    p {
      font-size: 1.4vh;
    }
  }

  @media (max-width: 767px) {
    background-image: url(${imgMobile});
    aspect-ratio: 1.43;
    gap: 2.5vh;

    p {
      font-size: 2.3vh;
    }
  }
`;
