import {combineReducers} from 'redux';
import { productSectionReducer,cartSectionReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
    productSection:productSectionReducer,
    cartSection:cartSectionReducer
})

/* From here we know that the useSelector state will return 
state = {
    availableProducts :{},
    cartProducts:{}
} */
export default rootReducer;