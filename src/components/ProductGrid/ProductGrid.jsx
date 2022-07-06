import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import style from "./ProductGrid.module.css";

const ProductGrid = ({products,cartItem,setCartItem}) => {

  let productsCard = products.map((product) => (
    <ProductCard product = {product} key = {product.id} cartItem={cartItem} setCartItem={setCartItem}/>
  ));

  return (
      <div className={style.products_grid}>
        <div className={style.products_grid__inner}>{productsCard}</div>
      </div>
  );
};

export default ProductGrid;
