import React, {useEffect, useMemo, useState} from "react";
import RibbonMenu from "./../RibbonMenu/RibbonMenu";
import ProductGrid from "./../ProductGrid/ProductGrid";
import Slider from "./../Slider/Slider";
import Filter from "../Filter/Filter";
import {categoriesArray} from "../../Data/Data";
import ProductService from "../../api/ProductService";
import Loader from "../Loader/Loader";

const Main = () => {

    const [products,setProducts] = useState([])
    const [load,setLoad] = useState(false);
    const [categories, setCategories] = useState(categoriesArray);

    const activeClass = (category) => {
        let copyArrayCategories = JSON.parse(JSON.stringify(categories));
        copyArrayCategories.forEach((el) => (el.id === category.id ? (el.active = true) : (el.active = false)));
        setCategories(copyArrayCategories);

    };
   async function getProduct () {
       setLoad(true)
        const data = await ProductService.getAll()
        setProducts(data)
       setLoad(false)
    }

    useEffect(() => {
        getProduct()
        }, []
    )

    const filterProduct = useMemo(() => {
        let active = categories.find(el => el.active === true)

        if (active.id === 'all') {
            return [...products]
        } else {
            return [...products].filter(p => p.category === active.id)
        }
    }, [products,categories])





    return (
        <main>
            <Slider products = {products}/>
            <RibbonMenu activeClass={activeClass} categories={categories}/>
            <Filter/>
            {load
                ? <Loader/>
                : <ProductGrid products={filterProduct}/>}

        </main>
    );
};

export default Main;
