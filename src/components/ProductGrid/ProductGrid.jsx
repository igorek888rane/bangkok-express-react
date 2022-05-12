import React, { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import style from "./ProductGrid.module.css";

const ProductGrid = (props) => {
  
  let productsCard = props.products.map((product) => (
    <ProductCard product = {product} key = {product.id}/>
  ));

  return (
    <div className={style.container}>
      <div className={style.products_grid}>
        <div className={style.products_grid__inner}>{productsCard}</div>
      </div>
    </div>
  );
};

export default ProductGrid;
