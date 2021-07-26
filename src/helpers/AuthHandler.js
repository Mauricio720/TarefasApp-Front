import Cookies from 'js-cookie';

export const doLogin=(token)=>{
    Cookies.set('token-taskApp',token);
}

export const setUser=(user)=>{
    Cookies.set('user-taskApp',JSON.stringify(user));
}

export const setConquest=(number)=>{
    Cookies.set('conquest-taskApp',number);
}

export const getConquest=()=>{
    return Cookies.get('conquest-taskApp');
}

export const setTotalSuccessTask=(number)=>{
    Cookies.set('totalSuccessTask-task',number);
}

export const getTotalSuccessTask=()=>{
    return Cookies.get('totalSuccessTask-task');
}

export const getUser=()=>{
    let user=[];
    if(Cookies.get('user-taskApp')){
        user=JSON.parse(Cookies.get('user-taskApp'));
    }
    return user;
}

export const isLogged=()=>{
    let token=Cookies.get('token-taskApp');
    let user=Cookies.get('user-taskApp');
   
    return (token && user) ? true:false;
}

export const doLogout=async ()=>{
    Cookies.remove('user-taskApp');
    Cookies.remove('token-taskApp');
    Cookies.remove('task-totalSuccessTask');
    Cookies.remove('conquest-taskApp');
}