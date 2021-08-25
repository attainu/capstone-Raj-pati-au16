import { combineReducers } from "redux";
import {auth} from './auth';
import {productReducer , selectedProductReducer} from './productReducer';

export default combineReducers({
    auth,
    productReducer,
    selectedProductReducer,
});

