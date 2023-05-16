import { createContext, useReducer } from "react";
export const CartContext = createContext();
import { cartReducer, initialState } from "../Reducers/cart.js";

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const RemoveFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, RemoveFromCart, clearCart };
}

export function CartContextProvider({ children }) {
  const { state, addToCart, RemoveFromCart, clearCart } = useCartReducer();
  //  Aquí envolvemos los elementos de App.jsx y no los de main.jsx
  //  ya que no necesitamos envolver toda la aplicación en este caso
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, RemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
