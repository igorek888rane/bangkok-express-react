import React from "react";
import style from "./../RibbonMenu.module.css";

const RibbonMenuEl = (props) => {


  let activeClass = () => {
    props.active(props.category);
  };
  return (
    <a
      onClick={activeClass}
      className={props.category.active ? `${style.ribbon__item}  ${style.ribbon__item_active}` : style.ribbon__item}
      id={props.category.id}
    >
      {props.category.name}
    </a>
  );
};

export default RibbonMenuEl;
