import React, {useContext} from "react";
import style from "./../Slider.module.css";
import {addProduct} from "../../../utils/productCart";
import {Context} from "../../../context";

const SliderEl = ({slide}) => {
    const {cartItem, setCartItem, setShake} = useContext(Context)
    return (
        <div className={style.carousel__slide} data-id={slide.id}>
            <img src={'https://bangkok-express.herokuapp.com/' + slide.imageForSlider} className={style.carousel__img} alt="slide"/>
            <div className={style.carousel__caption}>
                <span className={style.carousel__price}>€{slide.price.toFixed(2)}</span>
                <div className={style.carousel__title}>{slide.name}</div>
                <button type="button" className={style.carousel__button}
                        onClick={() => addProduct(slide, cartItem, setCartItem, setShake)}>
                    <img src="https://bangkok-express.herokuapp.com/assets/plus-icon.svg" alt="icon"/>
                </button>
            </div>
        </div>
    );
};

export default SliderEl;
