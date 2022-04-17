import {combineReducers} from 'redux';
import { productSectionReducer,cartSectionReducer } from './reducers/shoppingCart';

export default rootReducer = combineReducers({
    availableProducts:productSectionReducer,
    cartProducts:cartSectionReducer
})