import React, {useContext} from 'react';
import style from './Modal.module.css'
import {Context} from "../../context";

const Modal = ({setActive}) => {

    document.onkeydown = (e) => {
        if (e.code === 'Escape') {
            setActive(false)
            document.body.className = ''
            document.onkeydown = null
        }
    }
    const {modal} = useContext(Context)
    return (
        <div className={style.modal}>
            <div className={style.modal__overlay} onClick={() => {
                document.body.className = ''
                setActive(false)
            }}></div>
            <div className={style.modal__inner} onClick={(e) => e.stopPropagation()}>
                <div className={style.modal__header}>
                    <button type="button" className={style.modal__close} onClick={() => {
                        document.body.className = ''
                        setActive(false)
                    }}>
                        <img src="https://course-jsbasic.javascript.ru/assets/icons/cross-icon.svg" alt="close-icon"/>
                    </button>
                    <h3 className={style.modal__title}>
                        {modal.title}
                    </h3>
                </div>
                <div className={style.modal__body}>
                    {modal.body}
                </div>
            </div>
        </div>
    );
};

export default Modal;