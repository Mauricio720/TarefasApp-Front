import Cookies from 'js-cookie';
import qs from 'qs';
import {getUser} from './../helpers/AuthHandler';

const BASEAPI='http://192.168.15.68:8000/api/';

const verifyToken=(body,fetchFile=false)=>{
    var token="";
    if(!body.token){
        token=Cookies.get('token-taskApp');
        if(token){
            if(fetchFile){
                body.append('token',token);
            }else{
                body.token=token
            }
        }
    }
}

const apiFetchFile= async (endpoint,body)=>{
    verifyToken(body,true);
    
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        body        
    });

    const json= await res.json();

    if(json.notallowed){
        window.location.href="/login";
        return;
    }

    return json;
}

const apiFetchPost=async (endpoint,body)=>{
    verifyToken(body);
    
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    });

    const json= await res.json();

    if(json.notallowed){
        window.location.href="/login";
        return;
    }

    return json;
}

const apiFetchGet=async (endpoint,body=[])=>{
    verifyToken(body);
    
    const res=await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`)
    const json= await res.json();

    if(json.notallowed){
        window.location.href="/login";
        return;
    }

    return json;
}

const Api={
    addUser: async (user)=>{
        let json= await apiFetchFile('auth/add_user',user);
        return json;
    },

    updateUser: async (user)=>{
        let json= await apiFetchFile('update_user',user);
        return json;
    },

    login: async (login=null,password=null,responseFacebook=null,responseGoogle=null)=>{
        let json= await apiFetchPost('auth/login',{login,password,responseFacebook,responseGoogle});
        return json;
    },

    logout: async ()=>{
        let json=await apiFetchPost('auth/logout',{});
        return json;
    },

    getUser:async ()=>{
        let json=await apiFetchPost('auth/get_user',{});
        return json;
    },

    verifyTokenRememberPass:async (tokenPassword)=>{
        let json=await apiFetchPost('verifyTokenRememberPass',{tokenPassword});
        return json;
    },

    forgotPassword:async (email)=>{
        let json=await apiFetchPost('forgot_password',{email});
        return json;
    },

    changePass:async (newPass,tokenPassword)=>{
        let json=await apiFetchPost('changePass',{newPass,tokenPassword});
        return json;
    },

    getTasks:async (filterTitle,filterType,filterDate)=>{
        let json=await apiFetchGet('get_task/'+getUser().id,{filterTitle,filterType,filterDate});
        return json;
    },

    addTask:async (task)=>{
        let json=await apiFetchFile('add_task/'+getUser().id,task);
        return json;
    },

    updateTask:async (task)=>{
        let json=await apiFetchFile('update_task/'+getUser().id,task);
        return json;
    },

    changeSelectedTask:async (id)=>{
        let json=await apiFetchPost('change_selected_task/'+id+"/"+getUser().id,{});
        return json;
    },

    deleteTask:async (id)=>{
        let json=await apiFetchPost('delete_task/'+id+"/"+getUser().id,{});
        return json;
    },

    getConquest:async ()=>{
        let json=await apiFetchGet('getConquest/'+getUser().id,{});
        return json;
    },

    sendRepeatDays:async (id,daysRepeat)=>{
        let json=await apiFetchPost('send_daysRepeat/'+getUser().id,{id,daysRepeat});
        return json;
    },

    getObjectives:async ()=>{
        let json=await apiFetchGet('get_objective/'+getUser().id);
        return json;
    },

    addObjective:async (objective)=>{
        let json=await apiFetchPost('add_objective/'+getUser().id,objective);
        return json;
    },

    updateObjective:async (objective)=>{
        let json=await apiFetchPost('update_objective/'+getUser().id,objective);
        return json;
    },

    deleteObjective:async (id)=>{
        let json=await apiFetchPost('delete_objective/',{id});
        return json;
    },
    
    changeSelectedObjective:async (id)=>{
        let json=await apiFetchPost('change_selected_objective/'+id+"/"+getUser().id,{});
        return json;
    },

    
}

export default ()=>Api; 