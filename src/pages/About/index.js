import React from 'react';
import {PageArea} from './styled.js';


const About=()=>{
    return (
        <PageArea>
            <div className="blockInfo">
                <div className="blockInfo__block">
                    <h3>Desenvolvedor</h3>
                    <div className="blockInfo__content">
                        <div className="blockInfo__info">
                            <div className="blockInfo__item blockInfo__item--lbl">Nome:</div>
                            <div className="blockInfo__item">Mauricio Ferreira</div>
                        </div>

                        <div className="blockInfo__info">
                            <div className="blockInfo__item blockInfo__item--lbl">Email:</div>
                            <div className="blockInfo__item">mauricio-ferreira2015@outlook.com</div>
                        </div>
                    </div>
                </div>

                <div className="blockInfo__block">
                    <h3>Design</h3>
                    <div className="blockInfo__content">
                        <div className="blockInfo__info">
                            <div className="blockInfo__item blockInfo__item--lbl">Nome:</div>
                            <div className="blockInfo__item">Samuel Santos de Souza</div>
                        </div>

                        <div className="blockInfo__info">
                            <div className="blockInfo__item blockInfo__item--lbl">Email:</div>
                            <div className="blockInfo__item">santo.samu.samuel@gmail.com</div>
                        </div>
                    </div>
                </div>

                <div className="blockInfo__block">
                    <h3>Icones</h3>
                    <div className="blockInfo__content">
                        <div className="blockInfo__item"> <label>Icons made by</label> <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <div className="blockInfo__item">Icons made by <a href="" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        
                    </div>
                </div>
            </div>
        </PageArea>
    );
}

export default About;


/*<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/