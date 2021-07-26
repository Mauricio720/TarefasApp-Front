import React,{useState,useEffect,useRef} from 'react';
import {PageArea,Loading} from './styled.js';
import loupe from './../../images/loupe.png';
import addTask from './../../images/addTask.png';
import typeTaskIcon from './../../images/typeTask.png';
import calendarIcon from './../../images/calendar.png';
import Card from './../../components/myComponents/Card';
import Modal from './../../components/myComponents/Modal';
import "react-datepicker/dist/react-datepicker.css";
import WeekendBlock from './../../components/myComponents/WeekendBlock'
import 'react-calendar/dist/Calendar.css';
import useApi from './../../helpers/Api';
import DatePicker from "react-datepicker";
import {date_default,date_today,convertDate_ptBR,weekDayToday} from './../../helpers/Date';
import Spinner from 'react-spinner-material';
import Calendar from 'react-calendar';
import swal from 'sweetalert';

const Home=()=>{
    const fileInputRef=useRef();
    const [loading,setLoading]=useState(true);
    const weekList=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    const [visibleModal,setVisibleModal]=useState(false);
    const [visibleCalendar,setVisibleCalendar]=useState(false);
    const [filterTask,setFilterTask]=useState(1);
    const [filterType,setFilterType]=useState(0);
    const [title,setTitle]=useState("");
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    const [date,setDate]=useState(new Date());
    const [dateMonth,setDateMonth]=useState(date_today());
    const [importance,setImportance]=useState(1);
    const [description,setDescription]=useState("");
    const [tasks,setTasks]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [week,setWeek]=useState("");
    const [generalDate,setGeneralDate]=useState(date_today());
    const weekNames=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    const [weekNumber,setWeekNumber]=useState(weekDayToday());
    const api=useApi();
    const [taskImgPreview,setTaskImgPreview]=useState(typeTaskIcon);
    const [taskImgFile,setTaskImgFile]=useState([]);

    
    useEffect(()=>{
        setWeek(date.getDay());
    },[date]);

    useEffect(()=>{
       setGeneralDate(date_today());
       setWeekNumber(weekDayToday()); 
    },[filterTask])
    
    useEffect(()=>{
        setDateMonth(dateMonth);
    },[dateMonth])

    useEffect(()=>{ 
        const searchTask=async ()=>{
            const json=await api.getTasks(searchText,filterType,generalDate);
            let filterTask=[...json.data];
            setTasks(filterTask);
            setLoading(false);
        }
        
        searchTask();
    },[searchText,filterType,generalDate])
    
  
    const addTaskSubmit=async (event)=>{
        setLoading(true);
        event.preventDefault();
      
        const formData=new FormData();
        formData.append('title',title);
        formData.append('start',start);
        formData.append('end',end);
        formData.append('date',date_default(date));
        formData.append('importance',importance);
        formData.append('description',description);
        formData.append('taskImgFile',taskImgFile);

        let json=await api.addTask(formData);
        if(json.error){
            swal({
                text: json.error,
                icon: "error",
            });
            setLoading(false);
        }else{
            setLoading(false);
            swal({
                text: "Tarefa adicionada com sucesso!!!",
                icon: "success",
            })
            .then((value) => {
                if(value){
                    window.location='/';
                }
            });
        }
    
    }

    const setDateByCalendar=(date)=>{
        let dateCalendar=date_default(date);
        setGeneralDate(dateCalendar);
        setVisibleCalendar(false);
        setWeekNumber(date.getDay());
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
            {loading &&
                <Loading >
                    <Spinner size={120} spinnercolor={"#333"} visible={true} />
                </Loading>
            }

            {loading===false &&
            <PageArea>
            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <form className="formAdd" onSubmit={addTaskSubmit}>
                    <div className="formAdd__title">
                        <h2>Adicionar Tarefa</h2>
                    </div>
                    <div className="formAdd__content">
                        <div className="formAdd__contentLeft">
                            <div className="home__inputs">
                                <div className="input__group" >
                                    <label>Titulo</label>
                                    <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="home__inputs home__inputs--desktop">
                                <div className="input__group input__group--md">
                                    <label>Inicio</label>
                                    <input value={start} onChange={(e)=>{setStart(e.target.value)}} type="time"/>
                                </div>
                                <div className="input__group input__group--md">
                                    <label>Termino</label>
                                    <input value={end} onChange={(e)=>{setEnd(e.target.value)}} type="time"/>
                                </div>
                            </div>

                            <div className="home__inputs--mobile">
                                <div className="home__inputs">
                                    <div className="input__group">
                                        <label>Inicio</label>
                                        <input value={start} onChange={(e)=>{setStart(e.target.value)}} type="time"/>
                                    </div>
                                </div>

                                <div className="home__inputs">
                                    <div className="input__group">
                                        <label>Termino</label>
                                        <input value={end} onChange={(e)=>{setEnd(e.target.value)}} type="time"/>
                                    </div>
                                </div>
                            </div>

                            <div className="home__inputs">
                                <div className="input__group">
                                    <label>Importância:</label>
                                    <select value={importance} onChange={(e)=>{setImportance(e.target.value)}}>
                                        <option value="1">Importante</option>
                                        <option value="2">Muito Importante</option>
                                        <option value="3">Razoavel</option>
                                    </select>
                                </div>
                            </div>

                            <div className="home__inputs">
                                <div className="input__group">
                                    <label>Descrição:</label>
                                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                                </div>
                            </div>
                        </div>

                        <div className="formAdd__contentRight">
                            <div className="home__inputs">
                                <div className="input__group">
                                    <div className="addTaskImg" onClick={()=>{fileInputRef.current.click();}}>
                                        <label>Selecionar Icone</label>
                                        <img src={taskImgPreview} alt="icon"/>
                                        <input 
                                            type="file" 
                                            style={{display:"none"}} 
                                            ref={fileInputRef}
                                            onChange={(event)=>{renderTaskImgPreview(event)}}
                                            
                                    />
                                    </div> 
                                 </div>   
                            </div><br/><br/><br/>
                            
                            <div className="home__inputs">
                                <div className="input__group">
                                <label>Data</label>
                                    <DatePicker 
                                        selected={date} 
                                        onChange={date=>setDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                    />   
                                </div>   
                            </div>
                            
                            <div className="home__inputs">
                                <div className="input__group">
                                    <label>Dia Semana</label>
                                    <input value={weekList[week]} disabled/>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="home__inputs">
                        <div className="input__group">
                            <input type="submit" className="btnSubmit" value="Cadastrar"/>
                        </div>
                    </div>
                </form>
            </Modal>

            
            <Modal visible={visibleCalendar} setVisible={setVisibleCalendar}>
                <Calendar
                    onClickDay={(date, event) => setDateByCalendar(date)}
                />
            </Modal>
            
            <div className="home__searchArea">
                <input value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} className="home__search" placeholder="Pesquisar..."/>
                <img src={loupe} alt="icon"/>
            </div>

            <div className="home__header">
                <div className="home__addTask" onClick={()=>{setVisibleModal(!visibleModal)}}>
                    <div className="addTask__icon">
                        <img src={addTask} alt="icon"/>
                    </div>
                    <span>Agendar Nova Tarefa</span>
                </div>

                <div className="home__addTask--mobile" onClick={()=>{setVisibleModal(!visibleModal)}}>
                    <div className="addTask__icon">
                        <img src={addTask} alt="icon"/>
                    </div>
                </div>
                
                {filterTask===3 &&
                    <div onClick={()=>{setVisibleCalendar(!visibleCalendar)}} className="home__addTask">
                        <div className="addTask__icon">
                            <img src={calendarIcon} alt="icon"/>
                        </div>
                        <span>Escolha uma data</span>
                    </div>
                }

                    {filterTask===3 &&
                    <div onClick={()=>{setVisibleCalendar(!visibleCalendar)}} className="home__addTask home__addTask--monthMobile">
                        <div className="addTask__icon">
                            <img src={calendarIcon} alt="icon"/>
                        </div>
                    </div>
                }

                <div className="home__container">
                    <div className="home__inputs">
                        <div className="input__group">
                            <label>Filtrar Tarefas Por:</label>
                            <select value={filterType} onChange={(e)=>{setFilterType(e.target.value)}}>
                                <option value="0">Todas</option>
                                <option value="1">Importante</option>
                                <option value="2">Muito Importante</option>
                                <option value="3">Razoavel</option>
                                <option value="4">Concluido</option>
                                <option value="5">Sem Concluir</option>
                            </select>
                        </div>

                        <div className="input__group">
                            <label>Filtrar Tarefas Por:</label>
                            <select onChange={(e)=>{setFilterTask(parseInt(e.target.value))}}>
                                <option value="1">Dia Atual</option>
                                <option value="2">Semana Atual</option>
                                <option value="3">Mês</option>
                            </select>
                        </div>
                    </div>

                    {filterTask===2  &&
                        <div className="home__inputs">
                            <div className="input__group">
                                <label>Data:</label>
                                <input value={convertDate_ptBR(generalDate)} disabled/>
                            </div>

                            <div className="input__group">
                                <label>Dia Semana:</label>
                                <input value={weekNames[weekNumber]} disabled/>
                            </div>
                        </div>
                    }

                    {filterTask===3 &&
                        <div className="home__inputs">
                             <div className="input__group">
                                <label>Data:</label>
                                <input value={convertDate_ptBR(generalDate)} disabled/>
                            </div>

                            <div className="input__group">
                                <label>Dia Semana:</label>
                                <input value={weekNames[weekNumber]} disabled/>
                            </div>
                        </div>
                    }
                </div>
            </div>
            
            {filterTask===1 &&
                <div className="home__title">
                    <h3>Tarefas de Hoje</h3>
                </div>
            }

            {filterTask===2 &&
                <div className="weekContainer">
                    <WeekendBlock width="920" getDate={setGeneralDate} getWeekNumber={setWeekNumber}/>
                </div>
            }
           
            <div className="cardTasks__container">
                {tasks.length === 0 &&
                    <h2 className="emptyTask">Nenhuma Tarefa para hoje.</h2>
                }
                {tasks.map((item,key)=>{
                    return ( 
                    <Card 
                        id={item.id}
                        key={item.id} 
                        title={item.title} 
                        start={item.start}
                        end={item.end} 
                        description={item.description}
                        date={item.date}
                        selected={item.selected}
                        importance={item.importance}
                        img={item.task_path}
                        infoRepeat={item.infoRepeat}
                    />
                    )
                })

                }
            </div>
            </PageArea>
        }
        </>
    );
}

export default Home;