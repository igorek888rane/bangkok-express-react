import React, { useState } from "react";
import style from "./RibbonMenu.module.css";
import RibbonMenuEl from "./RibbonMenuEl/RibbonMenuEl";

const RibbonMenu = (props) => {
  const [categories, setCategories] = useState([
    {
      id: "all",
      name: "All",
      active: false,
    },
    {
      id: "salads",
      name: "Salads",
      active: false,
    },
    {
      id: "soups",
      name: "Soups",
      active: false,
    },
    {
      id: "chicken-dishes",
      name: "Chicken dishes",
      active: false,
    },
    {
      id: "beef-dishes",
      name: "Beef dishes",
      active: false,
    },
    {
      id: "seafood-dishes",
      name: "Seafood dishes",
      active: false,
    },
    {
      id: "vegetable-dishes",
      name: "Vegetable dishes",
      active: false,
    },
    {
      id: "bits-and-bites",
      name: "Bits and bites",
      active: false,
    },
    {
      id: "on-the-side",
      name: "On the side",
      active: false,
    },
  ]);
  const activeClass = (category) => {
    [...categories].forEach((el) =>  
    el.id === category.id 
    ? el.active = true 
    : el.active=false);
   
  };
  let RibbonEl = categories.map((category) => (
    <RibbonMenuEl active={activeClass} filter={props.filter} category={category} key={category.id} />
  ));
  return (
    <div className={style.container}>
      <h2 className={style.section_heading}>Our Menu</h2>
      <div className={style.ribbon}>
        <nav className={style.ribbon__inner}>{RibbonEl}</nav>
      </div>
    </div>
  );
};

export default RibbonMenu;
