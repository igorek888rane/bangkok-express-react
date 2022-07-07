import React, {useContext} from "react";
import style from "./../Slider.module.css";
import {addProduct} from "../../../utils/productCart";
import {CartContext} from "../../../context";

const SliderEl = ({slide}) => {
    const {cartItem, setCartItem, setShake} = useContext(CartContext)
    return (
        <div className={style.carousel__slide} data-id={slide.id}>
            <img src={'http://localhost:5000/' + slide.imageForSlider} className={style.carousel__img} alt="slide"/>
            <div className={style.carousel__caption}>
                <span className={style.carousel__price}>€{slide.price.toFixed(2)}</span>
                <div className={style.carousel__title}>{slide.name}</div>
                <button type="button" className={style.carousel__button}
                        onClick={() => addProduct(slide, cartItem, setCartItem, setShake)}>
                    <img src="https://course-jsbasic.javascript.ru/assets/icons/plus-icon.svg" alt="icon"/>
                </button>
            </div>
        </div>
    );
};

export default SliderEl;
