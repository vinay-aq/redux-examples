import {CreateStore} from 'redux';
import rootReducer from './rootReducer';

const store = CreateStore(rootReducer);
export default store;