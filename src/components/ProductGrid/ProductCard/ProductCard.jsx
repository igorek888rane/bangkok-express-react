import React, {useContext} from "react";
import style from "./../ProductGrid.module.css";
import {addProduct} from "../../../utils/productCart";
import {Context} from "../../../context";


const ProductCard = ({product}) => {

    const {cartItem, setCartItem, setShake} = useContext(Context)

    return (
        <div id="holder" className={style.container_half}>
            <div className={style.card}>
                <div className={style.card__top}>
                    <img src={`http://localhost:5000/` + product.image} className={style.card__image} alt="product"/>
                    <span className={style.card__price}>€{product.price.toFixed(2)}</span>
                </div>
                <div className={style.card__body}>
                    <div className={style.card__title}>{product.name}</div>
                    <button type="button" className={style.card__button}
                            onClick={() => addProduct(product, cartItem, setCartItem, setShake)}>
                        <img src="https://course-jsbasic.javascript.ru/assets/icons/plus-icon.svg" alt="icon"/>
                    </button>
                </div>
            </div>
        </div>

    )
};

export default ProductCard;
