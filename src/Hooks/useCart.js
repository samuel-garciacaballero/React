import { useContext } from "react";
import { CartContext } from "../Context/cart";

export function useCart(){
    const context = useContext(CartContext)
    if(context===undefined){
        throw new Error('No se puede usar useCart sin un CartProvider')
    }
    return context
}