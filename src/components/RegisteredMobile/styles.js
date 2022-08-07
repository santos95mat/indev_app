import styled from "styled-components";
import { constants } from "../../assets/styles/constants";
import { colors } from "../../assets/styles/colors";

export const StyledRegisteredMobile = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 3vh;
    width: 100%;
    text-align: center;
    font-family: ${constants.primaryFont};
    color: ${colors.primaryColor};
  }

  article.register__header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 1vh;
    height: 8vh;
    width: 96%;
    gap: 1%;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;

    div {
      box-sizing: border-box;
      flex-shrink: 0;
      width: 24.25%;
      height: 4vh;

      label {
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        input[type="radio"] {
          box-sizing: border-box;
          all: unset;
          width: 100%;
          height: 100%;
          border-top: 2px solid black;
          border-left: 2px solid black;
          border-right: 2px solid black;
        }

        input[type="radio"]:checked {
          border: none;
          border-top: 2px solid ${colors.primaryColor};
          border-left: 2px solid ${colors.primaryColor};
          border-right: 2px solid ${colors.primaryColor};
        }

        span {
          position: absolute;
          font-family: ${constants.secondaryFont};
          font-weight: lighter;
          color: ${colors.secondaryColor};
        }
      }
    }
  }

  article.register__dados {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2vh 2vh 2vh 2vh;
    margin-bottom: 6vh;
    width: 96%;
    border: 2px solid ${colors.primaryColor};
    z-index: 2;
    gap: 1vh;

    div {
      display: flex;
      align-items: flex-end;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 1px solid ${colors.primaryColor};

      p.colunm__title {
        font-family: ${constants.secondaryFont};
        color: ${colors.secondaryColor};
        width: 30%;
        height: 100%;
        font-size: 3vh;
      }

      p.colunm__dados {
        font-family: ${constants.thirdfont};
        color: ${colors.infoColor};
        width: 70%;
        height: 100%;
        font-size: 3vh;
      }
    }
  }
`;
