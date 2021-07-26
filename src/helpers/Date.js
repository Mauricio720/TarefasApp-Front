import moment from 'moment'

export const date_default=(date)=>{
    let month=date.getMonth()+1;
    if(month < 10){
        month="0"+month;
    }

    let day=date.getDate();
    if(day < 10){
        day="0"+day;
    }

    let fullDate=date.getFullYear()+"-"+month+"-"+day;

    return fullDate;
}

export const date_ptBR=(date)=>{
    let month=date.getMonth()+1;
    if(month < 10){
        month="0"+month;
    }

    let day=date.getDate();
    if(day < 10){
        day="0"+day;
    }

    let fullDate=day+"/"+month+"/"+date.getFullYear();

    return fullDate;
}

export const convertDate_ptBR=(date)=>{
    let divideDate=date.split('-');
    let year=divideDate[0];
    let month=divideDate[1];
    let day=divideDate[2];
    
    let fullDate=day+"/"+month+"/"+year;

    return fullDate;
}


export const date_today=()=>{
    let date=new Date();
    
    let month=date.getMonth()+1;
    if(month < 10){
        month="0"+month;
    }
    let day=date.getDate();
    if(day < 10){
        day="0"+day;
    }

    let fullDate=date.getFullYear()+"-"+month+"-"+day;

    return fullDate;
}

export const weekDayToday=()=>{
    let date=new Date();
    return date.getDay();
}

export const dateByDays=(days,increase=true)=>{
    let date=new Date();
    
    let dateConvert=increase? date.setDate(date.getDate() + days):date.setDate(date.getDate() - days); 
    let newDate=new Date(dateConvert);
    let month=newDate.getMonth()+1;
    
    if(month < 10){
        month="0"+month;
    }
    
    let day=newDate.getDate();
    if(day < 10){
        day="0"+day;
    }

    let fullDate=newDate.getFullYear()+"-"+month+"-"+day;

    return fullDate; 
}

export const verifyDateInPast=(date)=> {
    date = stripTime(date);
    return date.diff(stripTime(moment.now())) >= 0;
}

function stripTime(date){
    date = moment(date);
    date.hours(0);
    date.minutes(0);
    date.seconds(0);
    date.milliseconds(0);
    return date;
  }