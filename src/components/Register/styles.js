import styled from "styled-components";
import { constants } from "../../assets/styles/constants";
import { colors } from "../../assets/styles/colors";

export const StyledRegister = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryColor};

  form {
    margin-top: 2vw;
    margin-bottom: 2vw;
    width: 100%;
    max-width: 35vw;

    fieldset {
      width: 100%;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5vw;

      legend {
        color: ${colors.primaryFontColor};
        font-family: ${constants.primaryFont};
        font-size: 2.2vw;
        text-align: center;
        width: 100%;
        margin-bottom: 2vw;
      }

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1vw;

        label {
          font-size: 0.8vw;
          color: ${colors.primaryFontColor};
          font-family: ${constants.secondaryFont};
        }

        input {
          font-size: 1vw;
          font-family: ${constants.thirdfont};
          color: ${colors.primaryFontColor};
          background-color: ${colors.primaryColor};
          box-sizing: border-box;
          outline: 0;
          border: none;
          border-bottom: 1px solid ${colors.primaryFontColor};
        }
      }
    }
  }

  p {
    font-size: 1vw;
    margin-bottom: 2vw;
    font-family: ${constants.secondaryFont};
    color: ${colors.secondaryColor};
  }

  button {
    box-sizing: border-box;
    width: 12vw;
    height: 2.7vw;
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryColor};
    font-family: ${constants.primaryFont};
    outline: 0;
    border: none;
    font-size: 1.6vw;
    cursor: pointer;
    margin-bottom: 2.5vw;
  }

  
  @media screen and (max-width: 991px) and (min-width: 767px){
    min-height: 30vh;
    justify-content: space-around;
    align-items: center;

    form {
      max-width: 55vw;

      fieldset {
        legend {
          font-size: 3.2vh;
        }

        div {
          label {
            font-size: 1.5vh
          }

          input {
            font-size: 1.9vh;
          }
        }
      }
    }

    button {
      margin-top: 1vh;
      margin-bottom: 3vh;
      width: 25vw;
      font-size: 2.7vh;
      height: auto;
    }

  }

  @media (max-width: 767px) {
    form {
      max-width: 80vw;
      margin-top: 3vh;
      margin-bottom: 3vh;

      fieldset {
        gap: 2vh;

        legend {
          font-size: 5vh;
        }

        div {
          gap: 1vh;

          label {
            font-size: 1.6vh;
          }

          input {
            font-size: 1.9vh;
          }
        }
      }
    }

    p {
      font-size: 1.6vh;
    }

    button {
      margin-top: 2vh;
      width: 60vw;
      height: 5vh;
      font-size: 4vh;
      margin-bottom: 5vh;
    }
  }
`;
