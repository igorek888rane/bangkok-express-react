import React, {  useState } from "react";
import RibbonMenu from "./../RibbonMenu/RibbonMenu";
import ProductGrid from "./../ProductGrid/ProductGrid";
import Slider from "./../Slider/Slider";
import {productsArray }from "./../../Data/Data"

const Main = () => {
  let [products, setProducts] = useState(productsArray);

  const filterProduct = (category) => {
    let copyArrayProducts = JSON.parse(JSON.stringify(productsArray));
    category.id === "all"
      ? setProducts(copyArrayProducts)
      : setProducts(copyArrayProducts.filter((el) => el.category === category.id));
  };
  return (
    <main>
      <Slider />
      <RibbonMenu filter={filterProduct} />
      <ProductGrid products={products} />
    </main>
  );
};

export default Main;
