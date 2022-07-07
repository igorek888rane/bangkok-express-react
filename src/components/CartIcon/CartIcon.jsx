import React, {useContext} from 'react';
import style from './CartIcon.module.css'
import {getTotalCount, getTotalPrice} from "../../utils/productCart";
import {Context} from "../../context";
import Cart from "../Cart/Cart";

const CartIcon = React.forwardRef(({positionCart, setActive}, ref) => {

    const {cartItem, shake, setModal} = useContext(Context)

    return (
        <div onClick={() => {
            document.body.className = 'is-modal-open'
            setModal({title: 'YOUR ORDER', body: <Cart setActive={setActive}/>})
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


