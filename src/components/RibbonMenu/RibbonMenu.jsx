import React, { useState } from "react";
import style from "./RibbonMenu.module.css";
import RibbonMenuEl from "./RibbonMenuEl/RibbonMenuEl";

const RibbonMenu = (props) => {
  const [categories, setCategories ]= useState([
    {
      id: "all",
      name: "All",
    },
    {
      id: "salads",
      name: "Salads",
    },
    {
      id: "soups",
      name: "Soups",
    },
    {
      id: "chicken-dishes",
      name: "Chicken dishes",
    },
    {
      id: "beef-dishes",
      name: "Beef dishes",
    },
    {
      id: "seafood-dishes",
      name: "Seafood dishes",
    },
    {
      id: "vegetable-dishes",
      name: "Vegetable dishes",
    },
    {
      id: "bits-and-bites",
      name: "Bits and bites",
    },
    {
      id: "on-the-side",
      name: "On the side",
    },
  ]);
  let RibbonEl = categories.map((category) => <RibbonMenuEl filter={props.filter} category={category}  key = {category.id}/>);
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
