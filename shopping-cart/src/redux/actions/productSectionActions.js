import { REDUCE_PROD_FROM_INVENTORY } from "./constants"

export const reduceProductFromInventory = (productId)=> {
    return { 
        type:REDUCE_PROD_FROM_INVENTORY,
        payload:productId
    }
}
