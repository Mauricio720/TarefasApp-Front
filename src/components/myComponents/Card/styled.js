import styled from "styled-components";

export const CardContainer = styled.div`
  width: 220px;
  height: 250px;
  border: 2px solid #006a9c;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #006a9c;

  .disabled {
    background: #c7c7c7;
    cursor: default !important;
  }

  .card__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 5px;

    .card__img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }

    .card__actions {
      position: absolute;
      top: 5px;
      right: 15px;
      width: 20px;

      .action__item {
        width: 30px;
        height: 25px;
        cursor: pointer;
        margin-bottom: 15px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .card__title {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    font-size: 18px;
  }

  .card__infoArea {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: center;

    .card__info {
      width: 100%;

      span {
        margin-right: 5px;
      }

      .time {
        margin-right: 14px;
      }
    }
  }

  .card__seeMore {
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    padding: 2px;

    &:hover {
      background-color: #006a9c;
      color: white;
    }
  }
`;
