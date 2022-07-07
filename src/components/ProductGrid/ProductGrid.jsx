import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import style from "./ProductGrid.module.css";

const ProductGrid = ({products}) => {

    let productsCard = products.map((product) => (
        <ProductCard product={product} key={product.id}/>
    ));

    return (
        <div className={style.products_grid}>
            <div className={style.products_grid__inner}>{productsCard}</div>
        </div>
    );
};

export default ProductGrid;
