import React, {useContext} from 'react';
import {CartContext} from "../../context";
import CartProduct from "./CartProduct";
import CartForm from "./CartForm";

const Cart = () => {

    const {cartItem} = useContext(CartContext)

    return (
        <>
            {cartItem.map(product => <CartProduct key={product.id} product={product}/>)}
            <CartForm/>
        </>
    );
};

export default Cart;