import { REDUCE_PROD_FROM_INVENTORY,FETCH_INVENTORY } from "./constants"
import axios from 'axios';

export const fetchInventory=()=> {
    return async function(dispatch, getState) {
        const res = await axios.get('http://localhost:3000/availableProducts');
        dispatch({type:FETCH_INVENTORY, payload:res.data})
    }
}

export const reduceProductFromInventory = (productId)=> {
    return { 
        type:REDUCE_PROD_FROM_INVENTORY,
        payload:productId
    }
}
