import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PageArea } from "./styled.js";
import profileIcon from "./../../../images/profile.png";
import useApi from "./../../../helpers/Api";
import { doLogin, setUser } from "./../../../helpers/AuthHandler";
import swal from "sweetalert";

const FirstUser = () => {
  const fileInputRef = useRef();
  const api = useApi();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImg, setProfileImg] = useState(profileIcon);
  const [profileFile, setProfileFile] = useState([]);

  const addUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("login", login);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profileImg", profileFile);

    if (password !== confirmPassword) {
      swal({
        text: "O confirmar senha tem que ser igual ao senha!",
        icon: "error",
      });
    } else {
      let json = await api.addUser(formData);
      if (json.error) {
        swal({
          text: json.error,
          icon: "error",
        });
      } else {
        doLogin(json.token);
        let userInfo = await api.getUser();
        if (userInfo.error) {
          swal({
            text: json.error,
            icon: "error",
          });
        } else {
          setUser(userInfo.user);
          window.location = "/";
        }
      }
    }
  };

  const profileImgPreview = (e) => {
    let img = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      setProfileImg(e.target.result);
    };
    fileReader.readAsDataURL(img);
    setProfileFile(img);
  };

  return (
    <PageArea>
      <div className="registerUser__container">
        <Link to="/login" className="backButton">
          X
        </Link>
        <h2>Cadastre seu usuario!</h2>
        <form
          onSubmit={(event) => {
            addUser(event);
          }}
        >
          <div className="registerUser__content firstBlock">
            <div className="registerUser__leftSide">
              <div className="input__group">
                <label>Nome</label>
                <br />
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <br />

              <div className="input__group">
                <label>Sobrenome</label>
                <br />
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <br />
            </div>

            <div className="registerUser__rightSide">
              <div
                className="registerUser__profilePicture"
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                <img src={profileImg} alt="icon" />
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={(event) => {
                    profileImgPreview(event);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="registerUser__content">
            <div className="registerUser__leftSide">
              <div className="input__group">
                <label>Login</label>
                <br />
                <input
                  value={login}
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                />
              </div>
              <br />

              <div className="input__group">
                <label>Email</label>
                <br />
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                />
              </div>
              <br />
            </div>
            <div className="registerUser__rightSide">
              <div className="input__group">
                <label>Senha</label>
                <br />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                />
              </div>
              <br />

              <div className="input__group">
                <label>Confirmar Senha</label>
                <br />
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                />
              </div>
              <br />
            </div>
          </div>

          <div className="registerUser__footer">
            <input type="submit" value="Cadastrar" className="btnSubmit" />
          </div>
        </form>
      </div>
    </PageArea>
  );
};

export default FirstUser;
