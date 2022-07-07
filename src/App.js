import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import {CartContext} from "./context";


function App() {
    const [modalActive, setModalActive] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [shake, setShake] = useState(false)


    return (
        <CartContext.Provider value={{
            cartItem,
            setCartItem,
            shake,
            setShake
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
        </CartContext.Provider>

    );
}

export default App;
