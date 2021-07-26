import React,{useEffect, useState} from 'react';
import {PageArea} from './styled.js';
import logo from './../../images/Logo.jpg';
import userIcon from './../../images/user.png';
import passIcon from './../../images/key.png';
import googleIcon from './../../images/google.png';
import facebookIcon from './../../images/facebook.png';
import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import useApi from './../../helpers/Api';
import {doLogin,setUser,setConquest,setTotalSuccessTask} from './../../helpers/AuthHandler';
import swal from 'sweetalert';
import Spinner from 'react-spinner-material';
import Modal from './../../components/myComponents/Modal';


const Login=()=>{
    const api=useApi();
    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const [responseFacebook,setResponseFacebook]=useState("");
    const [responseGoogle,setResponseGoogle]=useState("");
    const [loading,setLoading]=useState(false);
    const [firstLoadFacebook,setFirstLoadFacebook]=useState(true);
    const [visibleModal,setVisibleModal]=useState(false);
    const [emailPassword,setEmailPassword]=useState("");

    useEffect(()=>{
        const loginFacebook=async()=>{
            setLoading(true);
            let json=await api.login(null,null,responseFacebook,null);
            if(json.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
            }else{
                doLogin(json.token);
                
                let userInfo=await api.getUser();
                if(userInfo.error){
                    swal({
                        text: json.error,
                        icon: "error",
                    });
                    setLoading(false);
                }else{
                    setUser(userInfo.user);
                    setConquest(userInfo.totalConquest);
                    setTotalSuccessTask(userInfo.taskSuccess);
                    window.location="/";
                }
            }
        }
        if(firstLoadFacebook===false){
            loginFacebook();
        }

        setFirstLoadFacebook(false);
        
    },[responseFacebook])

    useEffect(()=>{
        const loginGoogle=async()=>{
            setLoading(true);
            let json=await api.login(null,null,null,responseGoogle);
            if(json.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
                setLoading(false);
            }else{
                doLogin(json.token);
                
                let userInfo=await api.getUser();
                if(userInfo.error){
                    swal({
                        text: json.error,
                        icon: "error",
                    });
                    setLoading(false);
                }else{
                    setUser(userInfo.user);
                    setConquest(userInfo.totalConquest);
                    setTotalSuccessTask(userInfo.taskSuccess);
                    window.location="/";
                }
            }
        }
        
        if(responseGoogle){
            loginGoogle();
        }

    },[responseGoogle])
   
    const loginSubmit=async (e)=>{
        e.preventDefault();
        setLoading(true);
        let json=await api.login(login,password);
        if(json.error){
            swal({
                text: json.error,
                icon: "error",
            });
            setLoading(false);
        }else{
            doLogin(json.token);
            let userInfo=await api.getUser();
            if(userInfo.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
                
                setLoading(false);
            }else{
                setUser(userInfo.user);
                setConquest(userInfo.totalConquest);
                setTotalSuccessTask(userInfo.taskSuccess);
                
                window.location="/";
            }
        }
    }

    const sendEmailForgotPass=async (e)=>{
        e.preventDefault();
        setLoading(true);
        let json=await api.forgotPassword(emailPassword);

        if(json.error){
            swal({
                text: json.error,
                icon: "error",
            });
            
            setLoading(false);
        }else{
            swal({
                title:'Solicitação enviada com sucesso',
                text: "Acesse seu email e clique no link para recuperar a senha.",
                icon: "success",
            })
            .then((value) => {
                if(value){
                    window.location='/';
                }
            });
        }
    }

    return (
        <PageArea>
             <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <h2>Recuperação de Senha</h2>
                <form className="form_forgotPassword" onSubmit={(e)=>{sendEmailForgotPass(e)}}>
                    <div className="input__group">
                        <input type="email" value={emailPassword}  
                            onChange={(e)=>{setEmailPassword(e.target.value)}}
                            placeholder="Digite seu email"/>
                    </div>
                    <div className="input__group">
                        <input type="submit" className="btnSubmitForgotPass"/>
                    </div>
                </form>
             </Modal>
            <div className="login__container">
                <div className="login__logoContainer">
                    <img src={logo} alt="icon"/>
                </div>

                <div className="login__content">
                    <h1>Login</h1>
                    <h2>Login</h2>
                    <form onSubmit={(e)=>{loginSubmit(e)}}>
                        <div className="input_group">
                            <div className="input_group__icon">
                                <img src={userIcon} alt="icon"/>
                            </div>
                            <input value={login} type="text" onChange={(e)=>{setLogin(e.target.value)}}/>
                        </div><br/>

                        <div className="input_group">
                            <div className="input_group__icon">
                                <img src={passIcon} alt="icon"/>
                            </div>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
                        </div>

                        <div className="input_group input_group--footer">
                            <div onClick={()=>{setVisibleModal(!visibleModal)}}>Esqueci a senha</div>
                            {loading &&
                                 <Spinner size={120} color={"#FFF"} visible={true} />
                            }
                            {loading==false &&
                                <input type="submit" value="Entrar" className="btnSubmit"/>
                            }
                            
                        </div>
                    </form>
                </div>
                <div className="login__registers">
                    <GoogleLogin
                        clientId="740765700687-lte4pdqrc1rrqa1nsd4c27qmd3jlevmm.apps.googleusercontent.com"
                        render={renderProps => (
                            <div onClick={renderProps.onClick} className="registers__item">
                                    <div className="registers__icon">
                                        <img src={googleIcon} alt="icon"/>
                                    </div>
                                    Login com Google
                                </div>
                        )}
                        autoLoad={false}
                        onSuccess={setResponseGoogle}
                        
                    />
                    
                   <FacebookLogin
                        appId="342167400862475"
                        fields="name,email,picture"
                        callback={setResponseFacebook}
                        render={renderProps => (
                            <div onClick={renderProps.onClick}className="registers__item">
                                <div className="registers__icon">
                                    <img src={facebookIcon} alt="icon"/>
                                </div>
                                Login com Facebook
                            </div>
                        )}
                        
                    />
                  
                </div>

                <Link to="first_user" className="register__btn">Não tem uma conta? Cadastre-se</Link>
            </div>
        </PageArea>
    )
}

export default Login;