import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  justify-content: center;

  .myProfile__container {
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .myProfile__img {
      margin-top: 15px;
      width: 180px;

      img {
        width: 100%;
        object-fit: cover;
        max-height: 180px;
      }
    }

    .contentMyProfile__container {
      width: 100%;
      display: flex;

      .contentMyProfile__container__sides {
        flex: 1;
        padding: 25px;
      }

      .myProfile__content {
        margin-top: 25px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          border: 0px;
          color: #006a9c;
          font-size: 20px;
          height: 35px;
        }

        .myProfile__item {
          width: 100%;
          display: flex;
          flex-direction: column;
          color: #006a9c;

          label {
            font-size: 18px;
            margin-right: 15px;
            font-weight: bold;
          }

          .myProfile__itemText {
            font-size: 20px;
            min-width: 350px;
            text-align: center;
            border: 2px solid #006a9c;
            padding: 5px;
            min-height: 30px;
          }
        }
      }
    }

    .myProfile__content--footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 25px;

      button,
      input {
        width: 250px;
        margin: 5px;
        height: 40px;
        background-color: #006a9c;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: blue;
        }
      }
    }
  }

  @media (min-width: 530px) and (max-width: 1090px) {
    .contentMyProfile__container {
      flex-direction: column;
    }

    .contentMyProfile__container__sides {
      padding: 0px !important;
      margin-top: 0px;
    }
  }

  @media (max-width: 530px) {
    .contentMyProfile__container {
      flex-direction: column;
    }

    .myProfile__item .myProfile__itemText {
      min-width: unset !important;
      overflow: hidden;
    }

    .contentMyProfile__container__sides {
      padding: 0px !important;
      margin-top: 0px;
    }
  }
`;
