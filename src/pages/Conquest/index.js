import React,{useEffect, useState} from 'react';
import {PageArea} from './styled.js';
import conquestIcon from './../../images/trophy.png';
import useApi from './../../helpers/Api';

const Conquest=()=>{
    const api=useApi();
    const [allConquest,setAllConquest]=useState([]);

    useEffect(()=>{
        const getAllConquest=async ()=>{
            const json= await api.getConquest();
            setAllConquest(json.data[0]);
        }
        
        getAllConquest();
        
    },[]);
    console.log(allConquest);
    return (
        <PageArea>
             <h2>Conquistas</h2>
            <div className="conquest_content">
                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">1 Dia</div>
                    <div className="conquest__value">{allConquest.one_day}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">2 Dia</div>
                    <div className="conquest__value">{allConquest.two_day}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">3 Dia</div>
                    <div className="conquest__value">{allConquest.three_day}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">4 Dia</div>
                    <div className="conquest__value">{allConquest.four_day}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">5 Dia</div>
                    <div className="conquest__value">{allConquest.five_day}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">5 Dia</div>
                    <div className="conquest__value">{allConquest.six_day}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">1 Semana</div>
                    <div className="conquest__value">{allConquest.one_week}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">2 Semana</div>
                    <div className="conquest__value">{allConquest.two_week}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">3 Semana</div>
                    <div className="conquest__value">{allConquest.three_week}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">1 Mes</div>
                    <div className="conquest__value">{allConquest.one_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">2 Meses</div>
                    <div className="conquest__value">{allConquest.two_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">3 Meses</div>
                    <div className="conquest__value">{allConquest.three_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">4 Meses</div>
                    <div className="conquest__value">{allConquest.four_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">5 Meses</div>
                    <div className="conquest__value">{allConquest.five_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">6 Meses</div>
                    <div className="conquest__value">{allConquest.six_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">7 Meses</div>
                    <div className="conquest__value">{allConquest.seven_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">8 Meses</div>
                    <div className="conquest__value">{allConquest.eight_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">9 Meses</div>
                    <div className="conquest__value">{allConquest.nine_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">10 Meses</div>
                    <div className="conquest__value">{allConquest.ten_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">11 Meses</div>
                    <div className="conquest__value">{allConquest.eleven_month}</div>
                </div>

                <div className="conquest">
                    <div className="conquest__img">
                        <img src={conquestIcon} alt="icon"/>
                    </div>
                    <div className="conquest__description">1 Ano</div>
                    <div className="conquest__value">{allConquest.one_year}</div>
                </div>
                
            </div>
        </PageArea>
    )
}

export default Conquest;