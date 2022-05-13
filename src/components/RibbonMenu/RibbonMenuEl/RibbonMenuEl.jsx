import React, { useState } from "react";
import style from "./../RibbonMenu.module.css";

const RibbonMenuEl = (props) => {
  let productFilter = (e) => {
    props.filter(props.category);
    props.active(props.category);
  };
  return (
    <a
      onClick={productFilter}
      className={props.category.active ? `${style.ribbon__item}  ${style.ribbon__item_active}` : style.ribbon__item}
      id={props.category.id}
    >
      {props.category.name}
    </a>
  );
};

export default RibbonMenuEl;
