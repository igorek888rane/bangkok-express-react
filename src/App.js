import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import {Context} from "./context";


function App() {
    const [modalActive, setModalActive] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [shake, setShake] = useState(false)
    const [modal, setModal] = useState({title: '', body: ''})


    return (
        <Context.Provider value={{
            cartItem,
            setCartItem,
            shake,
            setShake,
            setModalActive,
            modal,
            setModal
        }}>
            <div className='App'>
                <Header setActive={setModalActive}/>
                <Main/>
                {
                    modalActive
                        ? <Modal active={modalActive} setActive={setModalActive}/>
                        : null
                }
            </div>
        </Context.Provider>

    );
}

export default App;
