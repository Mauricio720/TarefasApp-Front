import React from 'react';
import {HeaderContainer} from './styled.js';
import {Link} from 'react-router-dom';
import profileIcon from './../../../images/profile.png';
import homeIcon from './../../../images/home.png';
import userIcon from './../../../images/user.png';
import medalIcon from './../../../images/medal.png';
import targetIcon from './../../../images/target.png';
import aboutIcon from './../../../images/about.png';
import exitIcon from './../../../images/exit.png';
import { doLogout,getUser} from '../../../helpers/AuthHandler.js';
import useApi from './../../../helpers/Api'


const Headers=(props)=>{
    const api=useApi();
    console.log(getUser().profileImg);
    const setVisible=()=>{
        props.setVisibleHeaderOutside(false);
    }
 
    const logout=async()=>{
        let json= await api.logout();
        if(json.error===""){
            doLogout();
            window.location="/";
        }
    }

    return(
        <HeaderContainer visible={props.visibleHeader}>
            <div className="header__close" onClick={()=>{setVisible(false)}}>
                X
            </div>
            <div className="header__content">
                <Link to="/" className="profile__container">
                    <div className="profile__picture">
                        <img src={getUser().profileImg===null 
                            || getUser().profileImg===""?profileIcon:getUser().profileImg} alt="icon"/>
                    </div>
                    <div className="profile__name">
                        {getUser().name}
                    </div>
                </Link>

                <ul>
                    <li>
                        <Link to="">
                            <div className="menu__icon">
                                <img src={homeIcon} alt="icon"/>
                            </div>
                            <div>Inicio</div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/my_profile">
                            <div className="menu__icon">
                                <img src={userIcon} alt="icon"/>
                            </div>
                            <div>Meu Perfil</div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/conquests">
                            <div className="menu__icon">
                                <img src={medalIcon} alt="icon"/>
                            </div>
                            <div>Conquistas</div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/objective">
                            <div className="menu__icon">
                                <img src={targetIcon} alt="icon"/>
                            </div>
                            <div>Objetivos</div>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/about">
                            <div className="menu__icon">
                                <img src={aboutIcon} alt="icon"/>
                            </div>
                            <div>Sobre</div>
                        </Link>
                    </li>

                   
                    <li>
                        <div className="item_li" onClick={()=>{logout();}}>
                            <div className="menu__icon">
                                <img src={exitIcon} alt="icon"/>
                            </div>
                            <div>Sair</div>
                        </div>
                    </li>
                </ul>
            </div>
        </HeaderContainer>
    )
}

export default Headers;