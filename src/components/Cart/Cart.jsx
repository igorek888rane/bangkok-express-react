import React, {useContext} from 'react';
import {Context} from "../../context";
import CartProduct from "./CartProduct";
import CartForm from "./CartForm";

const Cart = ({setActive}) => {

    const {cartItem} = useContext(Context)

    return (
        <div>
            {cartItem.map(product => <CartProduct key={product.id} product={product} setActive={setActive}/>)}
            <CartForm/>
        </div>
    );
};

export default Cart;