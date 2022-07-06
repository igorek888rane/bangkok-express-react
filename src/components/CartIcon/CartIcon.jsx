import React from 'react';
import style from './CartIcon.module.css'

const CartIcon = React.forwardRef(({positionCart,setActive,cartItem}, ref) => {
    // let totalPrice = cartItem.reduce((sum,current) =>sum + current )

    return (
        <div onClick={()=> {
            document.body.className = 'is-modal-open'
            setActive(true)
        }}
            ref={ref}
            style={positionCart}
            className={cartItem.length ?`${style.cart_icon} ${style.cart_icon_visible}`:`${style.cart_icon}`}>
            <div  className={style.cart_icon__inner}>
                <span className={style.cart_icon__count}>{cartItem.length}</span>
                <span className={style.cart_icon__price}></span>
            </div>
        </div>
    );
});

export default CartIcon;


