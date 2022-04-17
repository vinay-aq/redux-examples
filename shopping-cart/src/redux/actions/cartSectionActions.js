import { ADD_PROD_TO_CART } from "./constants"

export const addProductToCart = (product) => { 
    return {
         type: ADD_PROD_TO_CART,
         payload:product
    }
}