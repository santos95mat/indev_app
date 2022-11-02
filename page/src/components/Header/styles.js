import styled from "styled-components";
import { constants } from "../../assets/styles/constants";
import { colors } from "../../assets/styles/colors";

export const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  div.header__container {
    width: 100%;
    max-width: 55vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1vw;
    opacity: 1;

    img.logo {
      width: 20%;
      cursor: pointer;
    }

    nav {
      width: 80%;

      ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2vw;

        div {
          display: flex;
          gap: 2vw;

          li {
            box-sizing: border-box;
            font-size: 1.2vw;
            cursor: pointer;
            color: ${colors.primaryFontColor};
            font-family: ${constants.secondaryFont};
          }
        }

        li:hover {
          text-decoration: underline;
        }
      }

      ul > :first-child {
        li {
          list-style-type: none;
        }
      }
    }
  }

  div.header__hidden {
    opacity: 0;
    visibility: hidden;
  }

  @media screen and (max-width: 991px) {
    div.header__container {
      flex-direction: row-reverse;
      max-width: 100%;
      padding-right: 5vh;
      padding-left: 5vh;
      padding-top: 2.5vh;
      position: relative;
      align-items: flex-start;
      justify-content: space-between;

      img.logo {
        width: 30%;
        max-width: 160px;
      }

      img.menu__mobile {
        width: 4vh;
        cursor: pointer;
      }

      div.main__opacity {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.5);
      }

      nav.menu__desappear {
        display: none;
      }

      nav.menu__appear {
        box-sizing: border-box;
        left: 0;
        top: 0;
        width: 58%;
        max-width: 330px;
        height: 30vh;
        position: absolute;
        background-color: ${colors.primaryColor};
        padding-left: 5vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 99;

        img {
          margin-top: 2.5vh;
        }

        ul {
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column-reverse;
          gap: 2vh;
          margin-bottom: 6vh;

          div {
            flex-direction: column;
            gap: 2vh;

            li {
              list-style-type: none;
              font-size: 2vh;
            }
          }
        }

        ul > :first-child {
          li {
            text-decoration: none;
          }
        }
      }
    }

    div.header__hidden {
      opacity: 1;
      visibility: visible;
    }
  }

  @media screen and (max-width: 991px)
`;
