import React,{useState,useEffect} from 'react';
import {PageArea} from './styled.js';
import {useParams} from 'react-router-dom';
import useApi from '../../helpers/Api.js';
import Spinner from 'react-spinner-material';
import swal from 'sweetalert';

const RememberPass=()=>{
    const {tokenPass}=useParams();
    const [tokenValid,setTokenValid]=useState(false);
    const [loading,setLoading]=useState(true);
    const api=useApi();

    useEffect(()=>{
        const verifyTokenRememberPass=async ()=>{
            let json=await api.verifyTokenRememberPass(tokenPass);
            if(json.there_is){
                setTokenValid(true);
            }

            setLoading(false);
        }

        verifyTokenRememberPass();
    },[]);

    const [newPass,setNewPass]=useState("");
    const [confirmNewPass,setConfirmNewPass]=useState("");

    const sendNewPass=async (e)=>{
        e.preventDefault();

        if(newPass===confirmNewPass){
            let json=await api.changePass(newPass,tokenPass);
            if(json.error){
                swal({
                    text: json.error,
                    icon: "error",
                });
            }else{
                window.location="/login";
            }
        }else{
            swal({
                text: "O confirmar nova senha tem que ser igual ao nova senha!",
                icon: "error",
            });
        }
    }

    return (
        <PageArea>
            {loading &&
                <Spinner size={120} spinnercolor={"#fffff"} visible={true} />
            }

            {tokenValid && loading===false &&
                <div className="containerRememberPass">
                    <h2>Mudança de Senha</h2>
                    <form className="formRememberPass" onSubmit={(e)=>{sendNewPass(e)}}>
                        <div className="input__group">
                            <label>Nova Senha:</label>
                            <input type="password" value={newPass} 
                                onChange={(e)=>{setNewPass(e.target.value)}}/>
                        </div>

                        <div className="input__group">
                            <label>Confirme A Nova Senha:</label>
                            <input type="password" value={confirmNewPass} 
                                onChange={(e)=>{setConfirmNewPass(e.target.value)}}/>
                        </div>

                        <div className="input__group">
                            <input className="btnSubmit" type="submit" value="Confirmar"/>
                        </div>
                    </form>
                </div>
            }

            {tokenValid===false && loading===false &&
                <h1>LINK INVÁLIDO</h1>
            }
        </PageArea>
    );
}

export default RememberPass;
