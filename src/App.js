import React, { useState } from "react";
import "./App.css";
import RibbonMenu from "./components/RibbonMenu/RibbonMenu";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { BrowserRouter } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import productsArray from "./components/ProductGrid/ProductsArray";

function App() {
  let [products, setProducts] = useState([]);

  const filterProduct = (category) => {
    category.id === "all"
      ? setProducts(productsArray)
      : setProducts(productsArray.filter((el) => el.category === category.id));
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Slider />
        <BrowserRouter>
          <RibbonMenu filter={filterProduct} />
          <ProductGrid products={products} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
