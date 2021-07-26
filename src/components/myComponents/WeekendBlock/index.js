import React,{useState} from 'react';
import {WeekendContainer} from './styled.js';
import {weekDayToday,dateByDays} from './../../../helpers/Date';

const WeekendBlock=(props)=>{
    
    const getDatesOfWeek=()=>{
        let datesWeek=[];
        let todayWeek=weekDayToday();
        let restWeek=7-todayWeek;

        for (let index = 0; index <= todayWeek; index++){
            datesWeek.push(dateByDays(index,false));
        }

        for (let index2 = 1; index2 < restWeek; index2++){
            datesWeek.push(dateByDays(index2));
        }
        
        let newDatesWeek = datesWeek.filter(function(elem, pos, self) {
            return self.indexOf(elem) == pos;
        })

        return newDatesWeek.sort();
    }
    const [dateWeek,setDatesWeek]=useState(getDatesOfWeek());
    const [selectedDay,setSelectedDay]=useState(weekDayToday());
   
    const changeDateOnClick=(dayWeek)=>{
        props.getDate(dateWeek[dayWeek]);
        props.getWeekNumber(dayWeek);
        setSelectedDay(dayWeek);
    }

    return (
        <WeekendContainer width={props.width}>
            <div className={`weekend__item ${selectedDay===0 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(0)}}>Dom</div>
            <div className={`weekend__item ${selectedDay===1 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(1)}}>Seg</div>
            <div className={`weekend__item ${selectedDay===2 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(2)}}>Terc</div>
            <div className={`weekend__item ${selectedDay===3 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(3)}}>Qua</div>
            <div className={`weekend__item ${selectedDay===4 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(4)}}>Qui</div>
            <div className={`weekend__item ${selectedDay===5 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(5)}}>Sex</div>
            <div className={`weekend__item ${selectedDay===6 ?'week__selected' : ''}`} onClick={()=>{changeDateOnClick(6)}}>Sab</div>
           
        </WeekendContainer>
    )
}

export default WeekendBlock;