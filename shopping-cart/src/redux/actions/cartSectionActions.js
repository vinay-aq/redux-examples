import { ADD_PROD_TO_CART,RESET_CART } from "./constants"

export const addProductToCart = (product) => { 
    return {
         type: ADD_PROD_TO_CART,
         payload:product
    }
}

export const resetCart = () => {
    return  {
        type:RESET_CART,
    }
}