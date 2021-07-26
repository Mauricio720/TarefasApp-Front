import React,{useState,useRef} from 'react';
import {PageArea} from './styled.js';
import profileIcon from './../../../images/profile.png';
import {getUser,setUser,getConquest,getTotalSuccessTask} from './../../../helpers/AuthHandler';
import useApi from './../../../helpers/Api';
import Spinner from 'react-spinner-material';
import swal from 'sweetalert';


const MyProfile=()=>{
    const fileInputRef=useRef();
    const [edit,setEdit]=useState(false);
    const [name,setName]=useState(getUser().name);
    const [lastName,setLastName]=useState(getUser().lastName);
    const [login,setLogin]=useState(getUser().login);
    const [email,setEmail]=useState(getUser().email);
    const [password,setPassword]=useState("");
    const [profileImg,setProfileImg]=useState(getUser().profileImg);
    const [profileFile,setProfileFile]=useState([]);
    const [totalConquest,setTotalConquest]=useState(getUser().totalConquest);
    const [loading,setLoading]=useState(false);
    const api=useApi();


    const profileImgPreview=(e)=>{
        let img = e.target.files[0];
        let fileReader = new FileReader(); 
        fileReader.onload = function(e){ 
             setProfileImg(e.target.result);
        }
        fileReader.readAsDataURL(img);
        setProfileFile(img);
    }

    const updateUser=async (event)=>{
        setLoading(true);
        event.preventDefault();
        const formData=new FormData();
        formData.append('name',name);
        formData.append('lastName',lastName);
        formData.append('login',login);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('profileImg',profileFile);
        
        
        if(name,lastName,login,email){
            let json=await api.updateUser(formData);
            if(json.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
                setLoading(false);
            }else{
                setUser(json.user);
                window.location="/my_profile";
            }
            
        }else{
            swal({
                text: "Há campos obrigatórios em branco!",
                icon: "error",
            });
        }
    }

    return (
        <PageArea>
            <form className="myProfile__container" onSubmit={((e)=>{updateUser(e)})}>
                <div className="myProfile__img">
                    {edit &&
                        <img src={profileImg!=="" && profileImg!==null?profileImg:profileIcon} style={{cursor:'pointer'}} onClick={()=>{fileInputRef.current.click();}} alt="icon"/>
                    }
                    {edit===false &&
                        <img src={profileImg!=="" && profileImg!==null?profileImg:profileIcon} alt="icon"/>
                    }
                    <input 
                        type="file" 
                        style={{display:"none"}} 
                        ref={fileInputRef}
                        onChange={(event)=>{profileImgPreview(event)}}
                    />
                    
                </div>

                <div className="contentMyProfile__container">
                    <div className="contentMyProfile__container__sides">
                        <div className="myProfile__content">
                            <div className="myProfile__item">
                                <label>Nome</label>
                                {edit===false &&
                                    <div className="myProfile__itemText">{name}</div>
                                }

                                {edit &&
                                    <input autoFocus value={name} onChange={(e)=>{setName(e.target.value)}} className="myProfile__itemText"/>
                                }
                            </div>
                        </div>

                        <div className="myProfile__content">
                            <div className="myProfile__item">
                                <label>Sobrenome</label>
                                {edit===false &&
                                    <div className="myProfile__itemText">{lastName}</div>
                                }

                                {edit &&
                                    <input value={lastName!==null?lastName:''} onChange={(e)=>{setLastName(e.target.value)}} className="myProfile__itemText"/>
                                }
                            </div>
                        </div>
                    


                        <div className="myProfile__content">
                            <div className="myProfile__item">
                                <label>Login</label>
                                {edit===false &&
                                    <div className="myProfile__itemText">{login}</div>
                                }

                                {edit &&
                                    <input value={login} onChange={(e)=>{setLogin(e.target.value)}} className="myProfile__itemText"/>
                                }
                            </div>
                        </div>
                    </div>
                        
                
                    <div className="contentMyProfile__container__sides">
                        <div className="myProfile__content">
                            <div className="myProfile__item">
                                <label>Email</label>
                                {edit===false &&
                                    <div className="myProfile__itemText">{email}</div>
                                }

                                {edit &&
                                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="myProfile__itemText"/>
                                }
                            </div>
                        </div>

                        {edit &&        
                            <div className="myProfile__content">
                                <div className="myProfile__item">
                                    <label>Senha</label>
                                    <input type="password" value={password} placeholder="*************" onChange={(e)=>{setPassword(e.target.value)}} className="myProfile__itemText"/>
                                    
                                </div>
                            </div>
                        }

                        {edit===false &&
                            <div className="myProfile__content">
                                <div className="myProfile__item">
                                    <label>Conquistas Recebidas</label>
                                    <div className="myProfile__itemText">{getConquest()}</div>
                                </div>
                            </div>
                        }

                        {edit===false  &&
                        <div className="myProfile__content">
                            <div className="myProfile__item">
                                <label>Tarefas Concluidas</label>
                                <div className="myProfile__itemText">{getTotalSuccessTask()}</div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="myProfile__content myProfile__content--footer">
                    {loading===false &&
                        <button className="myProfile__btnEdit" onClick={(e)=>{e.preventDefault();setEdit(!edit)}}>{` ${edit?'Desabilitar Edição':'Editar Perfil'}`}</button>
                    }
                    {edit && loading===false &&
                        <input type="submit" value="Salvar" className="myProfile__btnEdit"/>
                    }

                    {loading &&
                        <Spinner size={120} color={"#333"} visible={true} />
                    }
                </div>
            </form>
        </PageArea>
    )
}

export default MyProfile;