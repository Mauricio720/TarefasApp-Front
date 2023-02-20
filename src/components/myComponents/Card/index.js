import React, { useEffect, useState } from "react";
import { CardContainer } from "./styled.js";
import typeTaskIcon from "./../../../images/typeTask.png";
import checkIcon from "./../../../images/check.png";
import checkEmptyIcon from "./../../../images/checkEmpty.jpg";
import trashIcon from "./../../../images/trash.png";
import useApi from "./../../../helpers/Api";
import BigCard from "./../../../components/myComponents/Card/BigCard";
import swal from "sweetalert";
import { verifyDateInPast } from "./../../../helpers/Date";

const Card = (props) => {
  const api = useApi();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(props.selected);
  const importanceTitle = ["", "Importante", "Muito Importante", "Razoavel"];
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const changeSelected = async () => {
      const json = await api.changeSelectedTask(props.id);
      if (json.error) {
        swal({
          text: json.error,
          icon: "error",
        });
      }

      if (json.successToday) {
        swal({
          title: "Parabens!!!",
          text: json.msg,
          icon: "success",
        });
      }
    };

    if (firstLoad === false) {
      changeSelected();
    }

    setFirstLoad(false);
  }, [selected]);

  const deleteTask = () => {
    swal({
      text: "Ter certeza que deseja deletar essa tarefa!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      buttons: ["Cancelar", "Sim"],
    }).then((willDelete) => {
      if (willDelete) {
        deleteNow();
      }
    });
  };

  const deleteNow = async () => {
    let json = await api.deleteTask(props.id);
    if (json.error === "") {
      window.location = "/";
    } else {
      swal({
        text: json.error,
        icon: "error",
      });
    }
  };

  const setSelectedTask = (selectedChoice) => {
    setSelected(selectedChoice);
    return selected;
  };

  return (
    <CardContainer>
      <BigCard
        visible={visible}
        setVisible={setVisible}
        selectedChoice={selected}
        id={props.id}
        title={props.title}
        start={props.start}
        end={props.end}
        date={props.date}
        description={props.description}
        selected={props.selected}
        importance={props.importance}
        img={props.img}
        infoRepeat={props.infoRepeat}
        setSelectedTask={setSelectedTask}
      ></BigCard>

      <div className="card__header">
        <img
          className="card__img"
          src={props.img ? props.img : typeTaskIcon}
          alt="icon"
        />
        <div className="card__actions">
          {verifyDateInPast(props.date) && (
            <div
              className="action__item"
              onClick={() => {
                setSelectedTask(selected === 1 ? 0 : 1);
              }}
            >
              {selected === 1 && <img src={checkIcon} alt="icon" />}

              {selected === 0 && <img src={checkEmptyIcon} alt="icon" />}
            </div>
          )}

          {verifyDateInPast(props.date) === false && (
            <div className="action__item disabled">
              {selected === 1 && <img src={checkIcon} alt="icon" />}

              {selected === 0 && <img src={checkEmptyIcon} alt="icon" />}
            </div>
          )}

          {verifyDateInPast(props.date) && (
            <div className="action__item" onClick={deleteTask}>
              <img src={trashIcon} alt="icon" />
            </div>
          )}

          {verifyDateInPast(props.date) === false && (
            <div className="action__item disabled">
              <img src={trashIcon} alt="icon" />
            </div>
          )}
        </div>
      </div>

      <div className="card__title">{props.title}</div>

      <div className="card__infoArea">
        <div className="card__info">
          <span>Hora:</span>
          {props.start}
        </div>
        <div className="card__info">
          <span className="time">Até:</span>
          {props.end}
        </div>
        <div className="card__info">{importanceTitle[props.importance]}</div>
      </div>

      <div
        className="card__seeMore"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        clique para ver mais
      </div>
    </CardContainer>
  );
};

export default Card;
