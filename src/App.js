import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";


function App() {
    const [modalActive, setModalActive] = useState(false)
    const [cartItem, setCartItem] = useState([])

    return (
        <div className='App'>
            <Header setActive={setModalActive} cartItem = {cartItem}/>
            <Main cartItem ={cartItem} setCartItem = {setCartItem} />
            {
                modalActive
                    ? <Modal active={modalActive} setActive={setModalActive} />
                    : null
            }

        </div>

    );
}

export default App;
