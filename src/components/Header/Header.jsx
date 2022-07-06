import React, {useEffect, useRef,useState} from "react";
import CartIcon from "../CartIcon/CartIcon";


const Header = ({setActive,cartItem}) => {
    const containerRef = useRef()
    const refCart = useRef()


    const [positionCart,setPositionCart] = useState({position:'',top:'',zIndex:'',right:'',left:``})

    function updatePosition (initialTopCoordinate,containerPositionRight,CartWidth) {
        if(window.pageYOffset > initialTopCoordinate){
            let leftIndent = Math.min(
                containerPositionRight +20,
                document.documentElement.clientWidth - CartWidth - 10)
            setPositionCart({position:'fixed',top:'50px',zIndex:'100',right:'10px',left:`${leftIndent}px`})
        }else {
            setPositionCart({position:'',top:'',zIndex:'',right:'',left:``})
        }
        if(document.documentElement.clientWidth <= 767){
            setPositionCart({position:'',top:'',zIndex:'',right:'',left:``})
        }
    }

    useEffect(()=>{
        const initialTopCoordinate = refCart.current.getBoundingClientRect().top;
        const containerPositionRight = containerRef.current.getBoundingClientRect().right
        const CartWidth =  refCart.current.offsetWidth
        document.addEventListener("scroll", () => updatePosition(initialTopCoordinate,containerPositionRight,CartWidth));
        window.addEventListener("resize", () => updatePosition(initialTopCoordinate,containerPositionRight,CartWidth));

    },[containerRef,refCart])

    return (
    <header className="header container"  ref={containerRef}>
      <h1 className="heading logo">Bangkok Express</h1>
      <h3 className="subheading">Great food・Free delivery・Fair price</h3>
      <div>
          <CartIcon ref={refCart}
                    positionCart = {positionCart}
                    setActive ={setActive}
                    cartItem = {cartItem}/>
      </div>
    </header>
  );
};

export default Header;
