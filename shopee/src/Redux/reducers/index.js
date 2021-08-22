import { combineReducers } from "redux";

import auth from './auth';
import products from "./product";
import carts from "./cart";


export default combineReducers({
    auth,products,carts
})