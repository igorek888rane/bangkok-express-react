export const addProduct = (product, cartItem, setCartItem) => {
    const productFind = cartItem.find(item => item.id === product.id)
    if (productFind) {
        productFind.count++
        setCartItem([...cartItem])
    } else {
        setCartItem([...cartItem, {...product, count: 1}])
    }

}
export const getTotalCount = (cartItem) => {
    return cartItem.reduce((sum, current) => sum + current.count, 0)
}
export const getTotalPrice = (cartItem) => {
    return cartItem.reduce((sum, current) => sum + (current.price * current.count), 0)

}
export const updateProduct = (product, amount, cartItem, setCartItem) => {

    cartItem.forEach(p => {
        if (p.id === product.id) product.count += amount
    })
    setCartItem([...cartItem])

}