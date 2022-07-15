import React, { useState, useContext } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const [productList, setProductList] = useState([])

  const [slug, setSlug] = useState()

  const [modal, setModal] = useState()

  const [modalActive, setModalActive] = useState(false)

  const RemoveFromCart = (item) => {
    const newCart = cart.filter((prod) => prod !== item)
    setCart(newCart)
  }

  const EmptyCart = () => {
    setCart([])
  }
  return (
    <AppContext.Provider
      value={{
        modal,
        setModal,
        modalActive,
        setModalActive,
        slug,
        setSlug,
        cart,
        setCart,
        productList,
        setProductList,
        RemoveFromCart,
        EmptyCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
