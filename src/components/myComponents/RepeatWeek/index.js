import React,{useEffect, useState} from 'react';
import {RepetitionDaysContainer} from './styled.js';
import checkIcon from './../../../images/check.png';
import checkEmptyIcon from './../../../images/checkEmpty.jpg';
import useApi from './../../../helpers/Api';
import swal from 'sweetalert';

const RepeatWeek=(props)=>{
    var weekSelected={};
    if(props.infoRepeat!==null){
        weekSelected={
            everyDay:props.infoRepeat.everyday===0?false:true,
            mon:props.infoRepeat.monday===0?false:true,
            tue:props.infoRepeat.tuesday===0?false:true,
            wed:props.infoRepeat.wednesday===0?false:true,
            thu:props.infoRepeat.thursday===0?false:true,
            fri:props.infoRepeat.friday===0?false:true,
            sat:props.infoRepeat.saturday===0 ?false:true,
            sun:props.infoRepeat.sunday===0?false:true
        };
    }else{
        weekSelected={
            everyDay:false,
            mon:false,
            tue:false,
            wed:false,
            thu:false,
            fri:false,
            sat:false,
            sun:false
        };
    }

   
    
    const [repeatWeek,setRepeatWeek]=useState(weekSelected);
    const [allDaysSelected,setAllDaysSelected]=useState([]);
    const [idTask,setIdTask]=useState(props.id);
    const api=useApi();

    useEffect(()=>{
        setRepeatDays();
    },[])

    const setRepeatDays=()=>{
        let weekSelected={...repeatWeek};
        let newDays=[...allDaysSelected];
        
        if(weekSelected.sun){
            newDays.push("0");
        }
        if(weekSelected.mon){
            newDays.push("1");
        }
        if(weekSelected.tue){
            newDays.push("2");
        }
        if(weekSelected.wed){
            newDays.push("3");
        }
        if(weekSelected.thu){
            newDays.push("4");
        }

        if(weekSelected.fri){
            newDays.push("5");
        }

        if(weekSelected.sat){
            newDays.push("6");
        }
        if(weekSelected.everyDay){
            newDays.push("7");
        }

        setAllDaysSelected(newDays);
    }

    const setWeekSelected=(index,status)=>{
        let weekSelected={...repeatWeek};
        let weekDay=['sun','mon','tue','wed','thu','fri','sat','everyDay'];
        eval("weekSelected."+weekDay[index]+"=!weekSelected."+weekDay[index]);
        setRepeatWeek(weekSelected);

        let newIndex=index.toString();
        let newDays=[...allDaysSelected];
        
        if(status===false){
            newDays.push(newIndex);
            setAllDaysSelected(newDays);

        }else{
            let index=newDays.findIndex((item)=>{
                if(item==newIndex){
                    return true;
                }else{
                    return false;
                }
            })

            newDays.splice(index,1);
            setAllDaysSelected(newDays);

        }

    }

    const sendRepeatDays=async ()=>{
        let daysSelected=allDaysSelected.join(',');
        let json=await api.sendRepeatDays(idTask,daysSelected);
        if(json.error){
            swal({
                text: json.error,
                icon: "error",
            });
        }else{
            window.location="/";
        }
    }
    
    return (
        <RepetitionDaysContainer>
            <div className="repetition__title">
                <h3>Escolha os dias em que vai repetir a tarefa</h3>
            </div>
            <div className="repetition__container">
                <div className="repetition__content">
                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(7,repeatWeek.everyDay)}}>
                            {repeatWeek.everyDay &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.everyDay===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Todos os dias</div>
                    </div><br/>

                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(1,repeatWeek.mon)}}>
                            {repeatWeek.mon &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.mon===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Segunda</div>
                    </div><br/>

                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(2,repeatWeek.tue)}}>
                            {repeatWeek.tue &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.tue===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Terça</div>
                    </div><br/>

                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(3,repeatWeek.wed)}}>
                            {repeatWeek.wed &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.wed===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Quarta</div>
                    </div><br/>

                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(4,repeatWeek.thu)}}>
                            {repeatWeek.thu &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.thu===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Quinta</div>
                    </div><br/>

                    <div className="repetition__item" onClick={()=>{setWeekSelected(5,repeatWeek.fri)}}>
                        <div className="repetition__itemCheck">
                            {repeatWeek.fri &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.fri===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Sexta</div>
                    </div><br/>

                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(6,repeatWeek.sat)}}>
                            {repeatWeek.sat &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.sat===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Sabado</div>
                    </div><br/>

                    <div className="repetition__item">
                        <div className="repetition__itemCheck" onClick={()=>{setWeekSelected(0,repeatWeek.sun)}}>
                            {repeatWeek.sun &&
                                <img src={checkIcon} alt="icon"/>
                            }

                            {repeatWeek.sun===false &&
                                <img src={checkEmptyIcon} alt="icon"/>
                            }
                        </div>
                        <div className="repetition__itemText">Domingo</div>
                    </div><br/>
                </div>
            </div>
            <div className="repetition__footer">
                <div className="repetition__btn" onClick={()=>{sendRepeatDays()}}>Salvar</div>
            </div>
        </RepetitionDaysContainer>
    )
}

export default RepeatWeek;