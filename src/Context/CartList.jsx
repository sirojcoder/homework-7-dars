import { createContext, useState } from "react";

export const CartContex = createContext()

const CartListProvider = ({children}) => {

   const [cart , setCart] = useState([])

   return <CartContext.Provider value={{cart,setCart}}>{children}</CartContext.Provider>
}

export default CartListProvider;