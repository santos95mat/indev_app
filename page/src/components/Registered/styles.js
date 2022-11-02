import styled from "styled-components";
import { constants } from "../../assets/styles/constants";
import { colors } from "../../assets/styles/colors";

export const StyledRegistered = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1vw;
  position: relative;

  h2 {
    color: ${colors.primaryColor};
    font-family: ${constants.primaryFont};
    font-size: 2.2vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
  }

  section {
    margin-top: 2vw;
    margin-bottom: 3vw;

    article {
      width: 50vw;
      display: flex;

      div {
        height: 3vw;
        min-height: 32px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      div.table__index {
        width: 8%;
        font-family: ${constants.secondaryFont};
        font-weight: lighter;
        color: ${colors.secondaryColor};
      }

      div.table__value {
        width: 23%;
        border-left: 1px solid ${colors.primaryColor};
        word-wrap: break-word;
      }
    }

    article.table_colunm {
      font-family: ${constants.secondaryFont};
      color: ${colors.secondaryColor};
    }

    article.table__map {
      border-top: 1px solid ${colors.primaryColor};
    }

    article.table__map > div.table__value {
      font-family: ${constants.thirdfont};
      color: ${colors.infoColor};
    }
  }

  img {
    position: absolute;
    width: 3vw;
    right: 6vw;
    bottom: 4vw;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) and (min-width: 767px) {
    h2 {
      font-size: 3vh;
      margin-bottom: 2vh;
    }

    section {

      article {
        width:65vw;
        font-size: 1.3vh;

        div {
          height: 4vh;
        }
      }
    }
  }
`;
