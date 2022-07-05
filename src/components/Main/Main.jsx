import React, {useEffect, useState} from "react";
import RibbonMenu from "./../RibbonMenu/RibbonMenu";
import ProductGrid from "./../ProductGrid/ProductGrid";
import Slider from "./../Slider/Slider";
import Filter from "../Filter/Filter";
import {categoriesArray} from "../../Data/Data";
import ProductService from "../../api/ProductService";
import Loader from "../Loader/Loader";
import {useProduct} from "../../hooks/useProduct";

const Main = () => {

    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false);
    const [categories, setCategories] = useState(categoriesArray);
    const [checkbox, setCheckbox] = useState({nuts: false, vegeterian: false})
    const [value, setValue] = useState(2)

    const fetchProduct = async () => {
        setLoad(true)
        const data = await ProductService.getAll()
        setProducts(data)
        setLoad(false)
    }

    useEffect(() => {
            fetchProduct()
        }, []
    )

    const filterProduct = useProduct(products, categories, checkbox, value)

    return (
        <main>
            <Slider products={products}/>
            <RibbonMenu
                setCategories ={setCategories}
                categories={categories}/>
            <Filter checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    value={value}
                    setValue={setValue}
                    steps={[0,1,2,3,4]}/>
            {load
                ? <Loader/>
                : <ProductGrid products={filterProduct}/>}

        </main>
    );
};

export default Main;
