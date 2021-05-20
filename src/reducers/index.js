import { combineReducers } from 'redux';
import products from './Product';
import cart from './cart';
import message from './message';
var myReducer = combineReducers({
    products,
    cart,
    message
});
export default myReducer;