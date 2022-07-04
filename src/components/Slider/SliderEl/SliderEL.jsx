import React from "react";
import style from "./../Slider.module.css";

const SliderEl = ({slide}) => {
  return (
    <div className={style.carousel__slide} data-id={slide.id}>
      <img src={'http://localhost:5000/'+slide.imageForSlider} className={style.carousel__img} alt="slide" />
      <div className={style.carousel__caption}>
        <span className={style.carousel__price}>€{slide.price.toFixed(2)}</span>
        <div className={style.carousel__title}>{slide.name}</div>
        <button type="button" className={style.carousel__button}>
          <img src="https://course-jsbasic.javascript.ru/assets/icons/plus-icon.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default SliderEl;
