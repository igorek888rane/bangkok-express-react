export const addProduct = (product, cartItem, setCartItem, setShake) => {
    setShake(true)
    const productFind = cartItem.find(item => item.id === product.id)
    if (productFind) {
        productFind.count++
        setCartItem([...cartItem])
    } else {
        setCartItem([...cartItem, {...product, count: 1}])
    }
    setTimeout(() => {
        setShake(false)
    }, 500)

}
export const getTotalCount = (cartItem) => {
    return cartItem.reduce((sum, current) => sum + current.count, 0)
}
export const getTotalPrice = (cartItem) => {
    return cartItem.reduce((sum, current) => sum + (current.price * current.count), 0)

}
const onProductUpdate = (product, cartItem, setActive) => {
    if (product.count === 0) {
        cartItem.forEach((item, index) => {
            if (item.count === 0) cartItem.splice(index, 1)
        })
        if (!cartItem.length) {
            setActive(false)
            document.body.className = ''
        }
    }

}
export const updateProduct = (product, amount, cartItem, setCartItem, setActive) => {

    cartItem.forEach(p => {
        if (p.id === product.id) {
            product.count += amount
            onProductUpdate(product, cartItem, setActive)
        }
    })
    setCartItem([...cartItem])

}