import React,{useEffect, useState} from 'react';
import checkIcon from './../../../images/check.png';
import checkEmptyIcon from './../../../images/checkEmpty.jpg';
import editIcon from './../../../images/edit.png';
import trashIcon from './../../../images/trash.png';
import saveIcon from './../../../images/save.png';
import {ObjectiveContainer} from './styled.js';
import useApi from '../../../helpers/Api';
import {getUser} from '../../../helpers/AuthHandler';
import swal from 'sweetalert';

const Objective=(props)=>{
    const api=useApi();
    const [add,setAdd]=useState(props.add);
    const [edit,setEdit]=useState(false);
    const [title,setTitle]=useState(props.title?props.title:'');
    const [type,setType]=useState(props.type?props.type:'1');
    const [level,setLevel]=useState(props.level?props.level:'1');
    const [done,setDone]=useState(props.done);
    const [id,setId]=useState(props.id?props.id:'');
    const typeArray=['','Importante','Muito Importante','Razoavel'];
    const levelArray=['','Diario','Semanal','Mensal','Anual'];
    const [firstLoad,setFirstLoad]=useState(true);

    const addUpdateObjective=async ()=>{
        let objective={
            id,
            idUser:getUser().id,
            title,
            type,
            level,
        };

        if(title,type,level){
            let json="";
            let textSuccess="Objetivo adicionado com sucesso!!!";

            if(props.add){
                json=await api.addObjective(objective);
            }else{
                json=await api.updateObjective(objective);
                textSuccess="Objetivo atualizado com sucesso!!!";
            }
            
            if(json.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
            }else{
                swal({
                    text: textSuccess,
                    icon: "success",
                })
                .then((value) => {
                    if(value){
                        window.location='/objective';
                    }
                });
                
            }
        }else{
            swal({
                text: "Preencha todos os campos!",
                icon: "error",
            });
        }
    }

    const deleteObjective=()=>{
        swal({
            text: "Ter certeza que deseja deletar esse objetivo?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            buttons: ["Cancelar", "Sim"],
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteNow();      
            }
        });
    }

    const deleteNow=async ()=>{
        let json= await api.deleteObjective(id);
        if(json.error){
            swal({
                text: json.error,
                icon: "error",
            });
        }else{
            window.location='/objective';
        }
    }

    useEffect(()=>{
        const changeSelectedObjective=async ()=>{
            let json=await api.changeSelectedObjective(id);

            if(json.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
            }
        }

        if(firstLoad===false){
            changeSelectedObjective();

            if(done===1){
                swal({
                    title:"Parabens",
                    text: "Objetivo concluido com sucesso!!",
                    icon: "success",
                })
            }
        }
        setFirstLoad(false)
    },[done])

    return (
        <ObjectiveContainer>
            <div  className="objective">
                <form className="objective_content" onSubmit={(e)=>{addUpdateObjective(e)}}>
                    <div className="objective__item">
                        <label>Objetivo:</label>
                        {edit===false && props.add===undefined &&
                            <div className="objective__itemText">{title}</div>
                        }

                        {(add || edit) && 
                            <input autoFocus value={title} 
                                onChange={(e)=>{setTitle(e.target.value)}} 
                                className="objective__itemText input"/>
                        }
                    </div>
                    <div className="objective__item"> 
                        <label>Tipo:</label>
                        {edit===false && props.add===undefined &&
                            <div className="objective__itemText">{typeArray[type]}</div>
                        }

                        {(add || edit) &&
                            <select value={type} onChange={(e)=>{setType(e.target.value)}} className="objective__itemText input">
                                <option value="1">Importante</option>
                                <option value="2">Muito Importante</option>
                                <option value="3">Razoavel</option>
                            </select>
                        }
                    </div>
                    <div className="objective__item">
                        <label>Nivel:</label>
                        {edit===false && props.add===undefined &&
                            <div className="objective__itemText">{levelArray[level]}</div>
                        }

                        {(add || edit ) &&
                            <select value={level} onChange={(e)=>{setLevel(e.target.value)}} className="objective__itemText input">
                                <option value="1" >Diario</option>
                                <option value="2" >Semanal</option>
                                <option value="3">Mensal</option>
                                <option value="4">Anual</option>
                            </select>
                        }
                    </div>

                    {edit===false && add===undefined &&    
                    <div className="objective__actionsContainer">
                        <div className="objective__action" onClick={()=>{setDone(done===1?0:1)}}>
                            {done===1 &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {done===0 &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div onClick={()=>{setEdit(!edit)}} className="objective__action">
                            <img src={editIcon} alt="icon"/>
                        </div>
                        <div className="objective__action" onClick={()=>{deleteObjective()}}>
                            <img src={trashIcon} alt="icon"/>
                        </div>
                    </div>
                    }

                    {(add || edit) &&
                        <div className="objective__actionsContainer">
                            {edit &&
                                <div onClick={()=>{setEdit(!edit)}} className="objective__action">
                                    <img src={editIcon} alt="icon"/>
                                </div>
                            }
                            <div className="objective__action" onClick={()=>{addUpdateObjective()}}>
                                <img src={saveIcon} alt="icon" />
                            </div>
                        </div>
                    }
                </form>
            </div>
        </ObjectiveContainer>
    )
}

export default Objective;
