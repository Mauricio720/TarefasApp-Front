import React, { useState,useEffect,useRef } from 'react';
import {BigCardContainer} from './styled.js';
import typeTaskIcon from './../../../../images/typeTask.png';
import checkIcon from './../../../../images/check.png';
import checkEmptyIcon from './../../../../images/checkEmpty.jpg';
import saveIcon from './../../../../images/save.png';
import repeatIcon from './../../../../images/repeat.png';
import editIcon from './../../../../images/edit.png';
import trashIcon from './../../../../images/trash.png';
import Modal from './../../../../components/myComponents/Modal';
import useApi from './../../../../helpers/Api';
import {convertDate_ptBR} from './../../../../helpers/Date';
import RepeatWeek from './../../RepeatWeek';
import swal from 'sweetalert';
import {date_today,verifyDateInPast} from './../../../../helpers/Date';

const BigCard=(props)=>{
    const fileInputRef=useRef();
    const [visibleRepetition,setVisibleRepetition]=useState(false);
    const [edit,setEdit]=useState(false);
    const [selected,setSelected]=useState(props.selectedChoice);  
    const api=useApi();
    const [id,setId]=useState(props.id);
    const [title,setTitle]=useState(props.title);
    const [start,setStart]=useState(props.start);
    const [end,setEnd]=useState(props.end);
    const [description,setDescription]=useState(props.description);
    const [importance,setImportance]=useState(props.importance);
    const importanceTitle=["",'Importante','Muito Importante','Razoavel'];
    const [taskImgPreview,setTaskImgPreview]=useState(props.img?props.img:typeTaskIcon);
    const [taskImgFile,setTaskImgFile]=useState([]);
    const [firstLoad,setFirstLoad]=useState(true);

    const selectedTask=(selectedChoice)=>{
        props.setSelectedTask(selectedChoice);
        setSelected(selectedChoice)
    }
    
    useEffect(()=>{
        if(firstLoad===false){
            setSelected(props.selectedChoice);
        }
        setFirstLoad(false);
    },[props.selectedChoice]);
  

    const updateTask=async ()=>{
        const formData=new FormData();
        formData.append('id',id);
        formData.append('title',title);
        formData.append('start',start);
        formData.append('end',end);
        formData.append('importance',importance);
        formData.append('description',description);
        formData.append('taskImgFile',taskImgFile);

        let json=await api.updateTask(formData);
        if(json.error){
            swal({
                text: json.error,
                icon: "error",
            });
        }else{
            swal({
                text: "Tarefa atualizada com sucesso!!!",
                icon: "success",
            })
            .then((value) => {
                if(value){
                    window.location='/';
                }
            });
        }
    }

    const deleteTask=async ()=>{
        swal({
            text: "Ter certeza que deseja deletar essa tarefa!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            buttons: ["Cancelar", "Sim"],
          })
          .then((willDelete) => {
            if (willDelete) {
                let json=api.deleteTask(props.id);
                if(json.error!==""){
                    window.location='/';
                }else{
                    swal({
                        text: json.error,
                        icon: "error",
                    });
                }
            }
        });
    }

    const renderTaskImgPreview=(e)=>{
        let img = e.target.files[0];
        let fileReader = new FileReader(); 
        fileReader.onload = function(e){ 
            setTaskImgPreview(e.target.result);
        }
        fileReader.readAsDataURL(img);
        setTaskImgFile(img);
    }
    

    return (
        <>  
            <Modal visible={visibleRepetition} setVisible={setVisibleRepetition}>
                <RepeatWeek id={id} infoRepeat={props.infoRepeat}/>
            </Modal>
            
            {props.visible &&
                <BigCardContainer>
                    <div className="bigCard">
                        <div className="bigCard__close" onClick={()=>{props.setVisible(false)}}>X</div>
                        <div className="bigCard__header">
                            {edit===false &&
                                <div className="bigCard__image">
                                    <img src={taskImgPreview} alt="icon"/>
                                </div>
                            }

                            {edit &&
                                <div className="bigCard__image" style={{cursor:'pointer'}} onClick={()=>{fileInputRef.current.click();}}>
                                    <img src={taskImgPreview} alt="icon"/>
                                    <input 
                                        type="file" 
                                        style={{display:"none"}} 
                                        ref={fileInputRef}
                                        onChange={(event)=>{renderTaskImgPreview(event)}}
                                    />
                                </div>
                            }
                            <div className="bigCard__title">
                                {edit===false &&
                                    props.title
                                }
                                {edit &&
                                    <input value={title} onChange={((e)=>{setTitle(e.target.value)})} autoFocus/>
                                }
                            </div>
                        </div>

                        <div className="bigCard__contentContainer">
                            <div className="bigCard__content">
                                <div className="bigCard__item">
                                    <label>Hora Inicio:</label>
                                    {edit===false &&
                                        <div className="item__content">{props.start}</div>
                                    }
                                    {edit &&
                                        <input type="time" value={start} onChange={(e)=>{setStart(e.target.value)}} className="item__content" />
                                    }
                                </div>
                            
                                <div className="bigCard__item">
                                    <label>Hora Termino:</label>
                                    {edit===false &&
                                        <div className="item__content">{props.end}</div>
                                    }
                                    {edit &&
                                        <input type="time" value={end} onChange={(e)=>{setEnd(e.target.value)}} className="item__content" />
                                    }
                                </div>
                          
                                <div className="bigCard__item">
                                    <label>Data:</label>
                                    <div className="item__content">{convertDate_ptBR(props.date)}</div>
                                </div>
                            
                                <div className="bigCard__item">
                                    <label>Dia Semana:</label>
                                    <div className="item__content"> Quinta</div>
                                </div>
                           
                                <div className="bigCard__item">
                                    <label>Importância:</label>
                                    {edit===false &&
                                        <div className="item__content">{importanceTitle[props.importance]}</div>
                                    }

                                    {edit &&
                                         <select className="item__content" onChange={(e)=>{setImportance(e.target.value)}} value={importance}>
                                            <option value="1">Importante</option>
                                            <option value="2">Muito Importante</option>
                                            <option value="3">Razoavel</option>
                                        </select>
                                    }
                                </div>

                                <div className="bigCard__item bigCard__item--description">
                                    <label>Descrição</label>
                                    {edit===false &&
                                        <div className="item__content item__content--description">
                                            {props.description}
                                        </div>
                                    }
                                    {edit &&
                                        <textarea className="item__content item__content--description" 
                                            value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="bigCard__footer">
                            <div className="bigCard__footerContent">
                                <div onClick={()=>{setVisibleRepetition(!visibleRepetition)}} className="bigCard__btn">
                                    <img src={repeatIcon} alt="icon"/>
                                </div>
                                
                                {verifyDateInPast(props.date) &&
                                    <div className="bigCard__btn" onClick={()=>{selectedTask(selected===1?0:1)}}>
                                        {selected===1 &&
                                            <img src={checkIcon} alt="icon"/>
                                        }

                                        {selected===0 &&
                                            <img src={checkEmptyIcon} alt="icon"/>
                                        }
                                    </div>
                                }

                                {verifyDateInPast(props.date)===false &&
                                    <div className="bigCard__btn disabled">
                                        {selected===1 &&
                                            <img src={checkIcon} alt="icon"/>
                                        }

                                        {selected===0 &&
                                            <img src={checkEmptyIcon} alt="icon"/>
                                        }
                                    </div>
                                }

                                {edit &&
                                    <div className="bigCard__btn" onClick={()=>{updateTask()}}>
                                        <img src={saveIcon} alt="icon"/>
                                    </div>
                                }
                                <div onClick={()=>{setEdit(!edit)}} className="bigCard__btn">
                                    <img src={editIcon} alt="icon"/>
                                </div>
                                {verifyDateInPast(props.date) &&
                                    <div className="bigCard__btn" onClick={()=>{deleteTask()}}>
                                        <img src={trashIcon} alt="icon"/>
                                    </div>
                                }

                                {verifyDateInPast(props.date)===false &&
                                    <div className="bigCard__btn disabled" onClick={()=>{deleteTask()}}>
                                        <img src={trashIcon} alt="icon"/>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>
                </BigCardContainer>
            }
        </>
    );
}

export default BigCard;