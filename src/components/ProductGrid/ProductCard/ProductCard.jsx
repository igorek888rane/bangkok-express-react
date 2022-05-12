import React from "react";
import style from "./../ProductGrid.module.css";



const ProductCard = (props) => {
return (
  <div id="holder" className={style.container_half}>
  <div className={style.card}>
    <div className={style.card__top}>
      <img src={props.product.image} className={style.card__image} alt="product"/>
      <span className={style.card__price}>€{props.product.price.toFixed(2)}</span>
    </div>
    <div className={style.card__body}>
      <div className={style.card__title}>{props.product.name}</div>
      <button type="button" className={style.card__button}>
        <img src="https://course-jsbasic.javascript.ru/assets/icons/plus-icon.svg" alt="icon"/>
      </button>
    </div>
  </div>
</div>
 
)
};

export default ProductCard;
