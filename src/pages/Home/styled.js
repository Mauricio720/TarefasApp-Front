import styled from "styled-components";

export const PageArea = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .formAdd__title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #006a9c;
    width: 100%;

    h2 {
      width: 60%;
      text-align: center;
      font-size: 20px;
      border-bottom: 2px solid #006a9c;
      padding: 10px;
    }
  }

  .formAdd {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .home__inputs--mobile {
      display: none;
      flex-direction: column;
    }

    .formAdd__content {
      width: 100%;
      display: flex;

      .formAdd__contentRight {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .formAdd__contentLeft,
      .formAdd__contentRight {
        flex: 1;
        margin: 5px;

        .home__inputs {
          display: flex;
          height: 80px;
          color: #006a9c;

          .input__group--md {
            width: 50%;
          }

          .input__group {
            display: flex;
            flex-direction: column;
            margin: 5px;

            .addTaskImg {
              width: 150px;
              max-height: 120px;

              img {
                width: 80%;
                height: 100%;

                object-fit: cover;
              }
            }

            input,
            select,
            textarea {
              height: 40px;
              font-size: 18px;
              color: #006a9c;
              border: 1px solid #006a9c;
              background-color: white;
            }
          }
        }
      }
    }

    .btnSubmit {
      width: 250px;
      margin: 15px;
      height: 40px;
      background-color: #006a9c;
      color: white;
      cursor: pointer;
    }
  }

  .home__title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #006a9c;

    h3 {
      width: 40%;
      text-align: center;
      font-size: 20px;
      border-bottom: 2px solid #006a9c;
      border-top: 2px solid #006a9c;
      padding: 10px;
    }
  }

  .home__searchArea {
    display: flex;
    align-items: center;
    margin: 10px;

    input {
      width: 500px;
      height: 25px;
      border: 0px;
      border: 2px solid #006a9c;
      border-radius: 15px;
      padding: 10px;
      font-size: 20px;

      ::placeholder {
        color: #006a9c;
      }
    }

    img {
      width: 35px;
      height: 35px;
      margin-left: 5px;
    }
  }

  .home__header {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    color: #006a9c;
    margin: 10px;
    margin-top: 25px;

    .home__addTask {
      display: flex;
      width: 200px;
      cursor: pointer;
      background-color: white;

      .addTask__icon {
        width: 100px;
        padding: 5px;

        img {
          width: 100%;
        }
      }
    }

    .home__addTask--mobile {
      display: none;
      position: fixed;
      width: 60px;
      bottom: 0px;
      right: 0px !important;
      background-color: white;

      img {
        width: 100%;
      }
    }

    .home__addTask--monthMobile {
      display: none;
      position: fixed;
      width: 60px;
      bottom: 0px;
      left: 0px;
      background-color: white;

      img {
        width: 100%;
      }
    }
  }

  .home__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .home__inputs {
      display: flex;
      color: #006a9c;

      .input__group {
        display: flex;
        flex-direction: column;
        margin: 5px;

        label {
          margin-top: 10px;
        }

        select,
        input {
          width: 250px;
          height: 40px;
          font-size: 18px;
          color: #006a9c;
          border: 1px solid #006a9c;
          background: white;
        }

        input {
          width: 245px;
        }
      }
    }
  }

  .weekContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardTasks__container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .emptyTask {
      color: #006a9c;
      text-align: center;
      font-size: 20px;
      border-bottom: 2px solid #006a9c;
      padding: 10px;
    }
  }

  @media (max-width: 1090px) {
    .home__addTask {
      display: none !important;
    }

    .home__searchArea {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 55px;
    }

    .home__searchArea img {
      display: none;
    }

    .home__header {
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
    }

    .home__title h3 {
      width: 90%;
    }

    .home__addTask--mobile {
      display: flex !important;
    }

    .home__addTask--monthMobile {
      display: flex !important;
    }

    .home__inputs--mobile {
      display: flex !important;
    }

    .home__inputs--desktop {
      display: none !important;
    }

    .home__inputs .input__group {
      width: 100%;
    }

    .input__group input {
      width: 100%;
    }

    .formAdd {
      width: 400px;
    }

    .formAdd .formAdd__content {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .formAdd__content .formAdd__contentLeft {
      order: 2;
      width: 95% !important;
    }

    .formAdd__content .formAdd__contentRight {
      order: 1;
      width: 95% !important;
    }

    .modal__content {
      height: 95vh;
    }
  }

  @media (max-width: 530px) {
    .home__container .home__inputs {
      flex-direction: column;
    }

    .input__group input {
      width: 100%;
    }

    .formAdd {
      width: 95vw;
    }

    .modal__content {
      height: 95vh;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
