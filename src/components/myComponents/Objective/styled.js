import styled from "styled-components";

export const ObjectiveContainer = styled.div`
  margin-top: 15px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .objective {
    width: 100%;
    height: 140px;
    border: 2px solid #006a9c;
    display: flex;
    justify-content: center;

    .objective_content {
      width: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: relative;

      .objective__item {
        display: flex;
        color: #006a9c;
        margin: 1px;

        input {
          width: 600px;
          border: 0px;
          border-bottom: 1px solid #006a9c;
          color: #006a9c;
          margin: 5px;
        }

        select {
          width: 300px;
          border: 0px;
          border-bottom: 1px solid #006a9c;
          color: #006a9c;
          margin: 5px;
          padding: 2px;
        }

        label {
          width: 80px;
          margin-right: 15px;
        }
      }

      .objective__actionsContainer {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        .objective__action {
          width: 25px;
          height: 25px;
          margin: 2px;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .btnSubmitObjective {
      width: 65px;
      height: 25px;
      line-height: 20px;
      margin-bottom: 1px;
      background-color: #006a9c;
      color: white;
      cursor: pointer;
      text-align: center;

      &:hover {
        background-color: blue;
      }
    }
  }
`;
