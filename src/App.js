import React, { useMemo, useState } from "react";
import "./App.css";
import RibbonMenu from "./components/RibbonMenu/RibbonMenu";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import {productsArray }from "././Data/Data";

function App() {
  let [products, setProducts] = useState(productsArray);


  const filterProduct = (category) => {
    let copyArrayProducts = JSON.parse(JSON.stringify(productsArray))
    category.id === "all"
      ? setProducts(copyArrayProducts)
      : setProducts(copyArrayProducts.filter((el) => el.category === category.id));
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Slider />
        <RibbonMenu filter={filterProduct} />
        <ProductGrid products={products} />
      </main>
    </div>
  );
}

export default App;
