import React, {useContext} from 'react';
import style from './CartIcon.module.css'
import {getTotalCount, getTotalPrice} from "../../utils/productCart";
import {CartContext} from "../../context";

const CartIcon = React.forwardRef(({positionCart, setActive}, ref) => {

    const {cartItem, shake} = useContext(CartContext)

    return (
        <div onClick={() => {
            document.body.className = 'is-modal-open'
            setActive(true)
        }}
             ref={ref}
             style={positionCart}
             className={cartItem.length ? `${style.cart_icon} ${style.cart_icon_visible} ${shake ? `${style.shake}` : ''}` : `${style.cart_icon}`}>
            <div className={style.cart_icon__inner}>
                <span className={style.cart_icon__count}>{getTotalCount(cartItem)}</span>
                <span className={style.cart_icon__price}>{`€${getTotalPrice(cartItem).toFixed(2)}`}</span>
            </div>
        </div>
    );
});

export default CartIcon;


