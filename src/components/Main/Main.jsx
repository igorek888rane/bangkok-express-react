import React, {useEffect, useState} from "react";
import RibbonMenu from "./../RibbonMenu/RibbonMenu";
import ProductGrid from "./../ProductGrid/ProductGrid";
import Slider from "./../Slider/Slider";
import Filter from "../Filter/Filter";
import {categoriesArray} from "../../Data/Data";
import ProductService from "../../api/ProductService";
import Loader from "../Loader/Loader";
import {useProduct} from "../../hooks/useProduct";


const Main = ({cartItem,setCartItem}) => {

    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false);
    const [categories, setCategories] = useState(categoriesArray);
    const [checkbox, setCheckbox] = useState({nuts: false, vegeterian: false})
    const [value, setValue] = useState(2)

    useEffect(() => {
        fetchProduct()
    }, [])

    async function fetchProduct() {
        setLoad(true)
        const data = await ProductService.getAll()
        setProducts(data)
        setLoad(false)
    }

    const filterProduct = useProduct(products, categories, checkbox, value)


    return (
        <main>
            <div className={'container'}>
                <Slider products={products}
                        cartItem ={cartItem}
                        setCartItem={setCartItem}/>
                <RibbonMenu
                    setCategories={setCategories}
                    categories={categories}/>
                <Filter checkbox={checkbox}
                        setCheckbox={setCheckbox}
                        value={value}
                        setValue={setValue}
                        steps={[0, 1, 2, 3, 4]}/>
                {load
                    ? <Loader/>
                    : <ProductGrid products={filterProduct}
                                   cartItem={cartItem}
                                   setCartItem ={setCartItem}/>}
            </div>

        </main>
    );
};

export default Main;
