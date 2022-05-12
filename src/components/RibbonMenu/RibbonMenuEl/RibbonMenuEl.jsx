import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../RibbonMenu.module.css";

const RibbonMenuEl = (props) => {
  let productFilter = (e) => {
    props.filter(props.category);
  };
  return (
    <NavLink onClick={productFilter} to={props.category.id}
      className={(navData) =>navData.isActive ? `${style.ribbon__item}  ${style.ribbon__item_active}` : style.ribbon__item} id={props.category.id}>
      {props.category.name}
    </NavLink>
  );
};

export default RibbonMenuEl;


