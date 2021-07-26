import React from 'react';
import {ModalContainer} from './styled.js';

const Modal=(props)=>{
    return (
        <>
        {props.visible &&
            <ModalContainer>
                <div className="modal__content">
                    <div className="modal__close" onClick={()=>{props.setVisible(false)}}>X</div>
                    {props.children}
                </div>
            </ModalContainer>
        }
        </>
    )
}

export default Modal;