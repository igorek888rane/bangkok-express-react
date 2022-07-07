import React from 'react';
import style from "./Cart.module.css";
import {updateProduct} from "../../utils/productCart";
import {useContext} from "react";
import {Context} from "../../context";

const CartProduct = ({product, setActive}) => {

    const {cartItem, setCartItem} = useContext(Context)

    return (
        <div className={style.cart_product}>
            <div className={style.cart_product__img}>
                <img src={`http://localhost:5000/` + product.image} alt="product"/>
            </div>
            <div className={style.cart_product__info}>
                <div className={style.cart_product__title}>{product.name}</div>
                <div className={style.cart_product__price_wrap}>
                    <div className={style.cart_counter}>
                        <button type="button"
                                className={`${style.cart_counter__button}`}
                                onClick={() => updateProduct(product, -1, cartItem, setCartItem, setActive)}>
                            <img src="https://course-jsbasic.javascript.ru/assets/icons/square-minus-icon.svg"
                                 alt="minus"/>
                        </button>
                        <span className={style.cart_counter__count}>{product.count}</span>
                        <button type="button"
                                className={`${style.cart_counter__button}`}
                                onClick={() => updateProduct(product, 1, cartItem, setCartItem)}>
                            <img src="https://course-jsbasic.javascript.ru/assets/icons/square-plus-icon.svg"
                                 alt="plus"/>
                        </button>
                    </div>
                    <div className={style.cart_product__price}>{`€${(product.price * product.count).toFixed(2)}`}</div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;


