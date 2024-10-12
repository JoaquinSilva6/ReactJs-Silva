import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  
  const [cartState, setCartState] = useState([])

  const addItem = (product, qtyItem) => {
    const existingProduct = cartState.find((item) => item.id === product.id)

    if (existingProduct) {
      const updatedCart = cartState.map((item) => 
        item.id === product.id 
          ? { ...item, qtyItem: item.qtyItem + 1 } 
          : item
      )
      setCartState(updatedCart)
    } else {
      const newCartState = [...cartState, { ...product, qtyItem }]
      setCartState(newCartState)
    }
  }

  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id)

    if (existingProduct) {
      if (existingProduct.qtyItem === 1) {
        const filteredCart = cartState.filter((item) => item.id !== product.id)
        setCartState(filteredCart)
      } else {
        const updatedCart = cartState.map((item) =>
          item.id === product.id 
            ? { ...item, qtyItem: item.qtyItem - 1 } 
            : item
        )
        setCartState(updatedCart)
      }
    }
  }

  const deleteItem = (product) => {
    const updatedCartState = cartState.filter((item) => item.id !== product.id)
    setCartState(updatedCartState)
  }

  const valuesToShare = {
    cartState,
    addItem,
    removeItem,
    deleteItem
  }

  return (
    <CartContext.Provider value={valuesToShare}>
      {children}
    </CartContext.Provider>
  )
}
