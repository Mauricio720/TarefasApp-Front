import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(2, 2, 2, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.5s;
  overflow-y: auto;
  z-index: 2000;

  .modal__close {
    position: absolute;
    top: 0px;
    right: 15px;
    width: 15px;
    height: 15px;
    color: #006a9c;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
  }

  .modal__content {
    position: relative;
    background-color: white;
    border: 3px solid #006a9c;
  }

  @media (max-width: 1090px) {
    .modal__content {
      overflow-y: auto;
    }
  }

  @media (max-width: 530px) {
    .modal__content {
      overflow-y: auto;
    }

    .modal__close {
      top: 15px;
    }
  }
`;
