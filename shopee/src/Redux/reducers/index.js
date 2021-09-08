import { combineReducers } from "redux";
import {auth} from './auth';
import {productReducer , selectedProductReducer,product_category_Reducer } from './productReducer';
import { profileReducer } from "./profileReducer";
import {CartReducer} from './CartReducer';
import { CartAmountReducer } from "./CartReducer";
import {addressReducer} from './addressReducer';
import { CheckoutReducer } from "./checkoutReducer";
import {CheckoutSuccessReducer} from "./checkoutReducer";

export default combineReducers({
    auth,
    productReducer,
    selectedProductReducer,
    product_category_Reducer,
    profileReducer,
    CartReducer,
    CartAmountReducer,
    CheckoutReducer,
    CheckoutSuccessReducer,
    addressReducer,
});

