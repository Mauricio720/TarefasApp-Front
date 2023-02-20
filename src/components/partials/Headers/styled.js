import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 100vh;
  width: 300px;
  background-color: #006a9c;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all linear 0.4s;

  .header__content {
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  .profile__container {
    width: 100%;
    height: 150px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .profile__picture {
      width: 60%;
      max-height: 70%;
      margin-top: 10px;
    }

    .profile__name {
      width: 100%;
      height: 25px;
      font-size: 22px;
      text-align: center;
      color: #006a9c;
      font-weight: bold;
      padding: 5px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    width: 80%;
    margin-top: 20px;

    li {
      width: 95%;
      height: 45px;
      line-height: 45px;
      padding: 10px;

      &:hover {
        text-decoration: underline;
        text-decoration-color: white;
      }

      a,
      .item_li {
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 18px;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }

      .menu__icon {
        width: 40px;
        height: 100%;
        margin-right: 15px;

        img {
          width: 100%;
        }
      }
    }
  }

  .header__close {
    display: none;
    width: 15px;
    height: 15px;
    color: #006a9c;
    font-size: 25px;
    position: absolute;
    font-weight: bold;
    top: 0px;
    right: 10px;
    cursor: pointer;
  }

  @media (max-width: 1090px) {
    & {
      display: ${(props) => (props.visible ? "flex" : "none")};
      opacity: ${(props) => (props.visibleOpacity ? 1 : 0)};
      position: fixed;
      width: 220px;
      z-index: 10000;
    }

    .header__close {
      display: block;
    }
  }
`;
