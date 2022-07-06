export const addProduct = (product,cartItem,setCartItem)=>{
    const productFind = cartItem.find(item=>item.id ===product.id)
    if(productFind){
        productFind.count ++
        setCartItem([ ...cartItem])
    }else {
        setCartItem([ ...cartItem, {...product,count:1}])
    }

}