import React, {useEffect, useRef, useState} from "react";
import CartIcon from "../CartIcon/CartIcon";
import {updatePosition} from "../../utils/updatePositionCart";


const Header = ({setActive}) => {
    const containerRef = useRef()
    const refCart = useRef()

    const [positionCart, setPositionCart] = useState({position: '', top: '', zIndex: '', right: '', left: ``})

    useEffect(() => {
        const initialTopCoordinate = refCart.current.getBoundingClientRect().top;
        const containerPositionRight = containerRef.current.getBoundingClientRect().right
        const CartWidth = refCart.current.offsetWidth
        document.addEventListener("scroll", () => updatePosition(initialTopCoordinate, containerPositionRight, CartWidth, setPositionCart));
        window.addEventListener("resize", () => updatePosition(initialTopCoordinate, containerPositionRight, CartWidth, setPositionCart));

    }, [containerRef, refCart])

    return (
        <header className="header container" ref={containerRef}>
            <h1 className="heading logo">Bangkok Express</h1>
            <h3 className="subheading">Great food・Free delivery・Fair price</h3>
            <div>
                <CartIcon ref={refCart}
                          positionCart={positionCart}
                          setActive={setActive}/>
            </div>
        </header>
    );
};

export default Header;
