import {useMemo} from "react";


const useFilterProductCategories = (products, categories) => {
    return useMemo(() => {
        let active = categories.find(el => el.active === true)
        if (active.id === 'all') {
            return products
        }
        return [...products].filter(p => p.category === active.id)

    }, [products, categories]);
}
    const useFilterNutsAndVegeterianProduct = (products, categories, checkbox) => {
    const filterProductCategories = useFilterProductCategories(products, categories)
    const filterNutsProduct = useMemo(() => {
        if (checkbox.nuts) {
            return filterProductCategories.filter(p => p.nuts !== true)
        }

        return filterProductCategories

    }, [checkbox, filterProductCategories])

    return useMemo(() => {
        if (checkbox.vegeterian) {
            return filterNutsProduct.filter(p => p.vegeterian)
        }
        return filterNutsProduct
    }, [checkbox, filterNutsProduct])

}


export const useProduct = (products, categories, checkbox, value) => {
    const FilterNutsAndVegeterianProduct = useFilterNutsAndVegeterianProduct(products, categories, checkbox)

    return useMemo(() => {
        return FilterNutsAndVegeterianProduct.filter(p => p.spiciness <= value)

    }, [value, FilterNutsAndVegeterianProduct]);
}