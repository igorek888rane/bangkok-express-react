import React from "react";
import style from "./../Slider.module.css";

const SliderEl = (props) => {
  return (
    <div className={style.carousel__slide} data-id={props.slide.id}>
      <img src={props.slide.image} className={style.carousel__img} alt="slide" />
      <div className={style.carousel__caption}>
        <span className={style.carousel__price}>€{props.slide.price.toFixed(2)}</span>
        <div className={style.carousel__title}>{props.slide.name}</div>
        <button type="button" className={style.carousel__button}>
          <img src="https://course-jsbasic.javascript.ru/assets/icons/plus-icon.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default SliderEl;
