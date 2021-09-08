import { checkoutTypes } from "../aciontypes";

const InitialState ={
    Address:[]
}
const initialstate ={
    data:{}
}
export const CheckoutReducer = (state = InitialState , {type,payload})=>{
    switch (type) {
        case checkoutTypes.CHECKOUT_REQUEST:
            return {...state, Address:payload };        
        default:
            return state;
    }
};

export const CheckoutSuccessReducer = (state = initialstate, {type,payload})=>{
    switch (type) {
        case checkoutTypes.CHECKOUT_SUCCESS:
            return {...state, data:payload };        
        default:
            return state;
    }
};